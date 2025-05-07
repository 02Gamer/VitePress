import { defineConfig } from 'vitepress'
import nav from './nav.mts'
import sidebar from './sidebar.mts'
import socialLinks from './socialLinks.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN', //语言，可选 en-US
  title: "宝可梦历险记", //站点名字
  description: "Pokémon", //站点描述
  lastUpdated: true, //上次更新（需Git提交后爬取时间）
  // base: './VitePress/', //部署到VitePress
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]], //Favicin图标(根目录)

  markdown: {
    //...
    config: (md) => //字数及时间-组件插入h1标题下
      md.renderer.rules.heading_close = (tokens, idx, options, env, self) => {
        let htmlResult = self.renderToken(tokens, idx, options);
        if (tokens[idx].tag === 'h1') htmlResult += '<ArticleMetadata />';
        return htmlResult; 
      },

    image: {
      lazyLoading: true, //开启图片懒加载
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    sidebar: sidebar,
    socialLinks: socialLinks,

    logo: '/favicon.svg', //左上角logo
    // siteTitle: false, //标题隐藏（设置站点标题）

    darkModeSwitchLabel: '主题模式', //手机端主题模式文字修改
    lightModeSwitchTitle: '白天模式', 
    darkModeSwitchTitle: '黑夜模式',
    sidebarMenuLabel: '目录', //移动端-侧边栏文字更改
    returnToTopLabel: '🔝返回顶部', //返回顶部文字修改

    //页面导航
    outline: {
      label: '本页导航', //文字显示
      // level: [2,4], //显示2-4级标题
      level: 'deep', //显示2-6级标题
    },
    // outline: false, //关闭标题显示
    // outlineTitle: '当前页面大纲' //老方式设置标题

    //本地搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            }
          }
        }
      }
    },

    // editLink: {
    //   pattern: 'https://github.com/', //改成自己地址
    //   text: '在GitHub编辑本页',
    // },

    lastUpdated: {
      text: '📝最后更新',
      formatOptions: {
        dateStyle: 'full', //可选值full、long、medium、short
        // timeStyle: 'short', //可选值full、long、medium、short
      }
    },

    //上下页
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    //页脚
    footer: {
      message: 'Released under the MIT License.',
      //自动更新时间
      copyright: `copyright © 2025-${new Date().getFullYear()} powered by Gamers`,
      //备案
      // copyright: `Copyright ©️ 2023-${new Date().getFullYear()} 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">京****号</a>`,
    },

  },
})
