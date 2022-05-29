import { TextLine } from "vscode";


export interface Entry {
    // Fields.
    notationOpen: string;
    notationClose: string;
    symbol: string;
    modifier: string;
    text: string;
    id: string;

    // Methods to convert from text to entry instances.
    fromTextLine(line: TextLine): void
}
