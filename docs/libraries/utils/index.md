```yaml
title: Iconify Utils
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
```

# Iconify Utils

Iconify Utils 是一组可复用的函数，供各类 Iconify 图标组件及相关包使用：

- 解析 `[type]IconifyJSON` 格式的 Iconify 图标集。
- 将 `[type]IconifyIcon` 格式（可从图标集中提取）的图标导出为 SVG。
- SVG 基础解析器。
- 解析并验证图标名称。
- 解析并验证基础颜色。
- 解析表情符号序列，生成用于在文本中查找表情符号的正则表达式。

该库采用 TypeScript 编写，提供适用于现代开发的 ES 模块，以及适用于旧版脚本的 CommonJS 模块。

## 安装

要安装该库，请运行：

```sh
npm install @iconify/utils --save
```

## 示例

下方每个函数的文档均包含代码示例。

此外，[还有几个针对特定常用任务的更完整代码示例](./examples/index.md)，可帮助您了解应使用哪些函数。

## 函数

`include libraries/utils/functions-list`

## 高级用法 {#advanced}

Iconify Utils 仅能对 `[type]IconifyJSON` 和 `[type]IconifyIcon` 数据进行基础解析。它并非用于处理更复杂的内容。

对于更复杂的需求，例如导入图标、验证图标代码、更改调色板、清理以及导出为各种格式，请参阅 [Iconify Tools 包](../tools/index.md)。
