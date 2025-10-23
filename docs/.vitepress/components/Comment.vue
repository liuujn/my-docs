<!-- .vitepress/components/Comment.vue -->
<template>
  <div id="comment" class="comments">
    <Giscus
      v-if="isMounted"
      repo="liuujn/my-docs"                 
      repo-id="R_kgDOQG6a2Q"
      category="Announcements"
      category-id="DIC_bMDQ6b2c4Cw9vy"
      mapping="pathname"
      strict="0"
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