// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'conjoon',
  tagline: 'webmail made easy',
  url: 'https://conjoon.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'conjoon', // Usually your GitHub org/user name.
  projectName: 'conjoon', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/conjoon/conjoon/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/conjoon/conjoon/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'conjoon',
        logo: {
          alt: 'conjoon',
          src: 'img/logos/conjoon.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Installation',
          },
          {to: 'demo/index.html', target: "_blank", label: 'Demo', position: 'left'},
          {
            href: 'https://github.com/conjoon',
            className: 'header-github-link',
            position: "right",
            "aria-label": "GitHub repository"
          },
          {
            href: 'https://conjoon.stoplight.io/docs/rest-api-email',
            className: 'header-stoplight-link',
            position: "right",
            "aria-label": "REST API docs"
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Installation',
                to: 'docs/intro',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'REST API',
                href: 'https://conjoon.stoplight.io/docs/rest-api-email',
              }
            ],
          },
          {
            title: "Support",
            items: [{
                label: 'Contact',
                target: "_blank",
                href: 'https://github.com/ThorstenSuckow',
              }, {
                label: 'Professional Support',
                href: 'https://eyeworkers.de',
              },
              ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Demo',
                target: "_blank",
                href: 'demo/index.html',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/conjoon',
              },
            ],
          },
        ],
        copyright: `Copyright © 2007-${new Date().getFullYear()} conjoon Open Source project. This website is proudly built with <a href="https://docusaurus.io">Docusaurus</a>.`,
      },
      prism: {
        theme: darkCodeTheme
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false
      },
      announcementBar: {
        id: 'support_us',
        content: "⭐️If you like conjoon, give it a star on <a target=\"_blank\" href=\"https://github.com/conjoon/conjoon/\">GitHub</a> and follow us on <a target=\"_blank\" href=\"https://twitter.com/conjoon\">Twitter <img src=\"/img/logos/twitter.svg\" /></a>",
        backgroundColor: '#a2ff00',
        textColor: '#000000',
        isCloseable: true
      }
    }),
};

module.exports = config;
