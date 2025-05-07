export default {
    //RNG
    '/Z/Pokemon/RNG/Gen': [
        {
            text: 'Pokémon', // 章节标题
            collapsed: false, // 是否折叠
            items: [
                { text: '前言', link: '/Z/Pokemon/RNG/Gen' }, // 章节链接
            ]
        },
        
        // {
        //     text: 'Gen 9', // 章节标题
        //     collapsed: true, // 是否折叠
        //     items: [
        //         { text: '宝可梦朱紫', link: '/Z/Pokemon/RNG/Gen9/SV' }, // 章节链接
        //         { text: '宝可梦传说ZA', link: '/Z/Pokemon/RNG/Gen9/ZA' }, // 章节链接
        //     ]
        // }, 

        {
            text: 'Gen 8', // 章节标题
            collapsed: true, // 是否折叠
            items: [
                { text: '宝可梦剑盾', link: '/Z/Pokemon/RNG/Gen8/SWSH' }, // 章节链接
                { text: '宝可梦珍钻复刻', link: '/Z/Pokemon/RNG/Gen8/BDSP' }, // 章节链接
                // { text: '宝可梦传说阿尔宙斯', link: '/Z/Pokemon/RNG/Gen8/PLA' }, // 章节链接
            ]
        },
    ],
    //Markdown
    '/Z/Markdown/Markdown': [
        {
            text: 'Markdown语法', // 章节标题
            items: [
                { text: 'Markdown', link: '/Z/Markdown/Markdown' }, 
                { text: 'Markdown 示例', link: '/Z/Markdown/api-examples' }, 
                { text: 'Markdown 扩展', link: '/Z/Markdown/markdown-examples' }, 
            ]
        },
    ],
}