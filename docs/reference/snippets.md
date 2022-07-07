---
pageClass: page-reference
---

# Snippets

**BuJo** provides various snippets for everyday actions. Below you can find a
short description and example output for the snippets available:

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
    |        Time | Block         |
    | ----------: | :------------ |
    |     (00:00) | (Revision #1) |
    |             |               |
    | 00:00-00:00 | Chunk (#1)    |
    |             | - Chunk note  |
    |             |               |
    ```

- `timeblockrow` to add an empty row to the time blocking table

    ```markdown
    |             |               |
    ```

- `timeblockrev` to enter a revision row in the time blocking table

    ```markdown
    |     (10:53) | (Revision #1) |
    ```

- `timeblockchunk` to enter a chunk row in the time blocking table

    ```markdown
    | 00:00-00:00 | <Enter here>  |
    ```

- `timeblocknote` to enter a note row in the time blocking table

    ```markdown
    |             | - <Add here>  |
    ```

:::tip
The *Markdown All in One* extension provides a table auto-formatting via the
`alt+shift+f` keybinding. This makes it easy to work with and align markdown
tables with a simple keyboard shortcut. This functionality will soon be brought
to **BuJo**.
:::
