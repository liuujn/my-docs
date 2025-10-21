# 欢迎使用 VitePress

这是你的第一个 Markdown 页面！

- 支持代码高亮
- 支持表格、列表、图片等


```js
console.log('Hello VitePress!')
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

const adults = users.filter(user => user.age >= 18);
console.log(adults);
```

| 状态 | 图标 | 说明 |
|:----:|:----:|------|
| 完成 | &#x2705; | 任务已完成 |
| 进行中 | &#x1f504; | 正在处理 |
| 待处理 | &#x23f3; | 等待开始 |
| 错误 | &#x274c; | 出现问题 |
| 警告 | &#x26a0;&#xfe0f; | 需要注意 |
<UserTable />
[去关于页](./about.html)
<script setup>
import UserTable from './UserTable.vue'
</script>