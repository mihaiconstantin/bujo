import type { SidebarConfig } from '@vuepress/theme-default';


/**
 * Sidebar links.
 */
export const sidebar: SidebarConfig = {
    "/guide/": [
        "/guide/index.md",
        "/guide/syntax-highlighting.md",
        "/guide/symbol-updating.md",
        "/guide/time-tracking.md",
        "/guide/time-blocking.md"
    ],
    "/reference/": [
        "/reference/index.md",
        "/reference/commands.md",
        "/reference/settings.md",
        "/reference/keybindings.md",
        "/reference/snippets.md",
        "/reference/scopes.md"
    ]
}
