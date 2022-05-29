import { TextLine } from "vscode";
import { Pattern } from "./Pattern";


export class Interval {
    /**
     * Time record separator.
     */
    public static separator: string = "-";


    /**
     * The line used to parse the interval elements.
     */
    public line: TextLine;


    /**
     * Interval elements for the start and stop time records.
     */
    public start: string = "";
    public stop: string = "";


    /**
     * Whether the interval comes from a line that contains a `BuJo` entry.
     */
    public root: boolean = false;


    /**
     * Parse a line to extract time the time records.
     */
    private parseTimeRecords(): void {
        // Store the match.
        let match: RegExpMatchArray | null;

        // Check if the current line is the root (i.e., containing a task).
        if (this.root) {
            // Match.
            match = this.line.text.match(Pattern.extractRootTimeInterval);
        } else {
            // Match.
            match = this.line.text.match(Pattern.extractSubsequentTimeInterval);
        }

        // Update the time records.
        if (match) {
            // Update start record.
            if (match.groups!.startHour != undefined && match.groups!.startMinute != undefined) {
                this.start = `${match.groups!.startHour}:${match.groups!.startMinute}`
            }

            // Update stop record.
            if (match.groups!.stopHour != undefined && match.groups!.stopMinute != undefined) {
                this.stop = `${match.groups!.stopHour}:${match.groups!.stopMinute}`
            }
        }
    }


    /**
     * Parse a given line to get the time records.
     */
    constructor(line: TextLine, root: boolean) {
        // Set the line.
        this.line = line;

        // Indicate whether it is a task entry line.
        this.root = root;

        // Set time records.
        this.parseTimeRecords();
    }


    /**
     * Return status for the time interval.
     */
    public getState(): { start: boolean; stop: boolean } {
        return {
            start: Pattern.checkTimeRecord.test(this.start),
            stop: Pattern.checkTimeRecord.test(this.stop)
        }
    }
}
