import { Position, TextEditor, TextEditorEdit, TextLine } from "vscode";
import { Entry } from "./Entry";
import { Interval } from "./Interval";


export class Tracker {
    /**
     * Patterns for finding indices for adding time records.
     */
    private patternStartRecord: RegExp = /(?<=^\|\s)/;
    private patternStopRecord: RegExp = /(?<=[0-2][0-9]:[0-5][0-9]-)/;


    /**
     * VS Code objects.
     */
    private editor: TextEditor;


    /**
     * Tracker constructor.
     */
    public constructor(editor: TextEditor) {
        this.editor = editor;
    }


    /**
     * Get index on line where to insert a given time record.
     */
    private getIndex(line: TextLine, pattern: RegExp): number {
        // Get index.
        return line.text.match(pattern)!.index!;
    }


    /**
     * Write a time record to the time tracking table.
     */
    private async writeTimeRecord(line: TextLine, state: { start: boolean; stop: boolean }, index: number): Promise<boolean> {
        // Create time.
        const date = new Date();

        // Extract hour and minute with two digits.
        // See https://stackoverflow.com/questions/18889548/javascript-change-gethours-to-2-digit.
        const hour = ("0" + date.getHours()).slice(-2)
        const minute = ("0" + date.getMinutes()).slice(-2)

        // Formatted time.
        let timeRecord = `${hour}:${minute}`

        // If the line is missing a start record.
        if (!state.start) {
            // Add time record separator.
            timeRecord = `${timeRecord}-`
        }

        // Create position for replacement.
        const position = new Position(line.lineNumber, index)

        // Write time record.
        const status = await this.editor.edit((editBuilder: TextEditorEdit) => {
            editBuilder.insert(position, timeRecord);
        });

        return status;
    }


    /**
     * Compute the time difference for the interval.
     * @param interval The time interval to compute the difference for.
     */
    private getTimeIntervalDifference(interval: Interval): number {
        // Create dates.
        let start = new Date(Date.parse(`2000-01-01 ${interval.start}:00`));
        let stop = new Date(Date.parse(`2000-01-01 ${interval.stop}:00`));

        // Check if a day has passed.
        if (stop.getHours() < start.getHours()) {
            // Add a day.
            stop.setDate(stop.getDate() + 1);
        }

        // Compute difference.
        return +(stop) - (+start);
    }


    /**
     * Add time record to the time tracking table.
     */
    public async addTimeRecord(entry: Entry): Promise<boolean> {
        // Create time interval from entry line.
        let interval = new Interval(entry.line!, true);

        // Get interval state.
        let state = interval.getState();

        // If the entry line is missing a start record.
        if (!state.start) {
            // Get index for adding a start time record.
            let index = this.getIndex(entry.line!, this.patternStartRecord);

            // Write time record.
            return await this.writeTimeRecord(entry.line!, state, index);
        }

        // If the entry line is missing a stop record.
        if (!(state.start && state.stop)) {
            // Get index for adding a start time record.
            let index = this.getIndex(entry.line!, this.patternStopRecord);

            // Write time record.
            return await this.writeTimeRecord(entry.line!, state, index);
        }

        // Line number.
        let lineNumber = entry.line!.lineNumber;

        // If the entry line contains a complete time interval.
        if (state.start && state.stop) {
            while (true) {
                // Increment line number.
                lineNumber++;

                // Get the new line.
                let line = this.editor.document.lineAt(lineNumber);

                // Recreate time interval.
                interval = new Interval(line, false);

                // Check state.
                state = interval.getState();

                // If both the start and the stop time records are missing.
                if (!state.start && !state.stop) {
                    // Insert a new row.
                    await this.editor.edit((editBuilder: TextEditorEdit) => {
                        editBuilder.insert(new Position(lineNumber, 0), '|   |||\n')
                    });

                    // Get the update line.
                    line = this.editor.document.lineAt(lineNumber);

                    // Get index for adding a start time record.
                    let index = this.getIndex(line, this.patternStartRecord);

                    // Write time record.
                    return await this.writeTimeRecord(line, state, index);
                }

                // If the record that follows has only a start time record.
                if (!(state.start && state.stop)) {
                    // Get index for adding a stop time record.
                    let index = this.getIndex(line, this.patternStopRecord);

                    // Write time record.
                    return await this.writeTimeRecord(line, state, index);
                }
            }
        }

        // If nothing happened.
        return false;
    }


    /**
     * Calculate the total time spent on a task.
     */
    public sumTimeIntervals(entry: Entry): number {
        // Starting total time.
        let total = 0;

        // Create interval from entry line.
        let interval = new Interval(entry.line!, true)

        // Get the state for entry line.
        let state = interval.getState();

        // If the interval is complete.
        if (state.start && state.stop) {
            total += this.getTimeIntervalDifference(interval);
        }

        // Get the line number.
        let lineNumber = entry.line!.lineNumber;

        // Compute time difference for any subsequent intervals.
        while (true) {
            // Increment line number.
            lineNumber++;

            // Get new line.
            let line = this.editor.document.lineAt(lineNumber);

            // Create new interval.
            interval = new Interval(line, false);

            // Get interval state.
            state = interval.getState();

            // If the interval is not complete break.
            if (!(state.start && state.stop)) {
                break;
            }

            // If the stop time record is missing continue.
            if (state.start && !state.stop) {
                continue;
            }

            // Otherwise calculate time difference.
            total += this.getTimeIntervalDifference(interval);
        }

        return total / 1000 / 60;
    }
}
