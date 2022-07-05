---
pageClass: page-reference
---

# TextMate Scopes

Below are the **TextMate Scopes** that can targeted via the VS Code setting
`editor.tokenColorCustomizations"` for color customizations.

## BuJo Entries

### Open Tasks

- `bujo.task.open.notation`: targets the left `[` and the right `]` brackets only when they contain a space in-between
- `bujo.task.open.symbol`: targets the space between the notation brackets `[` and `]`
- `bujo.task.open.modifier`: targets any supported modifier that follows after `[ ]`
- `bujo.task.open.text`: targets the **text** that follows `[ ]` **without a modifier**, e.g., `[ ]` ___`This is targeted.`___
- `bujo.task.open.text.modifier`: targets the **text** that follows `[ ]` **with a modifier**, e.g., `[ ] !` ___`This is targeted.`___

### Completed Tasks

- `bujo.task.completed.notation`: targets the left `[` and the right `]` brackets only when they contain `x` in-between
- `bujo.task.completed.symbol`: targets the symbol `x` between the notation brackets `[` and `]`
- `bujo.task.completed.modifier`: targets any supported modifier that follows after `[x]`
- `bujo.task.completed.text`: targets the **text** that follows `[x]` **without a modifier**, e.g., `[x]` ___`This is targeted.`___
- `bujo.task.completed.text.modifier`: targets the **text** that follows `[x]` **with a modifier**, e.g., `[x] !` ___`This is targeted.`___

### Tasks In Progress

- `bujo.task.in.progress.notation`: targets the left `[` and the right `]` brackets only when they contain `/` in-between
- `bujo.task.in.progress.symbol`: targets the symbol `/` between the notation brackets `[` and `]`
- `bujo.task.in.progress.modifier`: targets any supported modifier that follows after `[/]`
- `bujo.task.in.progress.text`: targets the **text** that follows `[/]` **without a modifier**, e.g., `[/]` ___`This is targeted.`___
- `bujo.task.in.progress.text.modifier`: targets the **text** that follows `[/]` **with a modifier**, e.g., `[/] !` ___`This is targeted.`___

### Tasks Migrated Forward

- `bujo.task.migrated.forward.notation`: targets the left `[` and the right `]` brackets only when they contain `>` in-between
- `bujo.task.migrated.forward.symbol`: targets the symbol `>` between the notation brackets `[` and `]`
- `bujo.task.migrated.forward.modifier`: targets any supported modifier that follows after `[>]`
- `bujo.task.migrated.forward.text`: targets the **text** that follows `[>]` **without a modifier**, e.g., `[>]` ___`This is targeted.`___
- `bujo.task.migrated.forward.text.modifier`: targets the **text** that follows `[>]` **with a modifier**, e.g., `[>] !` ___`This is targeted.`___

### Tasks Migrated Backward

- `bujo.task.migrated.forward.notation`: targets the left `[` and the right `]` brackets only when they contain `<` in-between
- `bujo.task.migrated.forward.symbol`: targets the symbol `<` between the notation brackets `[` and `]`
- `bujo.task.migrated.forward.modifier`: targets any supported modifier that follows after `[<]`
- `bujo.task.migrated.forward.text`: targets the **text** that follows `[<]` **without a modifier**, e.g., `[<]` ___`This is targeted.`___
- `bujo.task.migrated.forward.text.modifier`: targets the **text** that follows `[<]` **with a modifier**, e.g., `[<] !` ___`This is targeted.`___

### Dropped Tasks

- `bujo.task.dropped.notation`: targets the left `[` and the right `]` brackets only when they contain `-` in-between
- `bujo.task.dropped.symbol`: targets the symbol `-` between the notation brackets `[` and `]`
- `bujo.task.dropped.modifier`: targets any supported modifier that follows after `[-]`
- `bujo.task.dropped.text`: targets the **text** that follows `[-]` **without a modifier**, e.g., `[-]` ___`This is targeted.`___
- `bujo.task.dropped.text.modifier`: targets the **text** that follows `[-]` **with a modifier**, e.g., `[-] !` ___`This is targeted.`___

### Events

- `bujo.task.event.notation`: targets the left `[` and the right `]` brackets only when they contain `o` in-between
- `bujo.task.event.symbol`: targets the symbol `o` between the notation brackets `[` and `]`
- `bujo.task.event.modifier`: targets any supported modifier that follows after `[o]`
- `bujo.task.event.text`: targets the **text** that follows `[o]` **without a modifier**, e.g., `[o]` ___`This is targeted.`___
- `bujo.task.event.text.modifier`: targets the **text** that follows `[o]` **with a modifier**, e.g., `[o] !` ___`This is targeted.`___

## Markdown Tables

- `bujo.grid.horizontal`: targets the `:---:`, `:---`, or `---:` horizontal grids in tables
- `bujo.grid.colon`: targets the `:` in horizontal grids
- `bujo.grid.vertical`: target the `|` vertical grids in tables

## Time Tracking Table

- `bujo.todo.start.hour`: targets, e.g., `08` in `08:10-09:20` inside a table row
- `bujo.todo.start.colon`: targets, e.g., the `:` after `08` in `08:10-09:20` inside a table row
- `bujo.todo.start.minute`: targets, e.g., `10` in `08:10-09:20` inside a table row
- `bujo.todo.separator`: targets, e.g., `-` in `08:10-09:20` inside a table row
- `bujo.todo.end.hour`: targets, e.g., `09` in `08:10-09:20` inside a table row
- `bujo.todo.end.colon`: targets, e.g., the `:` after `09` in `08:10-09:20` inside a table row
- `bujo.todo.end.minute`: targets, e.g., `20` in `08:10-09:20` inside a table row
- `bujo.todo.total`: targets the total time spent, e.g., `98m` in a table row

:::warning
The tokens `bujo.todo.*` are deprecated and will be replaced by
`bujo.timetrack.*` in the next major release.
:::

## Time Blocking Table

- `bujo.timeblock.revision.time.parenthesis.open`: targets, e.g., `(` in `| (07:40) | (Revision #1) |` inside a table row
- `bujo.timeblock.revision.time.hour`: targets, e.g., `07` in `| (07:40) | (Revision #1) |` inside a table row
- `bujo.timeblock.revision.time.colon`: targets, e.g., `:` in `| (07:40) | (Revision #1) |` inside a table row
- `bujo.timeblock.revision.time.minute`: targets, e.g., `40` in `| (07:40) | (Revision #1) |` inside a table row
- `bujo.timeblock.revision.time.parenthesis.close`: targets, e.g., `)` in `| (07:40) | (Revision #1) |` inside a table row
- `bujo.timeblock.revision.text`: targets, e.g., `(Revision #1)` in `| (07:40) | (Revision #1) |` inside a table row
- `bujo.timeblock.chunk.title`: targets, e.g., `Deep work (#1)` in `| 08:00-10:00 | Deep work (#1) |` in a table row
- `bujo.timeblock.chunk.note`: targets, e.g., `- Random meeting` in `| | - Random meeting |` in a table row

## Regular Expressions

In case you discover edge cases where the tokens are not highlighted properly,
please open an issue on
[GitHub](https://github.com/mihaiconstantin/bujo/issues). The regular
expressions used for capturing the **TextMate Scopes** above can be consulted
at:

- [for `BuJo` entries](https://regex101.com/r/LVVrrS/26)
- [for markdown tables](https://regex101.com/r/91IC8c/1)
- [for the time tracking table](https://regex101.com/r/36951B/6)
- [for the time blocking table](https://regex101.com/r/npln0p/5)
