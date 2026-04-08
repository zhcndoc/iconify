```yaml
title: 在 SVG 中更改颜色
types:
  SVG: '../svg/index.md'
  IconSet: '../icon-set/index.md'
  Color: '../../utils/color.md'
functions:
  stringToColor: '../../utils/string-to-color.md'
  colorToString: '../../utils/color-to-string.md'
```

# 解析 SVG 中的颜色

此函数属于 [Iconify Tools](../index.md) 中的 [图标操作函数](./index.md) 的一部分。

函数 `[func]parseColors()` 用于解析 SVG 中的颜色。

它可以：

- 查找所有颜色。
- 替换颜色。
- 添加缺失的默认颜色。

该函数会解析以下位置的颜色：

- 样式表。
- 内联样式。
- 形状，包括渐变和滤镜。
- 对颜色属性进行动画处理的 SVG 动画。

该函数不会解析以下位置的颜色：

- 遮罩。

## 用法

该函数包含以下参数：

- `[prop]svg`，`[type]SVG`。图标实例。
- `[prop]options`，`[type]object`。选项。

函数返回颜色数组。

## 颜色

回调函数中使用以及函数返回的颜色可以是以下两种类型：

- `[type]Color` 对象，与 [Iconify Utils](../../utils/index.md) 中的相同。
- `[type]string`。如果颜色无法解析，则值为字符串。

## 选项

`[prop]options` 对象包含以下属性：

- `[prop]defaultColor`，`[type]Color | string`。添加到使用系统默认颜色的形状上的默认颜色。见下文。
- `[prop]callback`，`[type]function`。为每种颜色调用的回调函数。见下文。

### 默认颜色

某些图标使用系统颜色。例如：

```xml
<svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" width="1200" height="400">
    <path d="M300 200H150A150 150 0 10300 50z"/>
</svg>
```

在该图标中，路径使用了默认填充。在 Iconify 中，所有图标都应使用由 `[prop]color` 属性设置的颜色，这意味着形状应使用 `[str]currentColor` 进行填充。

如果设置了 `[prop]defaultColor` 选项，解析器将自动为使用默认颜色的形状设置颜色。

示例：

```yaml
src: libraries/tools/icon/color-default.ts
title: 'default-color.ts'
extra:
  - src: libraries/tools/icon/color-default.svg
    title: 'Result:'
```

### 替换颜色

通过 `[prop]callback` 选项，您可以替换颜色。

回调函数包含以下参数：

- `[prop]attr`，`[type]string`。使用颜色的属性，例如 `[str]fill` 或 `[str]stroke`。
- `[prop]colorStr`，`[type]string`。字符串形式的颜色值。
- `[prop]color`，`[type]Color | null`。解析后的颜色值。如果颜色可解析，回调将收到 `[type]Color` 值。如果颜色不可解析，回调将收到 `[type]null` 值。
- `[prop]tagName`，`[type]string`。可选参数。找到颜色的标签名称。如果在样式表中找到颜色，该参数将为 `[type]undefined`。

回调函数应返回：

- `[type]Color` 或 `[type]string` 以设置新颜色。如果您不想更改颜色，请返回传递给回调的颜色（`[prop]colorStr` 或非空的 `[prop]color` 对象）。
- `[str]remove` 以移除当前元素。这用于移除某些编辑器留下的白色背景矩形等内容。
- `[str]unset` 以移除颜色。

示例

```yaml
src: libraries/tools/icon/colors.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon/colors.json
    title: 'Result:'
```
