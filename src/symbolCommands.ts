import { TextEditor, window } from "vscode";
import { Entry } from "./models/Entry";
import { Symbol } from "./models/Symbol";


/**
 * Set a custom symbol.
 * @param newSymbol The new symbol for updating the entry.
 */
export async function entrySetSymbol(newSymbol: string): Promise<boolean> {
    // Ensure an editor is open.
    const editor: TextEditor | undefined = window.activeTextEditor;

    // Ensure an editor is open.
    if (!editor) {
        throw new Error("No editors open.");
    }

    // Make entry.
    const entry = new Entry();

    // Make entry from selection.
    entry.fromTextLine(editor.document.lineAt(editor.selection.active.line))

    // Make symbol.
    const symbol = new Symbol(editor);

    // Update entry symbol.
    return await symbol.update(newSymbol, entry);
};


// Migrate forward.
export const setMigratedForward = (): void => {
    entrySetSymbol('>').then(success => {
        if (success) {
            window.showInformationMessage('Migrated forward.');
        } else {
            window.showErrorMessage("Failed to update task symbol");
        }
    }).catch(error => {
        window.showErrorMessage(error.message);
    });
};


// Migrate backward.
export const setMigratedBackward = (): void => {
    entrySetSymbol('<').then(success => {
        if (success) {
            window.showInformationMessage('Migrated backward.');
        } else {
            window.showErrorMessage("Failed to update task symbol");
        }
    }).catch(error => {
        window.showErrorMessage(error.message);
    });
};


// Set completed.
export const setCompleted = (): void => {
    entrySetSymbol('x').then(success => {
        if (success) {
            window.showInformationMessage('Completed.');
        } else {
            window.showErrorMessage("Failed to update task symbol");
        }
    }).catch(error => {
        window.showErrorMessage(error.message);
    });
};

// Set task open.
export const setOpen = (): void => {
    entrySetSymbol(' ').then(success => {
        if (success) {
            window.showInformationMessage('Opened.');
        } else {
            window.showErrorMessage("Failed to update task symbol");
        }
    }).catch(error => {
        window.showErrorMessage(error.message);
    });
};


// Set task in progress.
export const setInProgress = (): void => {
    entrySetSymbol('/').then(success => {
        if (success) {
            window.showInformationMessage('Set in progress.');
        } else {
            window.showErrorMessage("Failed to update task symbol");
        }
    }).catch(error => {
        window.showErrorMessage(error.message);
    });
};


// Set task as dropped.
export const setDropped = (): void => {
    entrySetSymbol('-').then(success => {
        if (success) {
            window.showInformationMessage('Dropped.');
        } else {
            window.showErrorMessage("Failed to update task symbol");
        }
    }).catch(error => {
        window.showErrorMessage(error.message);
    });
};


// Set custom status.
export const setSymbol = (args: any): void => {
    // Ensure symbol is provided.
    if (!args.symbol) {
        window.showErrorMessage('Symbol not provided for keybinding.');
        return
    }

    // Update the task status.
    entrySetSymbol(args.symbol).then(success => {
        if (success) {
            window.showInformationMessage('Updated entry symbol.');
        } else {
            window.showErrorMessage("Failed to update task symbol");
        }
    }).catch(error => {
        window.showErrorMessage(error.message);
    });
}
