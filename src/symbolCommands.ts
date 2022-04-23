import { Range, TextEditor, TextEditorEdit, window } from "vscode";
import { Entry } from "./models/Entry";

/*
* Set a custom symbol.
*/
export async function entrySetSymbol(newSymbol: string): Promise<boolean> {
    // Ensure an editor is open.
    const editor: TextEditor | undefined = window.activeTextEditor;

    // Ensure an editor is open.
    if (!editor) {
        throw new Error("No editors open.");
    }

    // Create entry from current line.
    const entry = new Entry(editor.document.lineAt(editor.selection.active.line));

    // Toggle symbol, if the new symbol matches the current one.
    if (entry.component.symbol == newSymbol) {
        // Toggle between current symbol and open symbol.
        newSymbol = " ";
    }

    // Find index at symbol.
    const index = entry.GetIndexAtSymbol();

    // Create range for replacement.
    const range: Range = new Range(entry.line.lineNumber, index, entry.line.lineNumber, index + 1);

    // Replace character with symbol.
    const editStatus = await editor.edit((editBuilder: TextEditorEdit) => {
        editBuilder.replace(range, newSymbol);
    });

    // Throw if the edit failed.
    if (!editStatus) {
        throw new Error('Failed to update the entry status.');
    }

    return (editStatus);
};

