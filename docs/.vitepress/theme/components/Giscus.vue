<template>
  <div ref="giscusContainer" class="giscus"></div>
</template>

<script>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'

export default {
  name: 'Giscus',
  setup() {
    const route = useRoute()
    const giscusContainer = ref(null)
    
    const loadGiscus = () => {
      if (!giscusContainer.value) return
      
      giscusContainer.value.innerHTML = ''

      const script = document.createElement('script')
      script.src = 'https://giscus.app/client.js'
      script.setAttribute('data-repo', 'liuujn/my-docs')
      script.setAttribute('data-repo-id', 'R_kgDOQG6a2Q')
      script.setAttribute('data-category', 'General')
      script.setAttribute('data-category-id', 'DIC_kwDOQG6a2c4Cw9vz')
      script.setAttribute('data-mapping', 'url')  // 改为 url，包含完整URL
      script.setAttribute('data-strict', '1')   // 严格模式 每个页面只有自己的评论
      script.setAttribute('data-reactions-enabled', '1')
      script.setAttribute('data-emit-metadata', '0')
      script.setAttribute('data-input-position', 'bottom')
      script.setAttribute('data-theme', 'preferred_color_scheme')
      script.setAttribute('data-lang', 'zh-CN')
      script.setAttribute('crossorigin', 'anonymous')
      script.async = true

      giscusContainer.value.appendChild(script)
    }

    onMounted(() => {
      loadGiscus()
    })

    // 监听路由变化（包括hash变化）
    watch(() => route.fullPath, () => {
      setTimeout(loadGiscus, 100)
    })

    return {
      giscusContainer
    }
  }
}
</script>