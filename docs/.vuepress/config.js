module.exports = {
  base: '/NTU-Thesis/',
  title: '國立臺灣大學碩博士論文模板',
  description: '',
  head: [
    ['link', { rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css" }],
    ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css" }],
    ['link', { rel: "shortcut icon", type: "image/png", size: "any", href: "/favicon.png" }],
    ['link', { rel: "icon", type: "image/svg+xml", size: "any", href: "/favicon.png" }]
  ],

  themeConfig: {
    logo: '/favicon.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: '使用指南', link: '/Guide/' },
      { text: '模板下載', link: '/Download/' }
    ],
    lastUpdated: 'Last Updated',
    Host: 'https://hsins.github.io/',
  },
};