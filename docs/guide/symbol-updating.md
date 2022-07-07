---
pageClass: page-guide
title: Symbol Updating
---

# Symbol Updating

**BuJo** provides two ways to update entry symbols: (1) via user commands and
(2) via keybindings.

## Via Commands

**Bujo** provides several commands via the command palette (i.e., `ctrl/cmd +
shift + p`) to update the symbol for the first entry on the line where the
cursor is placed (i.e., including in markdown tables). The following commands
are available:

- `BuJo: Set Migrated Forward` to set the entry symbol to `[>]`
- `BuJo: Set Migrated Backward` to set the entry symbol to `[<]`
- `BuJo: Set Completed` to set the entry symbol to `[x]`
- `BuJo: Set Open` to set the entry symbol to `[ ]`
- `BuJo: Set In Progress` to set the entry symbol to `[/]`
- `BuJo: Set Dropped` to set the entry symbol to `[-]`

The following video demonstrates the commands in action:

<div class="showcase-video">
    <iframe src="https://www.youtube.com/embed/ltXW8MO-45M?rel=0&showinfo=0&controls=0&loop=1&modestbranding=1&playlist=ltXW8MO-45M" title="BuJo Commands for Updating Entry Symbols" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Via Keybindings

**BuJo** also provides functionality to update entry symbols via arbitrary
keybindings that pass the symbol to be set as an argument. For instance, when
triggered, the following keybinding will update the task status to `[x]`, and
toggle between `[x]` and `[ ]` on subsequent triggers:

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

Several default keybindings are provided for changing entry symbols, albeit they
can be changed as needed:

- `alt+x` to toggle between `[x]` and `[ ]`
- `alt+o` to set `[ ]`
- `alt+-` to toggle between `[-]` and `[ ]`
- `alt+/` to toggle between `[/]` and `[ ]`
- `alt+,` to toggle between `[<]` and `[ ]`
- `alt+.` to toggle between `[>]` and `[ ]`
- `alt+p` to toggle between `[o]` and `[ ]`

The video below demonstrates the keybindings in action:

<div class="showcase-video">
    <iframe src="https://www.youtube.com/embed/h9AbEm-OVX0?rel=0&showinfo=0&controls=0&loop=1&modestbranding=1&playlist=h9AbEm-OVX0" title="BuJo Keybindings for Updating Entry Symbols" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
