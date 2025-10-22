import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/my-docs/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },        // ✅ 正确：VitePress 会自动添加 base
      { text: '关于', link: '/about' }    // ✅ 正确：VitePress 会自动添加 base
    ],
    
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '首页', link: '/' },    // ✅ 正确
          { text: '关于', link: '/about' } // ✅ 正确
        ]
      }
    ]
  }
})

