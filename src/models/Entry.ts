import { TextLine } from "vscode";
import { BuJoSkeleton } from "./BuJoSkeleton";
import { Pattern } from "./Pattern";


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
     * The editor text line corresponding to the entry.
     */
    public line: TextLine | undefined;


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
    private parseEntryId(text: string) {
        // Match the entry id.
        const match = text.match(Pattern.extractId);

        // If there is match.
        if (match) {
            // Set the entry ID.
            this.id = match.groups!.id;
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
    public fromTextLine(line: TextLine): void {
        // Set the line.
        this.line = line

        // Check if the line has a valid entry.
        if (!Pattern.checkEntry.test(line.text)) {
            throw new Error("The line does not contain a valid BuJo entry.");
        }

        // Set entry components.
        this.parseEntryComponents(line.text);

        // Set entry ID.
        this.parseEntryId(line.text);

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
