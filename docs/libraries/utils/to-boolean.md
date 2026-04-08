```yaml
title: Iconify Utils 中的 toBoolean()
types:
  IconCustomisations: './icon-customisations.md'
```

# toBoolean()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]toBoolean()` 将字符串转换为布尔值。它用于解析各种可能的组件属性值，以便在 `[type]IconCustomisations` 属性中使用它们。

## 用法

该函数包含以下参数：

- `[prop]name`，`[type]string`。属性名称。
- `[prop]value`，`[type]unknown`。要解析的值。
- `[prop]defaultValue`，`[type]boolean`。当 `[prop]value` 无法解析时返回的值。

函数返回 `[type]boolean` 值。

## 示例

```yaml
src: libraries/utils/to-boolean.ts
title: 'demo.ts'
extra:
  - src: libraries/utils/to-boolean.txt
    title: 'Result:'
```
