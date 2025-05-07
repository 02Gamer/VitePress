import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style/index.css'

import { h } from 'vue' //h函数
import MyLayout from './components/MyLayout.vue' //插槽组件

import Mycomponent from './components/Mycomponent.vue' //组件安装
import Linkcard from './components/Linkcard.vue' //链接卡片
import ArticleMetadata from './components/ArticleMetadata.vue' //字数及时间
import ImageViewer from './components/ImageViewer.vue' //图片放大

export default {
  extends: DefaultTheme,
  enhanceApp({app}) {
    //...
    app.component('Mycompnenet', Mycomponent) //插件安装
    app.component('Linkcard', Linkcard) //链接卡片
    app.component('ArticleMetadata', ArticleMetadata) //字数及时间
    app.component('ImageViewer',ImageViewer) //图片放大
  },
  
  Layout() {
    return h(MyLayout) //视图过度组件
  },
  //
} satisfies Theme