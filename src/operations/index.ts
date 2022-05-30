import * as symbol from './symbolOperations';
import * as scheduler from './scheduleOperations';
import * as tracker from './trackOperations';


/**
 * Create operations module.
 *
 * Each operation has a wrapper that can directly use in a command exposed via
 * the command palette.
 */
const operations = {
    symbol,
    scheduler,
    tracker
};


/**
 * Export the bundled operations module.
 */
export = operations;
