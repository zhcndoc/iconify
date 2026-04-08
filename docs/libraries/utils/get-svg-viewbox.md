```yaml
title: Iconify Utils 中的 getSVGViewBox() 和 SVGViewBox
```

# getSVGViewBox() 和 SVGViewBox 类型

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]getSVGViewBox()` 是一个辅助函数，用于解析 `[prop]viewBox` 属性值。

结果由 `[type]SVGViewBox` 类型表示，该类型在 Iconify Utils 的多个函数中使用。

## 用法

该函数包含以下参数：

- `[prop]value`，`[type]string` 类型。属性值。

函数返回包含已解析 viewBox 值的 `[type]SVGViewBox`，出错时返回 `[type]undefined`。

函数会验证数字，以确保值是有效的数字且恰好包含 4 个数字。验证失败时，将返回 `[type]undefined`。 

## SVGViewBox 类型

类型 `[type]SVGViewBox` 是一个包含四个数字的数组：
- x（或 left）
- y（或 top）
- 宽度
- 高度

## 示例

```yaml
src: libraries/utils/get-svg-viewbox.ts
title: 'usage.ts'
extra:
  - src: libraries/utils/get-svg-viewbox.json
    title: 'Result:'
```

## 转换为字符串

要从 `[type]SVGViewBox` 获取 `[prop]viewBox` 属性的字符串形式，请使用 `[func]join` 函数：

```js
const value = viewBox.join(' ');
```
