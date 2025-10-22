import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/my-docs/',
  themeConfig: {
     siteTitle: '我的文档',
    nav: [
      { text: 'Java', link: '/' },      
      { text: 'c#', link: '/about' }  
    ],
    
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '首页', link: '/' },    
          { text: '关于', link: '/about' } 
        ]
      }
    ]
  }
})

