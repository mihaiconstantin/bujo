# Changelog

## [2.0.1] - 2022.04.17
### Changed
- Remove language grammar identifiers in `package.json`

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

### [1.1.0] - 2021.11.29
- Add two new tokens `bujo.horizontal.grid` and `bujo.vertical.grid` for
  selecting grids in markdown tables (i.e., the `:---:`, `:---`, or `---:` for
  horizontal grid, and the `|` for vertical grid).

### [1.0.0] - 2021.05.25
### Added
- Added `TextMate` scopes for standard Bullet Journal symbols
    - `[ ]` task
    - `[x]` completed task
    - `[>]` migrated forward task
    - `[<]` migrated backward task
    - `[o]` event
- Added `TextMate` scopes for two modifiers `!` and `?`
