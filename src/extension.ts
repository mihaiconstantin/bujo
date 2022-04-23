import * as vscode from 'vscode';
import * as symbolCommands from './symbolCommands';

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
        vscode.commands.registerCommand('bujo.setSymbol', symbolCommands.setSymbol)
    );
}

// Clean-up.
export function deactivate() {}
