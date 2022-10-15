/** @type {import('@docusaurus/types').DocusaurusConfig} */
const path = require('path');
module.exports = {
  title: "Nold's Wiki",
  url: "https://wiki.nold.in",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "/img/favicon.ico",
  organizationName: "nold360",
  projectName: "nold360.github.io",
  //themes: ['@docusaurus/theme-classic'],
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Nold's Wiki",
      logo: {
        src: "/img/logo.svg",
      },
      items: [
        {
          to: "/",
          activeBasePath: "/",
          position: "left",
          label: "Wiki",
        },
        {
          href: "https://github.com/nold360/wiki",
          className: "github",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [ ],
      copyright: `Copyright © ${new Date().getFullYear()} by Noldtronics`,
    },
  },
  plugins: [
     //[require.resolve('@cmfcmf/docusaurus-search-local')]
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://github.com/nold360/wiki/edit/master/",
        },
        theme: {
          customCss: require.resolve("./static/css/custom.css"),
        }
      },
    ],
    //    ['@docusaurus/plugin-content-docs', { path: '/', routeBasePath: 'docs', include: ['*.md', '*.mdx']} ],
    //['@docusaurus/plugin-content-blog', { path: 'blog', routeBasePath: 'blog', include: ['*.md', '*.mdx']} ],
  ],
};
