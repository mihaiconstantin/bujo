import { commands, TextEditor, window } from "vscode";
import { EntryLine } from "../models/EntryLine";
import { Tracker } from "../models/Tracker";
import * as _ from "lodash";


/**
 * Add a time record to the time tracking table.
 */
const recordTimeOperation = async (): Promise<boolean> => {
    // Ensure an editor is open.
    const editor: TextEditor | undefined = window.activeTextEditor;

    // Ensure an editor is open.
    if (!editor) {
        throw new Error("No editors open.");
    }

    // Make entry.
    const entry = new EntryLine(editor, editor.document.lineAt(editor.selection.active.line));

    // Parse and set the entry elements.
    await entry.parse(false);

    // Make tracker.
    const tracker = new Tracker(editor);

    // Add time record.
    return tracker.addTimeRecord(entry).then((success) => {
        if (success) {
            // Format the document to align the table.
            commands.executeCommand('editor.action.formatDocument');

            // Indicate everything went okay.
            return true;
        }

        // Otherwise indicate time tracking failed.
        return false;
    });
}


/**
 * Wrapper for the user command for the record adding operation.
 */
export const recordTime = (): void => {
    recordTimeOperation().then(success => {
        if (success) {
            window.showInformationMessage("Time record added successfully.");
        } else {
            window.showErrorMessage("Failed to add time record.");
        }
    }).catch(error => {
        window.showErrorMessage(error.message);
    });
}


/**
 * Calculate the total time for a valid entry in the time tracking table.
 */
const calculateEntryTimeOperation = async (): Promise<number> => {
    // Ensure an editor is open.
    const editor: TextEditor | undefined = window.activeTextEditor;

    // Ensure an editor is open.
    if (!editor) {
        throw new Error("No editors open.");
    }

    // Make entry.
    const entry = new EntryLine(editor, editor.document.lineAt(editor.selection.active.line));

    // Parse and set the entry elements.
    await entry.parse(false);

    // Make tracker.
    const tracker = new Tracker(editor);

    // Sum time intervals.
    return tracker.sumTimeIntervals(entry);
}


/**
 * Wrapper for the user command for entry time calculation operation.
 */
export const calculateEntryTime = (): void => {
    calculateEntryTimeOperation().then(total => {
        window.showInformationMessage(`Time spent: ${total} minutes (${_.round(total / 60, 2)} hours).`);
    }).catch(error => {
        window.showErrorMessage(error.message);
    });
}
