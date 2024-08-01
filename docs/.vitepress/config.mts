import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "3Wind文档",
  description: "三阵风3wind服务器详细文档",
  lang: 'zh-CN',
  // cleanUrls: true,
  // metaChunk: true,
  lastUpdated: true,
  markdown: {
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {

      // 搜索框的样式
      search: {
        provider: "local",
        options: {
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: '关闭',
              },
            },
          },
        },
      },

    nav: [
      { text: '首页', link: '/' },
      { text: '官网', link: 'https://3wind.cn', target: "_self" },
      { text: '论坛', link: 'https://bbs.3wind.cn', target: "_self" },
      { text: '介绍', link: '/introduce/' },
      { text: '规则', link: '/rules/' },
      { text: '公告', link: '/announcements/' },
      { text: '更新日志', link: '/logs/' },
      
    ],

    sidebar:
      [
        {
          text: '前言',
          link: "/initial/preface"
        },
        
        {
          text: '玩家筛选',
          link: "/initial/Player-filtering"
        },

        {
          text: '进服教程',
          link: "/initial/join"
        },

        {
          text: '介绍',
          link: "/introduce/",
          collapsed: true,
          items: [
            { text: "服务器介绍", link: "/introduce/" },
            { text: `正版养老服`, link: "/introduce/yanglao" },
            { text: `公开特色服`, link: "/introduce/tese" },
            // { text: `正版生电服`, link: "/introduce/shengdian" },
            // { text: `公开粘液服`, link: "/introduce/nianye" },
            // { text: `公开游戏服`, link: "/introduce/game" },
          ]
        },

        {
          text: '规则',
          link: "/rules/",
          collapsed: true,
          items: [
            { text: "玩家守则", link: "/rules/" },
            { text: `矿透`, link: "/rules/xray" },
            { text: `开挂`, link: "/rules/cheat" },
            { text: `偷东西`, link: "/rules/steal" },
            { text: `模组`, link: "/rules/mods" },
          ]
        },



        {
          text: '指令大全',
          link: "/faq/directives"
        },

        {
          text: '封禁、解封与举报',
          link: '/faq/ban/'
        },

        {
          text: '支持与赞助',
          link: "/sponsor/",
          collapsed: true,
          items: [
            {
              text: '微信或支付宝',
              link: "/sponsor/"
            },
            {
              text: '爱发电',
              link: "/sponsor/aifadian"
            },
          ]
        },

        {
          text: '社区',
          collapsed: true,
          link: "/groups/",
          items: [
            // { text: '动漫社', link: "/groups/DMS" },
            // { text: '莱文市', link: "/groups/LWS" },
            // { text: '苏维埃', link: "/groups/SWA" },
            // { text: '芋泥蛋糕', link: "/groups/YNDG" },
            // { text: '璃虹港', link: "/groups/LHG" },
            // { text: '约翰山庄', link: "/groups/YHSZ" },
            // { text: '青鸾共和社', link: "/groups/QLGHS" },
            // { text: '南植重工基地', link: "/groups/NZZGJD" },
          ]
        },

        {
          text: '更新日志',
          collapsed: true,
          link: "/faq/logs",
          items: []
        },

        {
          text: '公告',
          collapsed: true,
          link: "/announcements/",
          items: []
        },

        {
          text: '未来计划',
          link: "/future/"
        },

        {
          text: '腐竹笔记',
          link: "/notes/"
        },

      ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      level: [2, 3], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: '页面导航' // 文字显示
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})