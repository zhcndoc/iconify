```yaml
title: "Iconify for React 函数：setCustomIconLoader 和 setCustomIconsLoader"
types:
  IconifyJSON: "../../types/iconify-json.md"
  IconifyIcon: "../../types/iconify-icon.md"
functions:
  loadIcon: "./load-icon.md"
```

# 自定义图标加载器

本教程是 [Iconify for React 教程](./index.md) 的一部分。

`include icon-components/functions/set-loaders/intro`

## 用法

`include icon-components/functions/set-loaders/props`

## 示例

```yaml
src: icon-components/common/set-loader.js
```

请确保在渲染任何图标之前设置好加载器，否则组件可能会尝试从 API 加载图标并导致渲染失败。
