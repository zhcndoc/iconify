```yaml
title: 'Iconify Utils 代码示例：导出 SVG'
functions:
  getIconData: '../get-icon-data.md'
  iconToSVG: '../icon-to-svg.md'
  replaceIDs: '../replace-ids.md'
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
```

# 使用 Iconify Utils 导出 SVG

本教程是 [Iconify Utils 代码示例](./index.md) 的一部分。

## 导出 SVG

这是一个使用 Iconify Utils 从图标数据生成 SVG 的示例：

```yaml
src: libraries/utils/svg-from-icon.ts
title: 'demo.ts'
```

## 函数

此代码示例中使用的函数：

- `[func]iconToSVG()` 用于生成 SVG 的属性和 HTML。
- `[func]replaceIDs()` 用于创建唯一 ID，尽管在此示例中已被注释掉。如果您要将输出嵌入到 HTML 中，请使用它。

## 来源

对于图标数据源，本示例使用了硬编码的 `[type]IconifyIcon` 数据。

您可以从 [拆分图标集包](/docs/icons/icons.md) 中导入单个图标。

## 输出

本示例将 SVG 输出到控制台。

如果您需要将其写入文件，请使用文件系统函数，例如 `[func]writeFileSync()` 或其异步版本之一。
