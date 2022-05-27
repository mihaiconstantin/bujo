import { Range, TextEditor, TextEditorEdit, TextLine } from "vscode";
import { Entry } from "./Entry";
import { Pattern } from "./Pattern";

export class Symbol {
    /**
     * VS Code objects.
     */
     private editor: TextEditor;


     /**
      * Symbol constructor.
      */
     public constructor(editor: TextEditor) {
         this.editor = editor;
     }


    /**
     * Get line index for a given entry symbol.
     * @param line An instance of `TextLine` class.
     * @param symbol The symbol to use during parsing.
     */
    private getLineIndexAtSymbol(line: TextLine, symbol: string): number {
        // Regex pattern (i.e., see: https://regex101.com/r/ABVEf2/3).
        const pattern = Pattern.extractSymbol(symbol);

        // Match and return.
        return line.text.match(pattern)!.index!;
    };


    /**
     * Update the symbol corresponding to an entry.
     * @param newSymbol The new symbol for updating the entry.
     * @param entry An instance of `Entry` class.
     */
    public async update(newSymbol: string, entry: Entry, toggle: boolean = true): Promise<boolean> {
        // Get index for the current symbol.
        const index = this.getLineIndexAtSymbol(entry.line!,  entry.symbol);

        // Toggle symbol if the new symbol matches the current one.
        if (toggle && entry.symbol == newSymbol) {
            // Toggle between the current and the open symbol,
            entry.symbol = " ";
        } else {
            // Otherwise set the new symbol.
            entry.symbol = newSymbol;
        }

        // Create range for replacement.
        const range: Range = new Range(entry.line!.lineNumber, index, entry.line!.lineNumber, index + 1);

        // Replace character with symbol.
        const editStatus = await this.editor.edit((editBuilder: TextEditorEdit) => {
            editBuilder.replace(range,  entry.symbol);
        });

        return editStatus;
    }
}
