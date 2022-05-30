import * as vscode from 'vscode';
import * as symbol from './symbolCommands';
import * as scheduler from './scheduleCommands';
import * as tracker from './trackCommands';

// When extension gets activated.
export function activate(context: vscode.ExtensionContext) {

    // Register commands.
    context.subscriptions.push(
        // Symbol operations.
        // Set custom symbol via keybindings.
        vscode.commands.registerCommand('bujo.symbol.setSymbol', symbol.setSymbol),

        // Symbol default symbols.
        vscode.commands.registerCommand('bujo.symbol.setMigratedForward', symbol.setSymbolMigratedForward),
        vscode.commands.registerCommand('bujo.symbol.setMigratedBackward', symbol.setSymbolMigratedBackward),
        vscode.commands.registerCommand('bujo.symbol.setCompleted', symbol.setSymbolCompleted),
        vscode.commands.registerCommand('bujo.symbol.setOpened', symbol.setSymbolOpened),
        vscode.commands.registerCommand('bujo.symbol.setStarted', symbol.setSymbolStarted),
        vscode.commands.registerCommand('bujo.symbol.setDropped', symbol.setSymbolDropped),

        // Scheduler operations.
        // Schedule entry.
        vscode.commands.registerCommand('bujo.scheduler.scheduleEntry', scheduler.scheduleEntry),

        // Tracker operations.
        // Add time records to the time tracking table.
        vscode.commands.registerCommand('bujo.tracker.recordTime', tracker.recordTime),

        // Sum time records.
        vscode.commands.registerCommand('bujo.tracker.calculateEntryTime', tracker.calculateEntryTime)
    );
}

// Clean-up.
export function deactivate() {}
