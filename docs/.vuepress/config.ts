import { defineUserConfig } from "vuepress"
import { defaultTheme } from "vuepress";
import { sidebar, navbar, head } from "./configs";

/**
 * VuePress config.
 */
export default defineUserConfig({
    base: "/",
    lang: "en-US",
    title: "BuJo",
    description: "Bullet Journal Markdown Workflows",
    head: head,
    theme: defaultTheme({
        docsDir: "docs",
        docsBranch: "main",
        repoLabel: "GitHub",
        lastUpdated: true,
        contributors: true,
        navbar: navbar,
        sidebar: sidebar,
        sidebarDepth: 2,
        logo: "/images/logos/bujo-logo-128x128.png",
        repo: "https://github.com/mihaiconstantin/bujo",
        editLinkText: "Edit this page on GitHub"
    })
})
