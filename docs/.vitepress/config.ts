import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  base: '/my-docs/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/my-docs/' },
      { text: '关于', link: '/my-docs/about' }
    ]
  }
})

