module.exports = {
  title: "VuePlay",
  base: "/vueplay/",
  plugins: [
    "@vuepress/active-header-links",
    "@vuepress/clean-urls"],
  head: [
    ['link', {rel: 'apple-touch-icon', sizes: "180x180", href: '/apple-touch-icon.png'}],
    ['link', {rel: 'shortcut-icon', type: "image/x-icon", href: '/favicon.ico'}],
    ['link', {rel: 'icon', type: "image/png", sizes: "32x32", href: '/favicon-32x32.png'}],
    ['link', {rel: 'icon', type: "image/png", sizes: "16x16", href: '/favicon-16x16.png'}],
    ['link', {rel: 'manifest', href: "/site.webmanifest"}],
    ['link', {rel: 'mask-icon', href: "/safari-pinned-tab.svg", color: "#5bbad5"}],
    ['meta', {name: 'msapplication-TileColor', content: "#da532c"}],
    ['meta', {name: 'theme-color', content: "#ffffff"}],
  ],
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Guide', link: '/guide/'},
      {text: 'GitHub', link: 'https://github.com/ChristianKienle/vueplay'},
    ],
    repo: 'ChristianKienle/vueplay',
    repoLabel: 'Contribute!',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!'
  }
}