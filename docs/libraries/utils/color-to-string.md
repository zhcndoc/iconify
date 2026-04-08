```yaml
title: Iconify Utils 中的 colorToString()
types:
  Color: './color.md'
functions:
  stringToColor: './string-to-color.md'
```

# colorToString()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]colorToString()` 将 `[type]Color` 对象转换为 `[type]string`。

它是 `[func]stringToColor()` 的反向操作。

使用 `[func]stringToColor()` 将颜色从字符串转换，再使用此函数转回字符串，可用于验证和清理颜色字符串。

## 用法

该函数包含一个参数：

- `[prop]color`，`[type]Color`。要转换的颜色对象。

函数返回 `[type]string`。

## 示例

```yaml
src: libraries/utils/color-to-string.ts
title: 'demo.ts'
```
