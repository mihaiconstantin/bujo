import { TextLine } from "vscode";
import { EntryComponent } from "./EntryComponent";

export class Entry {
    /*
    * Pattern to check if a line contains a valid entry.
    * Demo: https://regex101.com/r/kQeMBp/1
    */
    checkLinePattern: RegExp = /(?<=\s)\[.\](?=\s*[?!*]?\s*)(?!\s*[?!*]?\s*\||\s*[?!*]?\s*$)/;

    /*
    * Pattern to parse a line and extract the componenets of an entry.
    * Demo: https://regex101.com/r/LVVrrS/26
    */
    // Pattern to parse a line to entry componenets.
    parseLinePattern: RegExp = /(?<=\s)(?<open>\[)(?<symbol>.)(?<close>\])(?=\s*[?!*]?\s*)(?!\s*[?!*]?\s*\||\s*[?!*]?\s*$)\s*(?<modifier>[!?*]?)\s*(?<text>.*?)(?=\s+\^[a-z0-9]{6,}|\s+\||\s*$)/;

    // Match.
    match!: RegExpMatchArray | null;

    // The current line under selection.
    line: TextLine;

    // Entry.
    component!: EntryComponent;

    constructor(line: TextLine) {
        // Set the raw line.
        this.line = line;

        // Check the line.
        if (!this.IsValid()) {
            throw new Error("The lines does not contain a valid BuJo entry.");
        }

        // Parse the line.
        this.component = this.Parse();
    };

    /*
    * Check if a line is valid.
    */
    public IsValid(): boolean {
        return this.checkLinePattern.test(this.line.text);
    };

    /*
    * Extract entry componenets.
    */
    public Parse(): EntryComponent {
        // Match the line text.
        this.match = this.line.text.match(this.parseLinePattern);

        // Create new componenet objects.
        const entryComponent: EntryComponent = new EntryComponent();

        // Set the entry components.
        entryComponent.notationOpen = this.match!.groups!.open;
        entryComponent.notationClose = this.match!.groups!.close;
        entryComponent.symbol = this.match!.groups!.symbol;
        entryComponent.modifier = this.match!.groups!.modifier;
        entryComponent.text = this.match!.groups!.text;

        return entryComponent;
    };

    /*
    * Get index for entry symbol.
    */
    public GetIndexAtSymbol(): number {
        // Regex pattern (i.e., see: https://regex101.com/r/ABVEf2/3).
        const pattern = new RegExp("(?<=\\s\\[)(" + this.component.symbol + ")(?=\\]\\s)");

        // Match and return.
        return this.line.text.match(pattern)!.index!;
    };
}
