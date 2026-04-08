```yaml
title: stringToIcon() in Iconify Utils
types:
  IconifyIconName: './icon-name.md'
functions:
  validateIconName: './validate-icon.md'
```

# stringToIcon()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]stringToIcon()` 将图标名称字符串转换为 `[type]IconifyIconName` 对象。

## 用法

函数具有以下参数：

- `[prop]value`，`[type]string`。图标名称。
- `[prop]validate`，`[type]boolean`。可选。如果为 `true`，将使用 `[func]validateIconName()` 验证图标名称。
- `[prop]allowSimpleName`，`[type]boolean`。可选。如果为 `true`，则不带前缀的简单名称将被视为有效。
- `[prop]provider`，`[type]string`。可选。如果缺少提供商，则添加到图标名称中的 API 提供商。

函数在成功时返回类型为 `[type]IconifyIconName` 的图标名称，失败时返回 `[type]null`。

## 示例

```yaml
src: libraries/utils/string-to-icon.ts
title: 'examples.ts'
```
