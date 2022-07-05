---
pageClass: page-guide
title: Syntax Highlighting
---

# Syntax Highlighting

When enabled, **BuJo** parses the text written in Markdown files for specific
`regex` patterns. These patterns are exposed as
[TextMate](https://macromates.com/manual/en/language_grammars) scopes to form a
language grammar that can be used for syntax highlighting. At its core, **BuJo**
uses the VS Code API for injecting a language grammar (i.e., see [VS Code
documentation](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide)
for more details). This section of the guide provides information about the
anatomy of a **BuJo** entry, as well as other components that are support for
syntax highlighting.

## BuJo Entries

For each Bullet Journal entry, you can highlight four different tokens. Take,
for example, the Bullet Journal entry below that constitutes a completed task:

```markdown
- [x] Write BuJo readme file.
```

### Notation

**BuJo** uses the **_notation_** `[` `]` to indicate that the text that follows
is a Bullet Journal entry. The `x` in `[x]` represents the **_symbol_** that
describes the type of Bullet Journal entry. The **_text_** that follows (i.e.,
`Write BuJo readme file.`) represents the entry's content.

Aside from the *notation*, *symbol*, and *text*, you may also use a
**_modifier_**. For example, you can use the `!` modifier after `[x]` to
indicate a sense of priority:

```markdown
[x] ! Write BuJo readme file.
```

### Symbols

Below is a list with the supported Bullet Journal symbols (i.e., more can be
added upon request):

```markdown
- [ ] Represents a task.
- [x] Represents a completed task.
- [>] Represents a task migrated forward.
- [<] Represents a task migrated backward.
- [/] Represents a task in progress.
- [-] Represents a dropped task.
- [o] Represents an event.
- Represents a note. Nothing special about it.
```

With the default colors and the **Default Dark+** theme, the entries above are
highlighted as follows:

<div class="showcase-image">
    <img src="/images/features/bujo-syntax-highlighting-colored-entries.png" alt="Default highlighting for Bullet Journal symbols" width=400>
</div>

The notation brackets `[` and `]` can be colored such that they are not visible,
but will still remain present in the editor (e.g., `[x]`). This can be useful if
one wants to make the notation brackets transparent to keep the entry clean and
emphasize the content. For example:

<div class="showcase-image">
    <img src="/images/features/bujo-syntax-highlighting-transparent-notation.png" alt="Highlighting for Bullet Journal symbols with transparent notation" width=400>
</div>

### Modifiers

**BuJo** also supports three Bullet Journal modifiers:

- `!` - may indicate priority, inspiration, etc.
- `?` - may indicate waiting for someone or something, unclear, etc.
- `*` - may indicate something special about the entry, etc.

These modifiers can be combined with any of the supported Bullet Journal
symbols. For example:

<div class="showcase-image">
    <img src="/images/features/bujo-syntax-highlighting-modifiers.png" alt="Default highlighting for Bullet Journal modifiers" width=400>
</div>

**BuJo** can easily be extended upon request to support an arbitrary number of
characters (i.e., including combinations of characters) as modifiers. **BuJo**
provides flexibility with respect to where a supported modifier can be placed.
For example, all of the following are correctly identified and parsed as valid
entries, as can be seen in the image below:

```markdown
- [ ] ! Represents a task
- [ ]! Represents a task
- [ ] !Represents a task
- [ ]!Represents a task
```

<div class="showcase-image">
    <img src="/images/features/bujo-syntax-highlighting-modifier-placement.png" alt="Modifier placement" width=230>
</div>


### Complex Entries

**BuJo** also provides syntax highlighting support for multiple entries on the
same line separated by a pipe (i.e., `|`) character:

```text
- [ ] Task one | [ ] ! Task two | [x] Task three
- [<] Task one | [-] ! Task two | [>] Task three
```

<div class="showcase-image">
    <img src="/images/features/bujo-syntax-highlighting-multiple-entries-per-line.png" alt="Support for multiple entries per line" width=423>
</div>

::: warning Experimental
The support for multiple **BuJo** entries on the line is *experimental* and may
change in the future.
:::


### Metadata

**BuJo** entries may also contain inline *metadata* stored after the the `|`
character. For example, entries can contain wiki links or blockquote IDs (e.g.,
as used by [Dendron](https://github.com/dendronhq/dendron) and
[Foam](https://github.com/foambubble/foam)):

```markdown
- [ ] Represents a task | [[wiki.link]]
- [ ] Represents a task ^dzywxd9fvg
- [ ] Represents a task | [[wiki.link]] ^dzywxd9fvg
```

The lines above will be parsed in such a way that the wiki link and the block
quote IDs at the end of the line are omitted.

<div class="showcase-image">
    <img src="/images/features/bujo-syntax-highlighting-entries-with-wiki-link.png" alt="Highlighting for Bullet Journal entries with wiki links" width=460>
</div>

## Markdown Tables

**BuJo** also exposes scopes for targeting and highlighting grids in markdown
tables (i.e., the `:---:`, `:---`, or `---:` for horizontal grids, and the `|`
for vertical grids). A separate scope is also provided for highlighting the `:`
in in horizontal grids. The following screenshot shows the tokens that can
highlighted:

<div class="showcase-image">
    <img src="/images/features/bujo-syntax-highlighting-multi-colored-grids.png" alt="Highlighting for table grids" width=230>
</div>

With the default colors (i.e., and the `Default Dark+` theme) the table grid can
be faded way to be less obtrusive:

<div class="showcase-image">
    <img src="/images/features/bujo-syntax-highlighting-gray-colored-grids.png" alt="Highlighting for table grids" width=230>
</div>

## Time Tracking

**BuJo** also provides support for highlighting tasks in markdown tables, as
well as well as associated time records (i.e., `hh:mm-hh:mm`):

<div class="showcase-image">
    <img src="/images/features/bujo-syntax-highlighting-time-tracking.png" alt="Highlighting for the time tracking table" width=600>
</div>

_Note. See section [Time Tracking](/guide/time-tracking.md) for how to easily
add entries to the time tracking table and track the time spent on tasks._

## Time Blocking

Similarly, **BuJo** it also supports time blocking syntax highlighting, based on
the methodology discussed in [Newport
(2016)](https://www.goodreads.com/book/show/25744928-deep-work).

<div class="showcase-image">
    <img src="/images/features/bujo-syntax-highlighting-time-blocking.png" alt="Highlighting for the time blocking table" width=500>
</div>

## Custom Colors

**BuJo** comes with default colors and styles for the
[TextMate](https://macromates.com/manual/en/language_grammars) scopes it
exposes. These colors and styles are chosen to work well with the **Default
Dark+** theme. However, they can be customized via the
`editor.tokenColorCustomizations` setting in [VS
Code](https://code.visualstudio.com).

Upon typing `"editor.tokenColorCustomizations"` you can trigger VS Code's
intellisense which will automatically pre-fill the `textMateRules` array with
the default colors provided by **BuJo**.

```json
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

```json
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
completed task with bolded, underlined, and pink notation brackets:

<div class="showcase-image">
    <img src="/images/features/bujo-syntax-highlighting-notation-override.png" alt="Custom highlighting with pink notation for a completed task" width=400>
</div>

::: tip
Check out the [TextMate Scopes Reference](/reference/scopes.md) for the complete
list of tokens that can be targeted and colorized.
:::
