```yaml
title: Iconify Utils 代码示例
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
```

# Iconify Utils 代码示例

Iconify Utils 中[每个函数的文档](../index.md)都包含代码示例。

然而，如何确定该查看哪个函数呢？以下是常见用例的代码示例。

## 导出图标集

导出整个图标集的示例：

- [将图标集导出为 SVG](./export-svgs-from-icon-set.md)。

## 导出单个 SVG

生成单个 SVG 文件的示例：

- [从图标集导出 SVG](./export-svg-from-icon-set.md)。
- [从图标数据导出 SVG](./export-svg-from-data.md)。

## 导出 CSS

将图标导出为 CSS 的示例：

- [为选定的图标生成 CSS](./generate-css.md)。

## 高级导入/导出 {#advanced}

Iconify Utils 是一个基础包，用于解析 `[type]IconifyJSON` 和 `[type]IconifyIcon` 数据。它并非为处理更复杂的功能而设计。

对于更复杂的功能，例如导入图标、验证图标代码、更改调色板、清理以及导出为各种格式，请参阅 [Iconify Tools 包](../../tools/index.md)。
