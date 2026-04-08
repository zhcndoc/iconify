```yaml
title: 按需加载图标数据
types:
  IconifyJSON: '../types/iconify-json.md'
```

# 按需加载图标数据

[Iconify 图标组件](../icon-components/index.md) 的主要功能是能够按需加载图标数据。

开发者无需打包图标，只需将图标名称传递给图标组件，所用图标的数据将从 Iconify API 加载。这种方法具有以下优势：

- 仅加载页面上显示的图标。
- 易于使用。无需打包。
- UI 可配置，例如允许用户通过图标选择器选择图标。

## 流程

按需加载图标数据是如何工作的？

<icon-loading-process></icon-loading-process>

## 查询

要加载图标数据，请使用以下 API 查询：`[url]/{prefix}.json?icons={icons}`，其中：

- `[str]{prefix}` 是图标集前缀。若要请求多个图标集的图标，请为每个图标集发送单独的查询。
- `[str]{icons}` 是图标名称列表，以逗号分隔。

响应为 `[type]IconifyJSON` 对象。

```yaml
hint: /mdi.json?icons=account-box,account-cash,account,home&pretty=1
src: api/mdi.json
```

### 参数

查询包含一个必需参数：`[prop]icons`，如上所述。

此外还有可选参数：

- `[prop]pretty`，`[type]boolean` 类型。格式化响应，使其易于阅读，如上方示例所示。

### 错误响应

如果图标集不可用，服务器将返回 `[num]404` HTTP 错误。

缺失的图标将被添加到响应的 `[prop]not_found` 属性中。

## 类型

有关响应的完整说明，请参阅 `[type]IconifyJSON` 类型文档。

您可以从 `[npm]@iconify/types` 包中导入该类型。

## 限制

您无法在同一查询中请求多个图标集的数据。每个图标集需单独查询。

每次查询的图标数量没有限制，但请注意浏览器对 URL 长度有限制。[Iconify 图标组件](../icon-components/index.md) 将 URL 长度限制为 500 个字符。如果 URL 超过 500 个字符，应将 API 查询拆分为多个查询。

## 缓存

为了帮助浏览器缓存响应，建议查询使用相同的 URL。为实现这一点，请按字母顺序对图标名称进行排序，因此组件始终请求 `[url]?icons=bar,foo`，而不是 `[url]?icons=foo,bar` 或 `[url]?icons=bar,foo`。

此外，将响应缓存在 `[prop]localStorage` 中。

## 检查更新

要检查图标自上次以来是否已更新，无需再次检索图标。

使用 [`[url]/last-modified`](./last-modified.md) 查询。它返回图标集的 `[prop]lastModified` 属性，您可以将其与缓存响应中的值进行比较。
