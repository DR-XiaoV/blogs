module.exports = {
  // 网站 Title
  title: '天方',

  // 网站描述
  description: '个人博客',

  // 网站 favicon 图标设置等
  head: [
    // ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],

  // 使用的主题
  theme: 'melodydl',

  // 主题配置
  themeConfig: {
    title: '诗经',

    // 个人信息（没有或不想设置的，删掉对应字段即可）
    personalInfo: {
      // 名称
      name: '天方',

      // 头像 public文件夹下
      avatar: '/avatora.jpg',

      // 头部背景图
      headerBackgroundImg: '/qsjq.jpg',

      // 个人简介 (支持 HTML)
      description: '',

      // 电子邮箱
      email: '2683926960@qq.com',

      // 所在地
      location: 'Nanjing, China',
    },
    // 顶部导航栏内容
    nav: [
      // { text: 'HOME', link: '/' },
      { text: 'ABOUT', link: '/about/' },
      // { text: 'TAGS', link: '/tags/' },
    ],

    // 首页头部标题背景图设置，图片直接放在 public 文件夹下
    header: {
      home: {
        title: '诗经',
        subtitle: '关关雎鸠，在河之洲',
        headerImage: '/header.jpg',
      },

      // tag页面头部标题背景图设置，图片直接放在 public 文件夹下
      tags: {
        title: 'Tags',
        subtitle: '遇见你花光了我所有的运气',
        headerImage: '/header.jpg',
      },

      // 文章详情头部背景图
      postHeaderImg: '/header.jpg',
    },

    // 社交平台帐号信息
    // sns: {
    //   // github: {
    //   //   account: 'github',
    //   //   link: 'https://github.com/youdeliang',
    //   // },
    // },
    // 底部 footer 的相关设置
    footer: {
      // gitbutton  配置
      // gitbtn: {
      // 仓库地址
      //   repository:
      //     'https://ghbtns.com/github-btn.html?user=youdeliang&repo=vuepress-theme-top&type=star&count=true',
      //   frameborder: 0,
      //   scrolling: 0,
      //   width: '80px',
      //   height: '20px',
      // },

      // 添加自定义 footer
      custom: ``,
    },

    // 分页配置
    pagination: {
      // 每页文章数量
      perPage: 5,
    },

    // vssue 评论配置, 如果不需要，可以设置 comments: false
    comments: false,
  },
};
