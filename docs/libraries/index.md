```yaml
title: 开发者工具
types:
  IconifyJSON: '/docs/types/iconify-json.md'
```

# 开发者工具

Iconify 提供了多个库，用于帮助转换图标、操作图标集以及生成图标。

可用库：

## Utils

[Iconify Utils](./utils/index.md) 是一组可复用的函数，供图标组件和其他包使用。
其主要目的是读取 `[type]IconifyJSON` 图标集并从中提取数据。

Iconify Utils 包包含以下功能：

- 读取 `[type]IconifyJSON` 图标集。
- 提取图标子集或单个图标。
- 生成 SVG。
- 验证图标组件使用的图标名称，例如 `[icon]mdi:home`。

此外，它还包含用于以下功能的函数：

- 解析和验证颜色。这可用于图标选择器中的颜色输入。

该包可在任何环境中运行：Node.js、浏览器、Deno 以及封闭的 JavaScript 环境。

## Tools

[Iconify Tools](./tools/index.md) 是一个大型包，其主要目的是从各种来源检索图标，
验证并清理它们，然后生成 `[type]IconifyJSON` 图标集以及各种 NPM 包。

Iconify Tools 包包含以下功能：

- 从 SVG 图标集、Figma 文档中导入图标。
- 验证图标、清理内容、优化图标。
- 将图标导出为 `[type]IconifyJSON` 图标集和多个 NPM 包。

它用于维护现有的开源图标集。

该包仅设计用于在 Node.js 中运行。无法在浏览器中使用。
