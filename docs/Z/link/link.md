---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.hakuhiro.xyz/images/avatar.jpg',
    name: '白希洛的冒险笔记',
    title: '少妇白洁！',
    links: [
      { icon: 'github', link: 'https://github.com/Haku76' },
      // { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ],
  },
  {
    avatar: 'https://willkyu.github.io/images/avatar_.png',
    name: 'willkyu',
    title: '最好的丘丘！',
    links: [
      { icon: 'github', link: 'https://github.com/Willkyu' },
      // { icon: 'twitter', link: 'https://twitter.com/KiaKing85' },
    ],
  },
  // {
  //   avatar: 'https://willkyu.github.io/images/avatar_.png',
  //   name: 'wokann',
  //   title: '卧看微尘老师！',
  //   links: [
  //     { icon: 'github', link: 'https://wokann.github.io/' },
  //     { icon: 'twitter', link: 'https://twitter.com/KiaKing85' },
  //   ],
  // },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      友情链接
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />
</VPTeamPage>