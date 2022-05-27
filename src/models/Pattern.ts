export class Pattern {
    /*
     * Pattern to check if a line contains a valid entry.
     * Demo: https://regex101.com/r/kQeMBp/1
     */
    public static checkEntry: RegExp = /(?<=\s)\[.\](?=\s*[?!*]?\s*)(?!\s*[?!*]?\s*\||\s*[?!*]?\s*$)/;


    /*
     * Pattern to check if the text of an entry is a wiki link with alias.
     * Demo: https://regex101.com/r/tRfPvi/1
     */
    public static checkAlias: RegExp = /^\[\[.*?\|.*?\]\]$/;


    /*
     * Pattern to parse a line and extract the components of an entry.
     * Demo: https://regex101.com/r/aRIlGX/3
     */
    public static extractEntry: RegExp = /(?<=\s)(?<open>\[)(?<symbol>.)(?<close>\])(?=\s*[?!*]?\s*)(?!\s*[?!*]?\s*\||\s*[?!*]?\s*$)\s*(?<modifier>[!?*]?)\s*(?<text>.*?)(?=\s+\^[a-z0-9]{6,}|\s+\||\s*$)/;


    /*
     * Pattern to extract the block quote ID from an entry line.
     * Demo: https://regex101.com/r/hQV3mo/2
     */
    public static extractId: RegExp = /(?<=\s)\[.\](?=\s*[?!*]?\s*)(?!\s*[?!*]?\s*\||\s*[?!*]?\s*$).*?(?<=\^)(?<id>[a-z0-9]{6,})(?=\s*$|\s+\|)/;


    /*
     * Pattern to parse an entry text that contains a wiki link with an alias.
     * Demo: https://regex101.com/r/FgtTGc/2
     */
    public static extractWikiLink: RegExp = /^\[\[(?<alias>.*?)\|(?<filename>.*?)\]\]$/;

    /*
     * Pattern to match the head of the time tracking table.
     * Demo: https://regex101.com/r/yvw2uQ/6
     */
    public static checkTimeTrackingTable: RegExp = /\s+\|\s+Task\s+\|\s+/;


    /*
     * Pattern to extract the symbol of an entry.
     * Demo: https://regex101.com/r/ABVEf2/3
     */
    public static extractSymbol(symbol: string) {
        return new RegExp("(?<=\\s\\[)(" + symbol + ")(?=\\]\\s)");
    }


    /*
     * Pattern to match a time record.
     */
    public static checkTimeRecord: RegExp = /[0-2][0-9]:[0-5][0-9]/;


    /*
     * Pattern to extract a time record on the same line with the task name.
     */
    public static extractRootTimeInterval = /(?<=\|)(?:\s+[^(]?)(?<startHour>[0-2][0-9])(?:\s*)(:)\s*(?<startMinute>[0-5][0-9])(?:\s*)(-)?(?:(?:\s*)(?<stopHour>[0-2][0-9])(?:\s*)(:)(?:\s*)(?<stopMinute>[0-5][0-9]))?(?=[^\)]?\s+\|\s+\[.\])/;


    /*
     * Pattern to extract a subsequent time record (i.e., on a line below the
     * line containing the task name).
     */
    public static extractSubsequentTimeInterval = /(?<=\|)(?:\s+[^(]?)(?<startHour>[0-2][0-9])(?:\s*)(:)\s*(?<startMinute>[0-5][0-9])(?:\s*)(-)?(?:(?:\s*)(?<stopHour>[0-2][0-9])(?:\s*)(:)(?:\s*)(?<stopMinute>[0-5][0-9]))?(?=[^\)]?\s+\|)(?!\s+\|\s+\[.\])/;
}
