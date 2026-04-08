```yaml
title: 'Iconify Utils Code Examples: Export SVG'
functions:
  parseIconSet: '../parse-icon-set.md'
  iconToSVG: '../icon-to-svg.md'
  replaceIDs: '../replace-ids.md'
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
```

# 使用 Iconify Utils 导出 SVG

本教程属于 [Iconify Utils 代码示例](./index.md) 的一部分。

## 导出 SVG

以下是使用 Iconify Utils 从图标集生成 SVG 的示例：

```yaml
src: libraries/utils/svgs-from-set.ts
title: 'demo.ts'
```

## 函数

本代码示例中使用的函数：

- `[func]parseIconSet()` 用于解析图标集，并为每个图标调用回调函数。
- `[func]iconToSVG()` 用于生成 SVG 的属性和 HTML。
- `[func]replaceIDs()` 用于创建唯一 ID，尽管在此示例中已被注释。若需将输出嵌入 HTML 中，请使用此函数。

## 来源

关于图标集来源，本示例使用 `[type]IconifyJSON` 格式的 `[file].json` 文件。

你也可以使用[独立图标集包](/docs/icons/json.md)或[完整图标集包](/docs/icons/all.md)。将 `[var]source` 变量指向这些包中的 `[file].json` 文件即可。

## 输出

本示例将所有 SVG 写入文件系统。更改 `[var]target` 变量以指向其他目录。
