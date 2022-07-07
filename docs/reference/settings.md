---
pageClass: page-reference
---

# Settings

Below you can find the extension settings included with **BuJo**:

#### `bujo.scheduler.plannerPrefix`
- Specifies the prefix for the planner file (e.g., **`log`**`.2022.03.20`).
- **default:** `log`

#### `bujo.scheduler.symbolForScheduledEntry`
- Specifies the symbol to set for a scheduled entry (e.g., `>`).
- **default:** `>`

#### `bujo.scheduler.taskName`
- Specifies how to construct the task name for the time tracking table when
  scheduling a `BuJo` entry that contains a wiki link with an alias (e.g., `- [
  ] [[An arbitrary task|file-for-arbitrary-task]]`). Possible options are
  `alias` (i.e., `An arbitrary task`) or `filename` (i.e.,
  `file-for-arbitrary-task`).
- **default:** `alias`
