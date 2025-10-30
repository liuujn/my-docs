<!-- .vitepress/components/Comment.vue -->
<template>
  <div id="comment" class="comments">
    <Giscus
      v-if="isMounted"
     
      repo="liuujn/my-docs"                 
      repo-id="R_kgDOQG6a2Q"
      category="General"
      category-id="DIC_kwDOQG6a2c4Cw9vz"
      mapping="pathname" url  根据路径映射评论
      strict="1"  严格模式
      reactions-enabled="1"
      emit-metadata="0"
      input-position="bottom"            
      theme="preferred_color_scheme"
      lang="zh-CN"
      loading="lazy"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Giscus from '@giscus/vue'

const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})
</script>

<style scoped>
.comments {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}
</style>