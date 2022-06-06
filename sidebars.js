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

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    api: [
        "conjoon.conf.json",
        /**
         * +---------------------------
         * |       Packages
         * +---------------------------
         */
        {
            type: "category",
            label: "Packages",
            collapsed: true,
            link: {type: "doc", id: "packages/overview"},
            items: [
                "packages/extjs-app-imapuser",
                "packages/extjs-app-webmail",
                "packages/extjs-dev-imapusersim",
                "packages/extjs-dev-webmailsim",
                "packages/extjs-ctrl-simmanager"
            ]
        },
        /**
         * +---------------------------
         * |       Plugins
         * +---------------------------
         */
        {
            type: "category",
            label: "Plugins",
            collapsed: true,
            link: {type: "doc", id: "plugins/overview"},
            items: [
                "plugins/extjs-plug-themeutil",
                "plugins/app-internal-titlechange",
                "plugins/app-internal-desktopquotes",
                "plugins/mail-internal-previewtext",
                "plugins/mail-internal-newmessages",
                "plugins/theme-internal-modeswitch"
            ]
        },
        /**
         * +---------------------------
         * |       Themes
         * +---------------------------
         */
        {
            type: "category",
            label: "Themes",
            collapsed: true,
            link: {type: "doc", id: "themes/overview"},
            items: ["themes/extjs-theme-material"]
        },
        /**
         * +---------------------------
         * |       BACKEND GUIDE
         * +---------------------------
         */
        {
            type: "category",
            label: "Backends",
            link: {type: "doc", id: "backends/overview"},
            collapsed: true,
            items: [
                "backends/lumen-app-email",
                "backends/ddev-ms-email"
            ]
        },
        /**
         * +---------------------------
         * |       REST API
         * +---------------------------
         */
        {
            type: "category",
            label: "REST API",
            collapsed: true,
            link: {type: "doc", id: "rest-api/overview"},
            items: ["rest-api/rest-api-email"]
        },
        /**
         * +---------------------------
         * |       Miscellaneous
         * +---------------------------
         */
        {
            type: "category",
            label: "Miscellaneous",
            collapsed: true,
            items: ["misc/create-conjoon"]
        }

    ],
    docs: [
        "introduction",
        {
            type: "category",
            label: "Getting Started",
            link: {
                type: "generated-index",
                description: "Learn about installing, building and deploying conjoon, and how to configure the frontend to your like."
            },
            collapsed: true,
            items: [
                "installation",
                "configuration"
            ]
        },
        /**
         * +---------------------------
         * |       Guides
         * +---------------------------
         */
        {
            type: "category",
            label: "Guides",
            link: {
                type: "generated-index",
                description: "Learn about the most important concepts of conjoon"
            },
            collapsed: true,
            items: [
                "guides/connectingbackends",
                // "guides/usingtherestapitosendemailswithjavascript"
            ]
        },
        {
            type: "category",
            label: "Advanced Guides",
            link: {
                type: "generated-index",
                description: "Learn about advanced concepts of conjoon"
            },
            collapsed: true,
            items: [
                "guides/configurationdetails",
                "guides/servicelocator"
            ]
        },
        /**
         * +------------------------------
         * |       Troubleshooting & FAQ
         * +------------------------------
         */
        "troubleshooting"
    ]
};

module.exports = sidebars;
