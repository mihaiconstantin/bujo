import type { NavbarConfig } from '@vuepress/theme-default';


/**
 * Navbar links.
 */
export const navbar: NavbarConfig = [
    {
        text: "Guide",
        link: "/guide/"
    },
    {
        text: "Reference",
        children: [
            {
                text: "Commands",
                link: "/reference/commands.md"
            },
            {
                text: "Settings",
                link: "/reference/settings.md"
            },
            {
                text: "Keybindings",
                link: "/reference/keybindings.md"
            },
            {
                text: "Snippets",
                link: "/reference/snippets.md"
            },
            {
                text: "TextMate Scopes",
                link: "/reference/scopes.md"
            }
        ]
    },
    {
        text: "Marketplace",
        link: "https://marketplace.visualstudio.com/items?itemName=mihaiconstantin.bujo"
    }
]
