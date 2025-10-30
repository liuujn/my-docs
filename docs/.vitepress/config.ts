import { defineConfig } from 'vitepress'
export default defineConfig({
  base: '/my-docs/',
  themeConfig: {
    siteTitle: '我的文档',
    nav: [
      { text: 'Java教程', link: '/java/' }, 
    ],
    
    sidebar: {
      '/java/': [
          {
      text: 'Java教程',
      items: [
        { text: 'Java首页', link: '/java/' }  
      ]
    },
        {
          text: 'Java基础',
          items: [
            { text: '常用工具', link: '/java/tools' }, 
          ]
        },
      ],
      
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/liuujn' }
    ],
    footer: {
      message: 'java学习资源汇总',
      copyright: 'Copyright © 2025-present Evan You'
    },
    search: {
      provider: "local",
    },
  }
})