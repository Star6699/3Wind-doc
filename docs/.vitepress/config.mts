import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "3Wind-帮助文档",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍', link: '/markdown-examples' },
      { text: '官网', link: 'https://ces.i9mr.com' },
      { text: '社区', link: 'https://3wind.i9mr.com' }
    ],

    sidebar: [
      {
        text: '介绍',
        link: '/jieshao'
      },
      {
        text: '帮助文档',
        items: [
          { text: '进服流程', link: '/jinfu' },
          { text: '管理员名单', link: '/admin'},
          { text: '指令文档', link: '/zhiling' },
          // { text: '风石', link: '/fengshi'}
        ]
      },
      {
        text: '支持与赞助',
        items: [
          { text: '赞助我们', link: '/zanzhu' },
          { text: '文档开发维护', link: '/Support_us/help3winddoc' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HYDeath/3Wind-doc' }
    ]
  }
})
