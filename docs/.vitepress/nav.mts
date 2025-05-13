export default [
    { text: '首页', link: '/' },
    // { text: 'Pokémon', link: '/Z/Pokemon/RNG/Gen' },

    { text: 'Pokémon', 
      items: [ // 下拉式菜单导航
        { text: '宝可梦指南', link: '/Z/Pokemon/Poke/Gen' },
        { text: '宝可梦乱数', link: '/Z/Pokemon/RNG/Gen' },
      ]
    }, 

    { text: '关于', // 下拉式菜单导航
      items: [
        // { text: '友情链接', link: '/Z/link/link' },
        { text: 'Markdown', link: '/Z/Markdown/Markdown' },
        { text: 'VitePress', link: 'https://vitepress.dev/zh/' , noIcon: false}, // noIcon: true, // 是否显示图标}, 
      ]
    }, //
]