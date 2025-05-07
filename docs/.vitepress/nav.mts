export default [
    { text: '首页', link: '/' },
    { text: 'Pokémon', link: '/Z/Pokemon/RNG/Gen' },

    // { text: '宝可梦', 
    //   items: [ // 下拉式菜单导航
    //     { text: '朱紫', link: '/' },
    //     { text: '剑盾', link: '/' },
    //   ]
    // }, 

    { text: '关于', // 下拉式菜单导航
      items: [
        // { text: '友情链接', link: '/Z/link/link' },
        { text: 'Markdown', link: '/Z/Markdown/Markdown' },
        { text: 'VitePress', link: 'https://vitepress.dev/zh/' , noIcon: false}, // noIcon: true, // 是否显示图标}, 
      ]
    }, //
]