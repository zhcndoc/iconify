```yaml
title: 如何使用图标
replacements:
  - code: "60,000"
    value: "${counters.icons}"
  - code: "60k"
    value: "${counters.icons-short}"
```

# 如何使用图标

如何在项目中使用图标？

Iconify 生态系统为开发者和设计师提供了多种使用图标的方式。

## HTML {#html}

在 HTML 中使用图标，有几种可行的方案：

`include usage/options/html`

### SVG + CSS {#svg-css}

SVG + CSS 是首选方案，因为它：

- 减小 HTML 体积。
- 在 CSS 中缓存图标。
- 让你能够充分利用 CSS 的强大功能来操控图标。

然而，由于复杂性和浏览器支持不佳，该实现仅适用于有限数量的框架。

请参阅[如何将图标用作 SVG + CSS](./svg-css/index.md)。

### CSS 中的 SVG {#css}

如何在 CSS 中使用图标：

- 在 CSS 中将图标添加为背景或遮罩图像。
- 在 HTML 中使用 `[tag]span` 元素来渲染它。

将图标用作背景图像非常适合具有固定配色的图标，例如表情符号。

将图标用作遮罩图像，并结合将背景颜色设置为 `[prop]currentColor`，可以在 CSS 中使用单色图标。要更改图标颜色，只需更改文本颜色即可。

展示图标用作背景和遮罩图像的示例（悬停查看颜色变化）：

```yaml
include: usage/css-demo
```

请参阅[如何在 CSS 中使用图标](./css/index.md)，了解各种可轻松将图标添加到 CSS 的工具和插件。

### HTML 中的 SVG {#svg}

图标可以作为 `[tag]svg` 元素嵌入到 HTML 中：

```yaml
src: usage/sample.svg
copy: false
```

请参阅[如何将 SVG 添加到 HTML](./svg/index.md)，了解各种可轻松将图标添加到 HTML 的工具和组件。

### 按需加载图标

Iconify 生态系统有一个独特的功能：[Iconify API](/docs/api/index.md)。

各种图标组件使用它来[按需加载图标数据](/docs/api/icon-data.md)。Iconify 图标组件仅在运行时加载当前页面访客正在查看的图标数据，而不是将图标打包在一起。

Iconify 图标组件非常适合主题或网站定制器、可定制的管理面板或任何类似项目等复杂项目，在这些项目中图标可以由用户自定义。

Iconify 图标组件非常易于使用。开发者只需指定一个图标名称：

```yaml
src: icon-components/icon/usage.html
copy: false
```

请参阅[如何使用 Iconify 图标组件](/docs/icon-components/index.md)。

## 设计

对于设计师，Iconify 生态系统提供了几种在各种设计工具中轻松导入图标的方法。

`include usage/options/design`

### 浏览图标

您可以在以下任一网站上浏览和搜索超过 6 万个开源图标：

`include usage/options/websites`

找到您想使用的图标，选中它，将 SVG 复制到剪贴板，然后粘贴到您喜爱的设计工具中。

可能遇到的问题：

- 某些设计工具不支持 `[prop]currentColor`。在复制代码示例前，请将图标颜色设置为黑色。
- 几乎所有图像编辑软件都不支持 SVG 2 动画。带动画的图标导入时将不带动画，有时渲染效果会显得很奇怪。
