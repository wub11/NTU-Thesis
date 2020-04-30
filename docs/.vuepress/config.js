module.exports = {
  base: '/NTU-Thesis/',
  title: 'NTU Thesis',
  description: '',
  head: [
    ['link', { rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css" }],
    ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css" }],
    ['link', { rel: "shortcut icon", type: "image/png", size: "any", href: "/favicon.png" }],
    ['link', { rel: "icon", type: "image/svg+xml", size: "any", href: "/favicon.svg" }]
  ],

  theme: 'antdocs',
  themeConfig: {
    logo: '/favicon.png',
    nav: [
      { text: 'Home', link: '/' }
    ],
    lastUpdated: 'Last Updated',
    Host: 'https://hsins.github.io/',
  },
};