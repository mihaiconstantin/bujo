import { TextEditor, TextEditorEdit, TextLine } from "vscode";
import { BuJoSkeleton } from "./BuJoSkeleton";
import { Pattern } from "./Pattern";
import { genUUIDInsecure } from "../uuid";


export class Entry implements BuJoSkeleton {
    /**
     * BuJo skeleton implementation.
     */
    public notationOpen: string = "";
    public notationClose: string = "";
    public symbol: string = "";
    public modifier: string = "";
    public text: string = "";
    public id: string = "";


    /**
     * If the entry text is a full wiki link with an alias.
     */
    public wikiLink: { alias: string; filename: string } = { alias: "", filename: "" };


    /**
     * The editor and text line corresponding to the entry.
     */
    public line: TextLine;
    private editor: TextEditor;


    /**
     * Entry constructor.
     */
    public constructor(editor: TextEditor, line: TextLine) {
        // Set the editor.
        this.editor = editor;

        // Set the line.
        this.line = line;
    }


    /**
     * Write a given entry id to the corresponding line in the editor.
     */
    private async writeEntryId(id: string): Promise<boolean> {
        // Write the id.
        return await this.editor.edit((editBuilder: TextEditorEdit) => {
            editBuilder.insert(this.line.range.end, ` ^${id}`);
        });
    }


    /**
     * Set entry elements from text.
     */
    private parseEntryComponents(text: string) {
        // Match the entry elements text.
        const match = text.match(Pattern.extractEntry);

        // Set the entry elements.
        this.notationOpen = match!.groups!.open;
        this.notationClose = match!.groups!.close;
        this.symbol = match!.groups!.symbol;
        this.modifier = match!.groups!.modifier;
        this.text = match!.groups!.text;
    }


    /**
     * Set entry id from text.
     */
    private async parseEntryId(text: string): Promise<void> {
        // Match the entry id.
        const match = text.match(Pattern.extractId);

        // If there is match.
        if (match) {
            // Set the entry ID.
            this.id = match.groups!.id;
        } else {
            // Generate an entry ID.
            this.id = genUUIDInsecure();

            // Write the ID on the line.
            await this.writeEntryId(this.id);
        }
    }


    /**
     * Set wiki link alias and filename.
     */
    private parseWikiLink(): void {
        // Match the entry id.
        const match = this.text.match(Pattern.extractWikiLink);

        // Throw if not a match.
        if (!match) {
            throw new Error("The entry text is not a wiki link with an alias.");
        }

        // Store the matches.
        this.wikiLink.alias = match.groups!.alias;
        this.wikiLink.filename = match.groups!.filename;
    }


    /**
     * Create an entry from a given editor line or fail.
     */
    public async fromTextLine(): Promise<void> {
        // Check if the line has a valid entry.
        if (!Pattern.checkEntry.test(this.line.text)) {
            throw new Error("The line does not contain a valid BuJo entry.");
        }

        // Set entry components.
        this.parseEntryComponents(this.line.text);

        // Set entry ID.
        await this.parseEntryId(this.line.text);

        // Parse the entry text if it is a valid wiki link with an alias.
        if (this.isWikiLinkWithALias()) {
            this.parseWikiLink();
        }
    }


    /**
     * Check if the entry **text** is a wiki link with an alias.
     */
    public isWikiLinkWithALias(): boolean {
        // Perform the check.
        return Pattern.checkAlias.test(this.text!);
    }
}
