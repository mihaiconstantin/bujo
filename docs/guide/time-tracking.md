---
pageClass: page-guide
title: Time Tracking
---

# Time Tracking

**BuJo** provides several commands via the command palette to schedule entries
(i.e., copy them to the **time tracking table** as tasks) and track the time
spent. An example of a time tracking table can be seen below:

<div class="showcase-image">
    <img src="/images/features/bujo-syntax-highlighting-time-tracking.png" alt="Highlighting for the Time Tracking Table" width=600>
</div>

## Scheduling Entries

To schedule tasks, one can use the `BuJo: Schedule Entry`. When executed, this
command will:

- Extract the **BuJo** entry text (i.e., alias if the entry is a wiki-link) or
  wiki-link depending on the value of the setting `bujo.scheduler.taskName`.
- Generate a unique identifier (e.g., `^bf4uuibsangd`) for the **BuJo** entry
  and append it at the end of the line.
- Prompt the user to type the name of a markdown file that contains a time
  tracking table.
- Copy the entry text to the time tracking table as an open task and include a
  reference to the original **BuJo** entry based on the unique identifier.
- Update the symbol of the original **BuJo** entry to indicate that the task has
  been migrated to a time tracking table.

The following video demonstrates the scheduling command in action:

<div class="showcase-video">
    <iframe src="https://www.youtube.com/embed/TOfaROEAoek?rel=0&showinfo=0&controls=0&loop=1&modestbranding=1&playlist=TOfaROEAoek" title="BuJo VS Code - Adding entries to the time tracking table" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Alternatively, the command `BuJo: Schedule Entry` can also be invoked via the
default keybinding `alt+shift+p`.

### Settings

The behavior of the scheduling command can be further customized through the
following user settings:

#### `bujo.scheduler.plannerPrefix`

Can be used to specify the prefix to use when selecting the daily planner file
via the input box (e.g., `*prefix*.2022.03.20`).

#### `bujo.scheduler.symbolForScheduledEntry`

Can be used to specify the symbol to set for a `BuJo` entry scheduled to the
time track table (i.e., by default, the symbol is updated from `[ ]` to `[>]`).

#### `bujo.scheduler.taskName`

Can be used to specify what to use as task name for the time tracking table when
scheduling a `BuJo` entry that contains a wiki link with an alias (e.g., `[[A
random task|project.example.a-random-task]]`:

- `alias` sets the name of the task in the table to wiki link alias (e.g., `A
  random task`)
- `filename` sets the name of the task to the actual wiki link (e.g.,
  `[[project.example.a-random-task]]`)

## Tracking Time

**BuJo** also introduces commands to track the time spent on tasks in a time
tracking table:

- `BuJo: Record Time` to add a time record for a task
- `BuJo: Time Spent` to calculate the total time spent on a task

The following video demonstrates these commands in action:

<div class="showcase-video">
    <iframe src="https://www.youtube.com/embed/FiB0kfvz0XU?rel=0&showinfo=0&controls=0&loop=1&modestbranding=1&playlist=FiB0kfvz0XU" title="BuJo VS Code - Commands for time tracking" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Additionally, the two commands above can also be invoked via the default
keybindings:

- `alt+shift+t` to run command `BuJo: Record Time`
- `alt+shift+s` to run command `BuJo: Time Spent`

::: tip
Check out the [Snippets Reference](/reference/scopes.md) for handy snippets that
can be used to generate time tracking tables, add tasks from the clipboard, and
more.
:::
