import { TextEditor, WorkspaceConfiguration, window, Uri, workspace, TextDocument, Position, WorkspaceEdit, commands } from "vscode";
import { EntryLine } from "./EntryLine";
import { Pattern } from "./Pattern";


export class Scheduler {
    /**
     * VS Code objects.
     */
    private editor: TextEditor;
    private config: WorkspaceConfiguration;


    /**
     * Scheduler constructor.
     */
    public constructor(editor: TextEditor, config: WorkspaceConfiguration) {
        // Set the editor.
        this.editor = editor;

        // Get user settings.
        this.config = config;
    }


    /**
     * Get the origin file name (i.e., the backlog).
     */
    private getOriginFile(): string {
        // Get the file name.
        let fileName: string = this.editor.document.fileName.match(/[^\\\/]+?(?=$)/)![0];

        // Remove the file extension.
        fileName = fileName.split(/.md$/)[0]

        return fileName;
    }


    /**
     * Get the destination file name (i.e., the daily planner).
     */
    private async getDestinationFile(): Promise<string> {
        // Get prefix from user configuration.
        const prefix = this.config.get("scheduler.plannerPrefix");

        // Get today's date.
        const [month, day, year]: string[] = new Date().toLocaleString("en-US",
            {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            }
        ).split("/");

        // Ask user what daily note to use.
        const dailyPlanner = await window.showInputBox({
            title: 'Enter the name of the planner file',
            value: [prefix, year, month, day].join('.')
        });

        // If no input is provided cancel the planning.
        if (!dailyPlanner) {
            throw new Error('Planner file not provided.');
        }

        return dailyPlanner;
    }


    /**
     * Prepare a table row for the time tracking table.
     * @returns A table row with a task for the time tracking table.
     */
    private makeTableRow(entry: EntryLine): string {
        // Get the origin file (i.e., the backlog).
        const backlog = this.getOriginFile();

        // Get default text for the task name.
        let task: string = entry.text;

        // Customize task name if entry text is valid wiki link with alias.
        if (entry.isWikiLinkWithALias()) {
            // Get the user configuration.
            const name = this.config.get("scheduler.taskName");

            // Decide whether to use the alias or the filename.
            if (name == "alias") {
                task = entry.wikiLink.alias;
            } else {
                task = `[[${entry.wikiLink.filename}]]`;
            }
        }

        // Append modifier if present.
        if (entry.modifier != '') {
            task = `${entry.modifier} ${task}`
        }

        return `| | [ ] ${task} | [[${backlog}#^${entry.id}]] |\n`;
    }


    /**
     * Get the destination document where to schedule the task.
     * @returns An instance of `TextDocument` corresponding to the location
     * where to schedule the task.
     */
    private async getDestinationDocument(): Promise<TextDocument> {
        // Get the destination file (i.e., the daily log or planner).
        const destinationFile = await this.getDestinationFile();

        // Find the destination file in the workspace.
        const destinationSearch: Uri[] = await workspace.findFiles(`**/${destinationFile}.md`);

        // Throw if the daily planner does not exist.
        if (destinationSearch.length == 0) {
            throw new Error(`Planner '${destinationFile}.md' not found.`);
        }

        // Extract the daily note URI.
        const destinationUri: Uri = destinationSearch[0];

        // Open the daily note.
        return await workspace.openTextDocument(destinationUri);
    }


    /**
     * Write the task to the time tracking table in the given document.
     * @param document The destination document where write the task.
     * @param row The row as a string to add to the time tracking table.
     */
    private async writeTask(document: TextDocument, row: string): Promise<boolean> {
        // Match the time tracking table header.
        const tableHeader = document.getText().match(Pattern.checkTimeTrackingTable);

        // Ensure the time tracking table exists.
        if (!tableHeader) {
            throw new Error('Planner is missing the time tracking table.');
        }

        // Get the position instance.
        const tablePosition: Position = document.positionAt(tableHeader.index!);

        // Find first available line in the table.
        let lineNumber: number = tablePosition.line + 1;

        // Update the candidate line number until a suitable line is found.
        while (!document.lineAt(lineNumber).isEmptyOrWhitespace) {
            // Increment the line.
            lineNumber++;
        }

        // Start a workspace edit.
        const edit: WorkspaceEdit = new WorkspaceEdit();

        // Construct the edit.
        edit.insert(document.uri, new Position(lineNumber, 0), row);

        // Apply the edit.
        return await workspace.applyEdit(edit);
    }


    /**
     * Schedule a single entry.
     * @param entry An instance of class `Entry`.
     */
    public async schedule(entry: EntryLine): Promise<boolean> {
        // Prepare row for the time tracking table.
        const row: string = this.makeTableRow(entry);

        // Get destination document (i.e., the daily planner).
        const destDocument = await this.getDestinationDocument();

        // Write the task to the table.
        const status = await this.writeTask(destDocument, row);

        // If the writing action succeeded.
        if (status) {
            // Show the destination document.
            await window.showTextDocument(destDocument);

            // Format the destination document to realign the table.
            await commands.executeCommand('editor.action.formatDocument');

            // Focus back on the origin document.
            await window.showTextDocument(this.editor.document);
        }

        return status;
    }
}
