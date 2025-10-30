---
# docs/java/index.md
title: Java首页

---

# Java教程首页

这里是Java教程的首页内容...
## 如何上传项目到GitHub Pages

### 第一次提交并推送到 GitHub 仓库和 GitHub Pages

#### 1. 初始化 git 仓库

```shell
git init
```

#### 2. 添加所有文件到暂存区

```shell
git add .
```

#### 3. 提交到本地仓库

```shell
git commit -m "init: first commit"
```

#### 4. 在 GitHub 上新建一个仓库（如 my-docs）

- 打开 [GitHub 新建仓库页面](https://github.com/new)
- 填写仓库名 `my-docs`，点击创建

#### 5. 添加远程仓库地址

```shell
git remote add origin https://github.com/你的用户名/my-docs.git
```

#### 6. 推送到 GitHub

```shell
git push -u origin master
```
> 如果你的主分支叫 `main`，请用 `git push -u origin main`

#### 7. 构建静态页面

```shell
npm run build
```

#### 8. 部署到 GitHub Pages

```shell
npm install -g gh-pages
gh-pages -d docs/.vitepress/dist
```

#### 9. 访问你的 GitHub Pages 网站

浏览器访问：

```
https://你的用户名.github.io/my-docs/
```

### 更新内容后重新提交并推送到 GitHub

#### 1. 保存你修改的文件

确保你已经保存了所有需要更新的文件。

#### 2. 添加修改到暂存区

```shell
git add .
```

#### 3. 提交更新到本地仓库

```shell
git commit -m "feat: 更新了内容"
```

#### 4. 推送到 GitHub

```shell
git push
```

#### 5. 重新构建静态页面

```shell
npm run build
```

#### 6. 重新部署到 GitHub Pages

```shell
gh-pages -d docs/.vitepress/dist
```

---



## 评论
<Giscus />
<script setup>
 import Comment from '../.vitepress/components/Comment.vue'
 import richTextEditor from '../.vitepress/components/rich-text-editor.vue'
 import GenerateQrCode from '../.vitepress/components/generate-qr-code.vue'
</script>