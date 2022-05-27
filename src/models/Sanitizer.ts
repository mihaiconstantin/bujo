import { Range, TextEditor, TextEditorEdit, TextLine } from "vscode";

export class Sanitizer {
    /**
     * Patterns for removing trailing whitespace.
     */
    private patternWhitespace: RegExp = /(\s*)(?<=$)/;
    private patternLineEnd: RegExp = /$/;

    /**
     * Text editor.
     */
    private editor: TextEditor;


    /**
     * Sanitizer constructor.
     */
    public constructor(editor: TextEditor) {
        this.editor = editor;
    }


    /**
     * Sanitize the active line in the editor.
     */
    public async sanitizeActiveLine(): Promise<void> {
        // Get active line.
        const line: TextLine = this.editor.document.lineAt(this.editor.selection.active.line);

        // Find index for first `\s` before the line's end.
        let indexStart: number = line.text.match(this.patternWhitespace)?.index!;

        // Get end of line index.
        let indexEnd: number = line.text.match(this.patternLineEnd)?.index!;

        // Create range for replacement.
        const range: Range = new Range(line.lineNumber, indexStart, line.lineNumber, indexEnd);

        // Remove white space.
        await this.editor.edit((editBuilder: TextEditorEdit) => {
            editBuilder.replace(range, '');
        });
    }
}
