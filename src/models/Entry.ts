/**
 * Representation of a `BuJo` entry.
 */
 export interface Entry {
    // Fields.
    notationOpen: string;
    notationClose: string;
    symbol: string;
    modifier: string;
    text: string;
    id: string;
}
