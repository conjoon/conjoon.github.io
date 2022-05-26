/**
 * conjoon
 * conjoon.github.io
 * Copyright (C) 2022 Thorsten Suckow-Homberg https://github.com/conjoon/conjoon.github.io
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
 * USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "conjoon",
    tagline: "webmail made easy",
    url: "https://conjoon.org",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "conjoon", // Usually your GitHub org/user name.
    projectName: "conjoon", // Usually your repo name.

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl: "https://github.com/conjoon/conjoon/"
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: "https://github.com/conjoon/conjoon/"
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css")
                }
            })
        ]
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
        navbar: {
            title: "conjoon",
            logo: {
                alt: "conjoon",
                src: "img/logos/conjoon.svg"
            },
            items: [
                {
                    type: "doc",
                    docId: "introduction",
                    position: "left",
                    label: "Docs"
                },
                {to: "demo/index.html", target: "demo", label: "Demo", position: "left"},
                {
                    href: "https://github.com/conjoon",
                    className: "header-github-link",
                    position: "right",
                    "aria-label": "GitHub repository"
                },
                {
                    href: "https://conjoon.stoplight.io/docs/rest-api-description/",
                    className: "header-stoplight-link",
                    position: "right",
                    "aria-label": "REST API docs"
                }
            ]
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Introduction",
                            to: "docs/introduction"
                        },
                        {
                            label: "Installation",
                            to: "docs/installation"
                        }
                    ]
                },
                {
                    title: "Resources",
                    items: [
                        {
                            label: "GitHub",
                            href: "https://github.com/conjoon"
                        },
                        {
                            label: "REST API",
                            href: "https://conjoon.stoplight.io/docs/rest-api-description/"
                        }
                    ]
                },
                {
                    title: "Support",
                    items: [{
                        label: "Contact",
                        target: "_blank",
                        href: "https://github.com/ThorstenSuckow"
                    }, {
                        label: "Professional Support",
                        href: "https://eyeworkers.de"
                    }
                    ]
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "Demo",
                            target: "demo",
                            href: "demo/index.html"
                        },
                        {
                            label: "Twitter",
                            href: "https://twitter.com/conjoon"
                        }
                    ]
                }
            ],
            copyright: `Copyright © 2007-${new Date().getFullYear()} Thorsten Suckow-Homberg / conjoon Open Source project. This website is proudly built with <a href="https://docusaurus.io">Docusaurus</a>.`
        },
        prism: {
            theme: darkCodeTheme
        },
        colorMode: {
            defaultMode: "dark",
            disableSwitch: true,
            respectPrefersColorScheme: false
        },
        announcementBar: {
            id: "support_us",
            content: "⭐️If you like conjoon, give it a star on <a target=\"_blank\" href=\"https://github.com/conjoon/conjoon/\">GitHub</a> and follow us on <a target=\"_blank\" href=\"https://twitter.com/conjoon\">Twitter <img src=\"/img/logos/twitter.svg\" /></a>",
            backgroundColor: "#a2ff00",
            textColor: "#000000",
            isCloseable: true
        }
    })
};

module.exports = config;
