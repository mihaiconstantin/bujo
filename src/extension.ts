import * as vscode from 'vscode';
import * as operations from "./operations";


// When extension gets activated.
export function activate(context: vscode.ExtensionContext) {

    // Register commands.
    context.subscriptions.push(
        // Symbol operations.
        // Set custom symbol via keybindings.
        vscode.commands.registerCommand('bujo.symbol.setSymbol', operations.symbol.setSymbol),

        // Symbol default symbols.
        vscode.commands.registerCommand('bujo.symbol.setMigratedForward', operations.symbol.setSymbolMigratedForward),
        vscode.commands.registerCommand('bujo.symbol.setMigratedBackward', operations.symbol.setSymbolMigratedBackward),
        vscode.commands.registerCommand('bujo.symbol.setCompleted', operations.symbol.setSymbolCompleted),
        vscode.commands.registerCommand('bujo.symbol.setOpened', operations.symbol.setSymbolOpened),
        vscode.commands.registerCommand('bujo.symbol.setStarted', operations.symbol.setSymbolStarted),
        vscode.commands.registerCommand('bujo.symbol.setDropped', operations.symbol.setSymbolDropped),

        // Scheduler operations.
        // Schedule entry.
        vscode.commands.registerCommand('bujo.scheduler.scheduleEntry', operations.scheduler.scheduleEntry),

        // Tracker operations.
        // Add time records to the time tracking table.
        vscode.commands.registerCommand('bujo.tracker.recordTime', operations.tracker.recordTime),

        // Sum time records.
        vscode.commands.registerCommand('bujo.tracker.calculateEntryTime', operations.tracker.calculateEntryTime)
    );
}


// Clean-up.
export function deactivate() {}
