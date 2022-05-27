import * as vscode from 'vscode';
import { scheduleTaskToTimeTrackingTable } from './scheduleCommands';
import * as symbolCommands from './symbolCommands';
import { calculateTime, recordTime } from './trackCommands';

// When extension gets activated.
export function activate(context: vscode.ExtensionContext) {

    // Register commands.
    context.subscriptions.push(
        // Symbol operations.
        vscode.commands.registerCommand('bujo.setMigratedForward', symbolCommands.setMigratedForward),
        vscode.commands.registerCommand('bujo.setMigratedBackward', symbolCommands.setMigratedBackward),
        vscode.commands.registerCommand('bujo.setCompleted', symbolCommands.setCompleted),
        vscode.commands.registerCommand('bujo.setOpen', symbolCommands.setOpen),
        vscode.commands.registerCommand('bujo.setInProgress', symbolCommands.setInProgress),
        vscode.commands.registerCommand('bujo.setDropped', symbolCommands.setDropped),
        vscode.commands.registerCommand('bujo.setSymbol', symbolCommands.setSymbol),

        // Copy an entry to the time tracking table.
        vscode.commands.registerCommand('bujo.scheduleToTimeTrackingTable', scheduleTaskToTimeTrackingTable),

        // Add time records to the time tracking table.
        vscode.commands.registerCommand('bujo.recordTime', recordTime),

        // Sum time records.
        vscode.commands.registerCommand('bujo.calculateTime', calculateTime)
    );
}

// Clean-up.
export function deactivate() {}
