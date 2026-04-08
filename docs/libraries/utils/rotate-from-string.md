```yaml
title: Iconify Utils 中的 rotateFromString()
types:
  IconCustomisations: './icon-customisations.md'
```

# rotateFromString()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]rotateFromString()` 用于清理用户传入的各种可能的旋转值，并将其转换为 `[type]IconCustomisations` 类型中有效的 `[prop]rotate` 属性值。

## 用法

该函数包含以下参数：

- `[prop]value`，`[type]string`。要解析的值。
- `[prop]defaultValue`，`[type]number`。当 `[prop]value` 无法解析时返回的值。

函数返回 `[type]number` 类型的值，范围在 `[num]0` 到 `[num]3` 之间。

## 示例

```yaml
src: libraries/utils/rotate-from-string.ts
title: 'demo.ts'
extra:
  - src: libraries/utils/rotate-from-string.txt
    title: 'Result:'
```
