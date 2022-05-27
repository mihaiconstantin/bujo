import { TextEditor, window, workspace } from "vscode";
import { Entry } from "./models/Entry";
import { Sanitizer } from "./models/Sanitizer";
import { Scheduler } from "./models/Scheduler";
import { Symbol } from "./models/Symbol";


/*
 * Copy a task to a time tracking table.
 */
const scheduleTask = async (): Promise<boolean> => {
    // Ensure an editor is open.
    const editor: TextEditor | undefined = window.activeTextEditor;

    // Ensure an editor is open.
    if (!editor) {
        throw new Error("No editors available.");
    }

    // Ensure an workspace is open.
    if (!workspace.workspaceFolders) {
        throw new Error('Workspace not opened.');
    }

    // Get configuration.
    const config = workspace.getConfiguration('bujo');

    // Create sanitizer.
    const sanitizer = new Sanitizer(editor);

    // Sanitize the line.
    await sanitizer.sanitizeActiveLine();

    // Make entry.
    const entry = new Entry();

    // Make entry from selection.
    entry.fromTextLine(editor.document.lineAt(editor.selection.active.line))

    // Create scheduler.
    const scheduler = new Scheduler(editor, config);

    // Schedule entry.
    return scheduler.schedule(entry).then((success) => {
        // Update the entry symbol if the scheduling succeeded.
        if (success) {
            // Get the scheduling symbol from user settings.
            const newSymbol = config.get("scheduler.symbolForScheduledEntry");

            // Create symbol instance.
            const symbol: Symbol = new Symbol(editor);

            // Update symbol.
            return symbol.update(newSymbol as string, entry, false);
        }

        // Otherwise indicate scheduling failed.
        return false;
    });
};


export const scheduleTaskToTimeTrackingTable = (): void => {
    scheduleTask().then(success => {
        if (success) {
            window.showInformationMessage('Entry added to the time tracking table.');
        } else {
            window.showErrorMessage('Failed to add entry to the time tracking table.');
        }
    }).catch(error => {
        window.showErrorMessage(error.message);
    });
}
