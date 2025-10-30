// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Giscus from './components/Giscus.vue'
  
export default {
  extends: DefaultTheme,
 enhanceApp({ app }) {
    // 注册 Element Plus
    app.use(ElementPlus)
    // 注册 Giscus 组件
    app.component('Giscus', Giscus)
  }

}