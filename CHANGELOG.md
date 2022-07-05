# Changelog

## [2.4.0] - 2022.07.05

### Added
- Add `.github` workflow for building documentation website.
- Add extension documentation via `VuePress` at
  [bujo.mihaiconstantin.com](https://bujo.mihaiconstantin.com). Closes
  [#14](https://github.com/mihaiconstantin/bujo/issues/14).
- Add functionality to **schedule `BuJo` entries** to time tracking tables via
  the `BuJo: Schedule Entry` command. Closes
  [#8](https://github.com/mihaiconstantin/bujo/issues/8).
- Add functionality for **time tracking** for `BuJo` entries via the `BuJo:
  Record Time` command. Closes
  [#6](https://github.com/mihaiconstantin/bujo/issues/6).
- Add functionality to *calculate the total time spent on a task* for `BuJo`
  entries scheduled to the time tracking table via the command `BuJo: Calculate
  Entry Time`. Closes [#7](https://github.com/mihaiconstantin/bujo/issues/7).
- Add default keybindings scheduling and time tracking commands:
  - `alt+shift+p` to run command `BuJo: Schedule Entry`
  - `alt+shift+t` to run command `BuJo: Record Time`
  - `alt+shift+s` to run command `BuJo: Calculate Entry Time`
- Add user settings for customizing the scheduling and time tracking behavior:
  - `bujo.scheduler.plannerPrefix` to specify the prefix to use when
    selecting the daily planner file via the input box (e.g.,
    **`prefix`**`.2022.03.20`)
  - `bujo.scheduler.taskName` to specify what to use as task name for the
    time tracking table when scheduling a `BuJo` entry that contains a wiki link
    with an alias (e.g., `[[A random task|project.example.a-random-task]]`:
      - `alias` sets the name of the task in the table to wiki link alias (e.g.,
    `A random task`)
      - `filename` sets the name of the task to the actual wiki link (e.g.,
        `[[project.example.a-random-task]]`)
  - `bujo.scheduler.symbolForScheduledEntry` to specify the symbol to set for a
    `BuJo` entry scheduled to the time track table (i.e., by default, the symbol
    is updated from `[ ]` to `[>]`)
- Add `genUUID` and `genUUIDInsecure` helper functions to generate
  Dendron-compatible blockquote IDs for scheduling `BuJo` entries to the time
  tracking table.
- Add essential documentation in `README.md` for new changes. Closes
  [#12](https://github.com/mihaiconstantin/bujo/issues/12).

### Changed
- Simplify `README.md` file to point to the new documentation. Closes
  [#12](https://github.com/mihaiconstantin/bujo/issues/12).
- Refactor `Entry` class into multiple classes, each corresponding to a type of
  functionality:
  - `Scheduler` class for handling scheduling operation
  - `Symbol` class for handling entry symbol updates
  - `Tracker` and `Interval` classes for handling time tracking and time totals
- Move most of the regular expressions to the `Pattern` class and add
  demonstration links to `regex101.com` to improve debugging of `regex`.
- Create `operations` module that contains functions and wrappers to use in the
  context of the command palette, e.g.:

    ```typescript
    // Import the module.
    import * as operations from "./operations";

    // The module currently contains `symbol`, `scheduler` and `tracker` commands.
    // ...
    vscode.commands.registerCommand('bujo.scheduler.scheduleEntry', operations.scheduler.scheduleEntry)
    // ...
    ```

- Create `helpers` module for small functions used in various places.
- Update the functions within the operations module to use new classes.
- **Rename several commands to maintain consistency with the `operations`
  module:**
  - from `bujo.setMigratedForward` to `bujo.symbol.setMigratedForward`
  - from `bujo.setMigratedBackward` to `bujo.symbol.setMigratedBackward`
  - from `bujo.setCompleted` to `bujo.symbol.setCompleted`
  - from `bujo.setOpen` to `bujo.symbol.setOpened`
  - from `bujo.setInProgress` to `bujo.symbol.setStarted`
  - from `bujo.setDropped` to `bujo.symbol.setDropped`
  - from `bujo.setSymbol` to `bujo.symbol.setSymbol`
  - from `bujo.scheduleToTimeTrackingTable` to `bujo.scheduler.scheduleEntry`
  - from `bujo.recordTime` to `bujo.tracker.recordTime`
  - from `bujo.calculateTime` to `bujo.tracker.calculateEntryTime`

## [2.1.0] - 2022.04.24
### Added
- Add syntax highlighting support for multiple entries on the same line
  separated by a `|` character:
  - e.g., `[ ] Task one | [ ] ! Task two | [x] Task three`
- Add greater flexibility with respect to where a supported modifier can be
  placed. All of the following are correctly identified and parsed as valid
  entries:
  - `[ ] ! Some task`
  - `[ ]! Some task`
  - `[ ] !Some task`
  - `[ ]!Some task`
- Add commands to the command palette (i.e., `ctrl/cmd + shift + p`) to change
  the symbol for the first entry on the line where the cursor is placed. The
  following commands are available:
  - `BuJo: Set Migrated Forward` to set `[>]`
  - `BuJo: Set Migrated Backward` to set `[<]`
  - `BuJo: Set Completed` to set `[x]`
  - `BuJo: Set Open` to set `[ ]`
  - `BuJo: Set In Progress` to set `[/]`
  - `BuJo: Set Dropped` to set `[-]`
- Add functionality to update entry symbols via arbitrary keybindings that can
  also pass the symbol to be set as argument. For instance, the following
  keybinding when triggered will update the task status to `[x]`, and toggle
  between `[x]` and `[ ]` on subsequent triggers:

    ```jsonc
    [
        // ...
        {
            "key": "alt+x",
            "command": "bujo.setSymbol",
            "args": {
                "symbol": "x"
            },
            "when": "editorTextFocus && editorLangId == markdown"
        }
        // ...
    ]
    ```

- Add default keybindings for changing entry symbols:
  - `alt+x` to toggle between `[x]` and `[ ]`
  - `alt+o` to set `[ ]`
  - `alt+-` to toggle between `[-]` and `[ ]`
  - `alt+/` to toggle between `[/]` and `[ ]`
  - `alt+,` to toggle between `[<]` and `[ ]`
  - `alt+.` to toggle between `[>]` and `[ ]`
  - `alt+p` to toggle between `[o]` and `[ ]`
- Add various snippets for **BuJo** elements:
  - `task` to enter a task

    ```markdown
    - [ ] <Enter text here>
    ```

  - `taskclip` to enter a task from clipboard

    ```markdown
    - [ ] <Clipboard pasted here>
    ```

  - `scratch` to scratch a text selection

    ```markdown
    ~Some text~
    ```

  - `time` to enter the current time

    ```markdown
    10:38
    ```

  - `date` to enter the current date

    ```markdown
    2022.04.24
    ```

  - `datetime` to enter the current date and time

    ```markdown
    2022.04.24 10:39
    ```

  - `timetracktable` to enter a time tracking table

    ```markdown
    |     Tracker | Task             | Backlog  |
    | ----------: | :--------------- | :------- |
    | 00:00-00:00 | [ ] Example task | [[link]] |
    |             |                  |          |
    ```

  - `timetrackrow` to add an empty row to the time tracking table

    ```markdown
    |             |                  |          |
    ```

  - `timetracktask` to enter a task in the time tracking table

    ```markdown
    |             | [ ] <Enter here> |          |
    ```

  - `timetracktaskclip` to enter a task from clipboard in the time tracking table

    ```markdown
    |             | [ ] <Clipboard>  |          |
    ```

  - `timeblocktable` to enter a time blocking table

    ```markdown
    |        Time | Block          |
    | ----------: | :------------- |
    |     (00:00) | (Revision \#1) |
    |             |                |
    | 00:00-00:00 | Chunk (#1)     |
    |             | - Chunk note   |
    |             |                |
    ```

  - `timeblockrow` to add an empty row to the time blocking table

    ```markdown
    |             |                |
    ```

  - `timeblockrev` to enter a revision row in the time blocking table

    ```markdown
    |     (10:53) | (Revision \#1) |
    ```

  - `timeblockchunk` to enter a chunk row in the time blocking table

    ```markdown
    | 00:00-00:00 | <Enter here>   |
    ```

  - `timeblocknote` to enter a note row in the time blocking table

    ```markdown
    |             | - <Add here>   |
    ```

- Add way to highlight the time separator (i.e., `-`) in a time tracking table
  also only the start time of a task is recorded (i.e., `-` will get matched
  also in `00:00-`, and not only `00:00-00:00`; see
  https://regex101.com/r/36951B/6).

### Changed
- Improve `regex` for matching Bullet Journal entries (i.e., moved from
  https://regex101.com/r/ByIG8W/20 to https://regex101.com/r/LVVrrS/26).
- Improve matching performance for Bullet Journal entries.
- Update `README.md` to reflect the new features.

### Fixed
- Update `regex` for markdown table grids to select `|` only when they are part of
  a markdown table grid (i.e., https://regex101.com/r/91IC8c/5).
- Fix headings in `CHANGELOG.md` for previous releases.

### Deprecated
- Time tracking scopes (i.e. `bujo.todo.*` will be renamed to `bujo.timetrack.*`
  in the future. For now, no changes need to be made. Below you can see the
  entire list of scopes that will be affected:
  - to be renamed from `bujo.todo.start.hour` to `bujo.timetrack.start.hour`
  - to be renamed from `bujo.todo.start.colon` to `bujo.timetrack.start.colon`
  - to be renamed from `bujo.todo.start.minute` to `bujo.timetrack.start.minute`
  - to be renamed from `bujo.todo.separator` to `bujo.timetrack.separator`
  - to be renamed from `bujo.todo.end.hour` to `bujo.timetrack.end.hour`
  - to be renamed from `bujo.todo.end.colon` to `bujo.timetrack.end.colon`
  - to be renamed from `bujo.todo.end.minute` to `bujo.timetrack.end.minute`
  - to be renamed from `bujo.todo.total` to `bujo.timetrack.total`

## [2.0.2] - 2022.04.20
### Changed
- Improved `README.md` text and images presentation.
- Update extension name and description.

## [2.0.1] - 2022.04.17
### Changed
- Remove language grammar identifiers in `package.json`.

## [2.0.0] - 2022.04.17
### Added
- Add scope for `*` modifier.
- Add scope for `:` in horizontal table grids.
- Add scopes for time blocking syntax.
- Add scopes for time tracking syntax.
- Add default colors via `contributes.configurationDefaults` point in
  `package.json`.

### Changed
- Update regular expressions for more precise matching.
- Simplify `TextMate` scopes for Bullet Journal items.
- Improve `README.md` documentation.

### Removed
- Drop scopes for each modifier. Currently, all supported modifiers fall under
  the same scope.

## [1.1.0] - 2021.11.29
- Add two new tokens `bujo.horizontal.grid` and `bujo.vertical.grid` for
  selecting grids in markdown tables (i.e., the `:---:`, `:---`, or `---:` for
  horizontal grid, and the `|` for vertical grid).

## [1.0.0] - 2021.05.25
### Added
- Added `TextMate` scopes for standard Bullet Journal symbols
    - `[ ]` task
    - `[x]` completed task
    - `[>]` migrated forward task
    - `[<]` migrated backward task
    - `[o]` event
- Added `TextMate` scopes for two modifiers `!` and `?`
