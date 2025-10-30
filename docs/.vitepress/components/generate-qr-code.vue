<template>
    <div>
        <el-input
            v-model="content"
            style="width: 180px;margin-left: 8px;"
            :rows="1"
            type="textarea"
            placeholder="请输入二维码内容"
        />
        <el-button type="success" style="margin-left: 8px;" @click="generateQRCode">生成二维码</el-button>  
        
        <!-- 显示最新的二维码，添加时间戳防止缓存 -->
        <div v-if="imageUrl" style="margin-top: 20px;">
            <img alt="二维码图片" :src="imageUrl + '?t=' + timestamp" style="max-width: 300px;" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'

const content = ref('')
const imageUrl = ref('')
const timestamp = ref(Date.now())

const generateQRCode = async () => {
    if (!content.value.trim()) {
        alert('请输入二维码内容')
        return
    }

    try {
        // 生成新的时间戳，强制刷新图片
        timestamp.value = Date.now()
        
        const response = await axios.get('http://localhost:8080/getCode', {
            params: {
                content: content.value,
                // 添加时间戳参数，防止浏览器缓存
                t: timestamp.value
            }
        })
       
        // 直接更新图片URL，会替换掉之前的二维码
        imageUrl.value = response.data
        
    } catch (error) {
        console.error('生成二维码失败:', error)
        alert('生成二维码失败，请重试')
    }
}
</script>