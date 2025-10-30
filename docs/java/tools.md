---
title: Java开发常用工具
---

## 核心工具库
### Apache Commons 系列
```
<!-- Lang - 字符串、数组等工具 -->
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-lang3</artifactId>
    <version>3.13.0</version>
</dependency>

<!-- Collections - 集合工具 -->
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-collections4</artifactId>
    <version>4.4</version>
</dependency>

<!-- IO - 文件操作 -->
<dependency>
    <groupId>commons-io</groupId>
    <artifactId>commons-io</artifactId>
    <version>2.14.0</version>
</dependency>

<!-- Codec - 编码解码 -->
<dependency>
    <groupId>commons-codec</groupId>
    <artifactId>commons-codec</artifactId>
    <version>1.16.0</version>
</dependency>
```
### Google Guava
```
<dependency>
    <groupId>com.google.guava</groupId>
    <artifactId>guava</artifactId>
    <version>32.1.2-jre</version>
</dependency>
```
### Hutool
```
<dependency>
    <groupId>cn.hutool</groupId>
    <artifactId>hutool-all</artifactId>
    <version>5.8.26</version>
</dependency>
```
学习链接 https://blog.csdn.net/Bingxuebojue/article/details/120477946
## JSON 处理
### Jackson
导入依赖
```
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.15.2</version>
</dependency>
```
使用示例
```
ObjectMapper mapper = new ObjectMapper();

// 对象转JSON
String json = mapper.writeValueAsString(object);

// JSON转对象
User user = mapper.readValue(json, User.class);

// 处理日期
mapper.registerModule(new JavaTimeModule());
mapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
```
### Fastjson
```
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>fastjson</artifactId>
    <version>2.0.40</version>
</dependency>
```
### Gson
```
<dependency>
    <groupId>com.google.code.gson</groupId>
    <artifactId>gson</artifactId>
    <version>2.10.1</version>
</dependency>
```

## 对象映射实用工具
### MapStruct（对象映射）
```
<dependency>
    <groupId>org.mapstruct</groupId>
    <artifactId>mapstruct</artifactId>
    <version>1.5.5.Final</version>
</dependency>
```
## 二维码生成工具
- ZXing（Zebra Crossing）：Google 出品，经典老牌，稳定可靠。
- QrCode（来自 com.google.zxing.qrcode）：轻量级，适合快速开发。
- QRCodeUtils（封装工具类）：自己撸一点封装，方便复用。
### ZXing + 自定义封装
引入依赖
```
<dependency>
  <groupId>com.google.zxing</groupId>
  <artifactId>core</artifactId>
  <version>3.5.2</version>
</dependency>
<dependency>
  <groupId>com.google.zxing</groupId>
  <artifactId>javase</artifactId>
  <version>3.5.2</version>
</dependency>
```
封装一个二维码工具类
```
//封装一个二维码工具类 QrCodeUtils.java
package com.moyu.qr;
import com.google.zxing.*;
import com.google.zxing.client.j2se.MatrixToImageConfig;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;

/**
 *  Java 
 * 通用二维码生成工具类
 */
public class QrCodeUtils {

    /**
     * 生成普通二维码并保存为图片文件
     *
     * @param content  二维码内容
     * @param filePath 保存路径（绝对路径）
     * @param width    宽度
     * @param height   高度
     * @throws Exception
     */
    public static void generateSimpleQrCode(String content, String filePath, int width, int height) throws Exception {
        // 编码参数设置
        Map<EncodeHintType, Object> hints = new HashMap<>();
        hints.put(EncodeHintType.CHARACTER_SET, "UTF-8"); // 编码类型
        hints.put(EncodeHintType.MARGIN, 1);              // 边距

        BitMatrix bitMatrix = new MultiFormatWriter().encode(
                content,
                BarcodeFormat.QR_CODE,
                width,
                height,
                hints
        );

        Path path = new File(filePath).toPath();
        MatrixToImageWriter.writeToPath(bitMatrix, "PNG", path);
    }

    /**
     * 生成带 Logo 的二维码
     *
     * @param content   二维码内容
     * @param logoPath  logo 图片路径
     * @param outputPath 输出二维码路径
     */
    public static void generateQrCodeWithLogo(String content, String logoPath, String outputPath) throws Exception {
        int width = 300;
        int height = 300;

        Map<EncodeHintType, Object> hints = new HashMap<>();
        hints.put(EncodeHintType.CHARACTER_SET, "UTF-8");
        hints.put(EncodeHintType.MARGIN, 1);
        hints.put(EncodeHintType.ERROR_CORRECTION, ErrorCorrectionLevel.H); // 容错率高，避免 logo 遮挡

        BitMatrix bitMatrix = new MultiFormatWriter().encode(
                content, BarcodeFormat.QR_CODE, width, height, hints
        );

        // 生成二维码图像
        BufferedImage qrImage = MatrixToImageWriter.toBufferedImage(bitMatrix, new MatrixToImageConfig());

        // 加载 logo 图片
        BufferedImage logo = ImageIO.read(new File(logoPath));

        int logoWidth = qrImage.getWidth() / 5;
        int logoHeight = qrImage.getHeight() / 5;

        // 计算 logo 放置位置（居中）
        int x = (qrImage.getWidth() - logoWidth) / 2;
        int y = (qrImage.getHeight() - logoHeight) / 2;

        // 合并图片
        Graphics2D g = qrImage.createGraphics();
        g.drawImage(logo, x, y, logoWidth, logoHeight, null);
        g.dispose();

        ImageIO.write(qrImage, "PNG", new File(outputPath));
    }
}
```
<GenerateQrCode/>

