/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Nold's Wiki",
  url: "https://wiki.nold.in",
  baseUrl: "/",
  trailingSlash: true,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "/img/favicon.ico",
  organizationName: "nold360",
  projectName: "nold360.github.io",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: "  ",
        darkIconStyle: {
          marginTop: "1px",
        },
        lightIcon: "  ",
        lightIconStyle: {
          marginTop: "1px",
        },
      },
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
     [require.resolve('@cmfcmf/docusaurus-search-local'), {
       docsRouteBasePath: '/',
     }]
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
        themes: ['@docusaurus/theme-classic'],
        theme: {
          customCss: require.resolve("./static/css/custom.css"),
        }
      },
    ],
    //    ['@docusaurus/plugin-content-docs', { path: '/', routeBasePath: 'docs', include: ['*.md', '*.mdx']} ],
    ['@docusaurus/plugin-content-blog', { path: 'blog', routeBasePath: 'blog', include: ['*.md', '*.mdx']} ],
  ],
};
