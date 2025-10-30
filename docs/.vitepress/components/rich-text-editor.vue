<script setup>
  import Editor from '@tinymce/tinymce-vue'
</script>

<template>
  <main id="sample">
    <Editor
      api-key="ivcpupp991egmmcndiqcw0e47g0p5v4bbxhuffijmz4blsn0"
      :init="{
        language: 'zh_CN',
        language_url: 'https://cdn.tiny.cloud/1/ivcpupp991egmmcndiqcw0e47g0p5v4bbxhuffijmz4blsn0/tinymce/6/langs/zh_CN.js',
        toolbar_mode: 'sliding',
        plugins: [
          // Core editing features
          'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
          // Your account includes a free trial of TinyMCE premium features
          // Try the most popular premium features until Nov 12, 2025:
          'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'advtemplate', 'ai', 'uploadcare', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
        ],
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: '作者名称',
        mergetags_list: [
          { value: 'First.Name', title: '姓名' },
          { value: 'Email', title: '邮箱' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('查看文档以实现AI助手')),
        uploadcare_public_key: '5b4fbfe7be7445614940',
      }"
      initial-value="欢迎使用 TinyMCE!"
    />
  </main>
</template>