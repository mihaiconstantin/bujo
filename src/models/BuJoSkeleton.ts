import { TextLine } from "vscode";


export interface BuJoSkeleton {
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
