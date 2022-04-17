<div align="center">
    <img src="./assets/icon/bujo_circle_128.png" width="128px"/>
</div>

<h1 align="center" >Bullet Journal Syntax Highlighting</h1>

<div align="center">
    <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/mihaiconstantin/bujo">
    <img alt="Repository Status" src="https://img.shields.io/badge/repo%20status-WIP-yellow">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/mihaiconstantin/bujo">
    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/mihaiconstantin/bujo?style=social">
</div>

<br>

**BuJo** is an extension that adds syntax highlighting for Bullet Journal items
(e.g., tasks) in Markdown. It works by parsing the text written in Markdown
files for specific patterns and highlighting the matches. At its core, **BuJo**
uses the VS Code API for injecting language grammars (i.e., see [VS Code
documentation](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide)
for more details).

## Features

### Bullet Journal syntax highlighting

**BuJo** provides highlighting for the standard Bullet Journal symbols (i.e.,
see [Carroll, 2018](https://bulletjournal.com/pages/book)). It also provides an
way to select and colorize markdown table lines, as well as
tasks in tables (i.e., see below).

For each Bullet Journal entry, you can highlight four different tokens. Take,
for example, the Bullet Journal entry below:

> `[x] Write BuJo readme file.`

**BuJo** uses the **_notation_** `[` `]` to indicate that the text that follows
is a Bullet Journal entry. The `x` inside `[` `]` represents the **_symbol_**
that describes the type of Bullet Journal entry. The **_text_** that follows
(i.e., `Write BuJo readme file.`) represents the content of the entry.

Aside from the *notation*, *symbol*, and *text*, you may also use a
**_modifier_**. For example, you can use the `!` modifier after `[x]` to
indicate a sense of priority:

> `[x] ! Write BuJo readme file.`

#### Bullet Journal symbols

Below is a list with the supported Bullet Journal symbols:

    - [ ] Represents a task.
    - [x] Represents a completed task.
    - [>] Represents a task migrated forward.
    - [>] Represents a task migrated backward.
    - [/] Represents a task in progress.
    - [-] Represents a dropped task.
    - [o] Represents an event.
    - Represents a note. Nothing special about it.

With the **BuJo** colors suggested below and the default **Dark+** theme, the
entries above are highlighted as follows:

![default highlighting for Bullet Journal symbols](./assets/syntax/colored_entries.png)

Note that the notation brackets `[]` can be colored such that they are not
visible, but will still present (e.g., `[x]`). This might be useful if one wants
to make the notation brackets transparent to keep the entry clean and emphasize
the content. For instance:

![highlighting for Bullet Journal symbols with transparent notation](./assets/syntax/transparent_notation.png)

#### Bullet Journal modifiers

**BuJo** supports three Bullet Journal modifiers:

    ! indicates, e.g., priority, inspiration, etc.
    ? indicates, e.g., waiting for someone or something, unclear, etc.
    * indicates, e.g., something special about the entry, etc.

These modifiers can be combined with any of the supported Bullet Journal
symbols. For example:

![default highlighting for Bullet Journal modifiers](./assets/syntax/modifiers.png)

**BuJo** can easily be extended to support an arbitrary number of characters
(i.e., including combinations of characters) as modifiers.

#### Compatibility with wiki links block quote IDs

**BuJo** entries can also contain wiki links or blockquote IDs (e.g., see
[Dendron](https://github.com/dendronhq/dendron) or
[Foam](https://github.com/foambubble/foam) for an awesome way to turn VS Code
into a full-fledge personal knowledge management and productivity system) as
below.

    - [ ] Represents a task | [[wiki.link]]
    - [ ] Represents a task ^dzywxpxd9fvg
    - [ ] Represents a task | [[wiki.link]] ^dzywxpxd9fvg

The lines above will be parsed in such a way that the wiki link and the block
quote IDs at the end of the line are omitted.

![highlighting for Bullet Journal entries with wiki link](./assets/syntax/entries_wiki_link.png)


### Table grids syntax highlighting

**BuJo** also exposes scopes for targeting and highlighting grids in markdown
tables (i.e., the `:---:`, `:---`, or `---:` for horizontal grid, and the `|`
for vertical grid). A separate scope is also provided for highlighting the `:`
in an horizontal grid. The following picture demonstrates the tokens
highlighting:

![highlighting for table grids](./assets/syntax/grids_colorful.png)

With the default colors suggested below the table grid can be faded way to be
less obtrusive:

![highlighting for table grids](./assets/syntax/grids.png)

### Time tracking and blocking highlighting

**BuJo** also provides support for highlighting tasks in markdown tables, as
well as well as time records:

![highlighting for time tracking](./assets/syntax/time_tracking.png)

Similarly, it also supports time blocking highlighting:

![highlighting for time tracking](./assets/syntax/time_blocking.png)

See the section **_Exposed TextMate scopes_** for a list of all exposed scopes
that can be targeted and highlighted.




## Colors and styles

### Overriding colors and styles

**BuJo** comes with default colors for the **TextMate** scopes it exposes. These
colors and styles are chosen to work well with the default **Dark+** theme.
However, they can be customized via the `editor.tokenColorCustomizations`
setting in VS Code below.

```jsonc
{
    // Other VS Code settings.

    "editor.tokenColorCustomizations": {
        // Override only for the `Default Dark+` theme.
        "[Default Dark+]": {
            "textMateRules": [
                // The scopes for which we want to provide custom colors.
            ]
        }
    }
}
```

For example, to colorize the notation brackets `[` and `]` for a task `[x]`, you
can use:

```jsonc
{
    // Other VS Code settings.

    "editor.tokenColorCustomizations": {
        // Override only for the `Default Dark+` theme.
        "[*Dark*]": {
            "textMateRules": [
                {
                    "scope": "bujo.task.completed.notation",
                    "settings": {
                        "foreground": "#FFB6C1",
                        "fontStyle": "bold underline"
                    }
                }
            ]
        }
    }
}
```

When the theme `Default Dark+` is used, the above override will result in a
completed task with bolded, underlined, and pink notation:

![custom highlighting with pink notation for a completed task](./assets/syntax/override.png)

See the section **_Exposed TextMate scopes_** below for a complete overview
of the scopes that can be customized via the `editor.tokenColorCustomizations"`
setting.

### Exposed TextMate scopes

Below are the **TextMate scopes** targeted in the VS Code settings for color
customizations.

#### For (open) tasks (i.e., `[ ]`):

- `bujo.task.open.notation`: targets the left `[` and the right `]` brackets only when they contain a space in-between
- `bujo.task.open.symbol`: targets the space between the notation brackets `[` and `]`
- `bujo.task.open.modifier`: targets any supported modifier that follows after `[ ]`
- `bujo.task.open.text`: targets the **text** that follows `[ ]` **without a modifier**, e.g., `[ ]` ___`This is targeted.`___
- `bujo.task.open.text.modifier`: targets the **text** that follows `[ ]` **with a modifier**, e.g., `[ ] !` ___`This is targeted.`___

#### For completed tasks (i.e., `[x]`):

- `bujo.task.completed.notation`: targets the left `[` and the right `]` brackets only when they contain `x` in-between
- `bujo.task.completed.symbol`: targets the symbol `x` between the notation brackets `[` and `]`
- `bujo.task.completed.modifier`: targets any supported modifier that follows after `[x]`
- `bujo.task.completed.text`: targets the **text** that follows `[x]` **without a modifier**, e.g., `[x]` ___`This is targeted.`___
- `bujo.task.completed.text.modifier`: targets the **text** that follows `[x]` **with a modifier**, e.g., `[x] !` ___`This is targeted.`___

#### For tasks in progress (i.e., `[/]`):

- `bujo.task.in.progress.notation`: targets the left `[` and the right `]` brackets only when they contain `/` in-between
- `bujo.task.in.progress.symbol`: targets the symbol `/` between the notation brackets `[` and `]`
- `bujo.task.in.progress.modifier`: targets any supported modifier that follows after `[/]`
- `bujo.task.in.progress.text`: targets the **text** that follows `[/]` **without a modifier**, e.g., `[/]` ___`This is targeted.`___
- `bujo.task.in.progress.text.modifier`: targets the **text** that follows `[/]` **with a modifier**, e.g., `[/] !` ___`This is targeted.`___

#### For tasks migrated forward (i.e., `[>]`):

- `bujo.task.migrated.forward.notation`: targets the left `[` and the right `]` brackets only when they contain `>` in-between
- `bujo.task.migrated.forward.symbol`: targets the symbol `>` between the notation brackets `[` and `]`
- `bujo.task.migrated.forward.modifier`: targets any supported modifier that follows after `[>]`
- `bujo.task.migrated.forward.text`: targets the **text** that follows `[>]` **without a modifier**, e.g., `[>]` ___`This is targeted.`___
- `bujo.task.migrated.forward.text.modifier`: targets the **text** that follows `[>]` **with a modifier**, e.g., `[>] !` ___`This is targeted.`___

#### For tasks migrated backward (i.e., `[<]`):

- `bujo.task.migrated.forward.notation`: targets the left `[` and the right `]` brackets only when they contain `<` in-between
- `bujo.task.migrated.forward.symbol`: targets the symbol `<` between the notation brackets `[` and `]`
- `bujo.task.migrated.forward.modifier`: targets any supported modifier that follows after `[<]`
- `bujo.task.migrated.forward.text`: targets the **text** that follows `[<]` **without a modifier**, e.g., `[<]` ___`This is targeted.`___
- `bujo.task.migrated.forward.text.modifier`: targets the **text** that follows `[<]` **with a modifier**, e.g., `[<] !` ___`This is targeted.`___

#### For dropped tasks (i.e., `[-]`):

- `bujo.task.dropped.notation`: targets the left `[` and the right `]` brackets only when they contain `-` in-between
- `bujo.task.dropped.symbol`: targets the symbol `-` between the notation brackets `[` and `]`
- `bujo.task.dropped.modifier`: targets any supported modifier that follows after `[-]`
- `bujo.task.dropped.text`: targets the **text** that follows `[-]` **without a modifier**, e.g., `[-]` ___`This is targeted.`___
- `bujo.task.dropped.text.modifier`: targets the **text** that follows `[-]` **with a modifier**, e.g., `[-] !` ___`This is targeted.`___

#### For events (i.e., `[o]`):

- `bujo.task.event.notation`: targets the left `[` and the right `]` brackets only when they contain `o` in-between
- `bujo.task.event.symbol`: targets the symbol `o` between the notation brackets `[` and `]`
- `bujo.task.event.modifier`: targets any supported modifier that follows after `[o]`
- `bujo.task.event.text`: targets the **text** that follows `[o]` **without a modifier**, e.g., `[o]` ___`This is targeted.`___
- `bujo.task.event.text.modifier`: targets the **text** that follows `[o]` **with a modifier**, e.g., `[o] !` ___`This is targeted.`___

#### For table grids

- `bujo.grid.horizontal`: targets the `:---:`, `:---`, or `---:` horizontal grids in tables
- `bujo.grid.colon`: targets the `:` in horizontal grids
- `bujo.grid.vertical`: target the `|` vertical grids in tables

#### For time tracking

- `bujo.todo.start.hour`: targets, e.g., `08` in `08:10-09:20` inside a table row
- `bujo.todo.start.colon`: targets, e.g., the `:` after `08` in `08:10-09:20` inside a table row
- `bujo.todo.start.minute`: targets, e.g., `10` in `08:10-09:20` inside a table row
- `bujo.todo.separator`: targets, e.g., `-` in `08:10-09:20` inside a table row
- `bujo.todo.end.hour`: targets, e.g., `09` in `08:10-09:20` inside a table row
- `bujo.todo.end.colon`: targets, e.g., the `:` after `09` in `08:10-09:20` inside a table row
- `bujo.todo.end.minute`: targets, e.g., `20` in `08:10-09:20` inside a table row
- `bujo.todo.total`: targets the total time spent, e.g., `98m` in a table row

#### For time blocking

- `bujo.timeblock.revision.time.parenthesis.open`: targets, e.g., `(` in `| (07:40) | (Revision #1) |` inside a table row
- `bujo.timeblock.revision.time.hour`: targets, e.g., `07` in `| (07:40) | (Revision #1) |` inside a table row
- `bujo.timeblock.revision.time.colon`: targets, e.g., `:` in `| (07:40) | (Revision #1) |` inside a table row
- `bujo.timeblock.revision.time.minute`: targets, e.g., `40` in `| (07:40) | (Revision #1) |` inside a table row
- `bujo.timeblock.revision.time.parenthesis.close`: targets, e.g., `)` in `| (07:40) | (Revision #1) |` inside a table row
- `bujo.timeblock.revision.text`: targets, e.g., `(Revision #1)` in `| (07:40) | (Revision #1) |` inside a table row
- `bujo.timeblock.chunk.title`: targets, e.g., `Deep work (#1)` in `| 08:00-10:00 | Deep work (#1) |` in a table row
- `bujo.timeblock.chunk.note`: targets, e.g., `- Random meeting` in `| | - Random meeting |` in a table row

In case you experience issues, the regular expressions used for capturing the
scopes above can be consulted at:

- [For Bullet Journal entries](https://regex101.com/r/ByIG8W/17)
- [For table grids](https://regex101.com/r/91IC8c/1)
- [For time blocking](https://regex101.com/r/npln0p/5)
- [For time tracking](https://regex101.com/r/36951B/5)

## Release Notes

See the [CHANGELOG](CHANGELOG.md) file.

## License

Foam is licensed under the [MIT license](LICENSE).

## References
- Carroll, R. (2018). *The bullet journal method: Track the past, order the
  present, design the future.* Penguin.
