import { defineConfig } from 'vitepress'
export default defineConfig({
  base: '/my-docs/',
  themeConfig: {
    siteTitle: '我的文档',
    nav: [
      { text: 'Java教程', link: '/java/' }, 
      { text: 'C#教程', link: '/csharp/' },
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
      
      '/csharp/': [
        {
          text: 'C#基础',
          items: [
            { text: '语法基础', link: '/csharp/basics' },
            { text: '面向对象', link: '/csharp/oop' },
            { text: 'LINQ查询', link: '/csharp/linq' }
          ]
        },
        {
          text: '.NET框架',
          items: [
            { text: 'ASP.NET Core', link: '/csharp/aspnet-core' },
            { text: 'Entity Framework', link: '/csharp/entity-framework' },
            { text: 'Web API', link: '/csharp/web-api' }
          ]
        }
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