```yaml
title: Iconify Utils 中的 validateIconName()
types:
  IconifyIconName: './icon-name.md'
```

# validateIconName()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]validateIconName()` 用于验证图标名称。

## 用法

该函数包含以下参数：

- `[prop]name`，`[type]IconifyIconName | null`。图标名称。
- `[prop]allowSimpleName`，`[type]boolean`。可选参数。如果为 `true`，则不包含提供商和前缀的简单名称也被视为有效。

函数返回 `[type]boolean` 类型的值。

## 示例

```yaml
src: libraries/utils/validate-icon.ts
title: 'examples.ts'
```
