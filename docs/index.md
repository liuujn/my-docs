# 欢迎使用 VitePress

这是你的第一个 Markdown 页面！

## 功能特性

- ✅ 支持代码高亮
- ✅ 支持表格、列表、图片等
- ✅ 响应式设计

## 代码示例

```js
console.log('Hello VitePress!')

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
]

const adults = users.filter(user => user.age >= 18)
console.log(adults)
```

## 任务状态表格

| 状态 | 图标 | 说明 |
|:----:|:----:|------|
| 完成 | ✅ | 任务已完成 |
| 进行中 | 🔄 | 正在处理 |
| 待处理 | ⏳ | 等待开始 |
| 错误 | ❌ | 出现问题 |
| 警告 | ⚠️ | 需要注意 |

[去关于页](./about)
<UserTable/>
<script setup>
    import UserTable from '/UserTable.vue'
    import Comment from '.vitepress/components/Comment.vue'
</script>



<Comment />