## 富文本编辑器
推荐 https://juejin.cn/post/7434373084747333658#heading-1
<richTextEditor/>

## 获取各种常用路径
### 获取项目根路径
```
// 获取项目根路径（编译后的 classes 目录）
String resource = new ClassPathResource("").getFile().getAbsolutePath();
```
### 获取静态资源路径
```
private final ResourceLoader resourceLoader;
// 获取 classpath 路径
String resource = resourceLoader.getResource("classpath:").getFile().getAbsolutePath();
// 获取静态资源目录路径
String resource = resourceLoader.getResource("classpath:static/").getFile().getAbsolutePath() ;
```
### 获取上传文件路径
```
private String uploadDir="E:/upload"; 
// 相对路径转绝对路径
String absolutePath = Paths.get(uploadDir).toAbsolutePath().toString();
```
### 获取系统路径
```
// 获取用户主目录
String property = System.getProperty("user.home");
// 项目根路径
String property = System.getProperty("user.dir");
```
###  获取请求URL
```
// 获取完整的请求URL（包含参数）
String fullUrl = request.getRequestURL().toString(); 
// 示例：http://localhost:8080/getCode
// 获取基础URL（去掉请求路径）
String baseUrl = request.getRequestURL().toString().replace(request.getRequestURI(), "");
// 示例：http://localhost:8080
```
请求示例
```
GET请求：http://localhost:8080/myapp/api/getCode?content=hello&type=1
```

| 方法 | 返回值 | 说明 |
| :--- | :--- | :--- |
| `request.getRequestURL()` | `http://localhost:8080/myapp/api/getCode` | 完整的URL（不含查询参数） |
| `request.getRequestURI()` | `/myapp/api/getCode` | URI路径（包含上下文路径） |
| `request.getContextPath()` | `/myapp` | 应用上下文路径 |
| `request.getServletPath()` | `/api/getCode` | Servlet映射路径 |
| `request.getQueryString()` | `content=hello&type=1` | 查询参数字符串 |
## 评论
<Giscus />

<script setup>
 import Comment from '../.vitepress/components/Comment.vue'
 import richTextEditor from '../.vitepress/components/rich-text-editor.vue'
 import GenerateQrCode from '../.vitepress/components/generate-qr-code.vue'
</script>