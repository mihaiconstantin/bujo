import { TextLine } from "vscode";
import { BuJoSkeleton } from "./BuJoSkeleton";
import { Pattern } from "./Pattern";


export class Entry implements BuJoSkeleton {
    // Implement BuJo entity.
    public notationOpen: string = "";
    public notationClose: string = "";
    public symbol: string = "";
    public modifier: string = "";
    public text: string = "";
    public id: string = "";
    public parsedText: { alias: string; filename: string } = { alias: "", filename: "" };


    // The editor text line corresponding to the entry.
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
     * Initialize entry from editor line.
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

        // Parse the entry text if it is a valid wiki link with alias.
        if (this.isWikiLinkWithALias()) {
            this.parsedText = this.parseWikiLink();
        }
    }


    /**
     * Check if the entry text is a wiki link.
     */
    public isWikiLinkWithALias(): boolean {
        // Perform the check.
        const check: boolean = Pattern.checkAlias.test(this.text!);

        return check;
    }


    /**
     * Extract alias from wiki link.
     */
    public parseWikiLink(): { alias: string; filename: string } {
        // Match the entry id.
        const match = this.text.match(Pattern.extractWikiLink);

        // Check if there was a match.
        if (match) {
            // Store the matches.
            return {
                alias: match.groups!.alias,
                filename: match.groups!.filename,
            }
        } else {
            throw new Error("Entry text does not contain a wiki link with alias.");
        }
    }
}
