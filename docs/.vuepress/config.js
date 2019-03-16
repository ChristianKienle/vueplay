module.exports = {
  title: "VuePlay",
  // base: "/",
  base: "/vueplay/",
  plugins: ["@vuepress/active-header-links",
    "@vuepress/clean-urls"],
  head: [
    ['link', {rel: 'apple-touch-icon', sizes: "180x180", href: '/apple-touch-icon.png'}],
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
    ],
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'ChristianKienle/vueplay',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    //  docsRepo: 'vuejs/vuepress',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!'
  }
}