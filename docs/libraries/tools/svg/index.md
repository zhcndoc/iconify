```yaml
title: SVG 类
types:
  IconSet: "../icon-set/index.md"
  IconifyIcon: "/docs/types/iconify-icon.md"
functions:
  cleanupSVG: "../icon/cleanup.md"
  runSVGO: "../icon/svgo.md"
```

# SVG 类

`[type]SVG` 类表示一个图标。它在 [Iconify Tools](../index.md) 中用于处理图标内容的函数。

## 用法

要创建实例，请使用以下代码：

```ts
import { SVG } from "@iconify/tools";

const svg = new SVG(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 6v12l10-6z" fill="currentColor"/></svg>'
);
```

如果你正在处理图标集，请使用 `[type]IconSet` 实例的 `[func]toSVG()` 函数来获取 `[type]SVG` 实例：

```ts
const svg = iconSet("home");
if (!svg) {
  throw new Error('Icon "home" is not available or invalid');
}
```

## 属性

`[type]SVG` 实例包含多个属性，所有属性均在实例创建时初始化：

- `[prop]viewBox`，`[type]ViewBox`。图标的 `[attr]viewBox`。它是一个包含数值属性 `[prop]left`、`[prop]top`、`[prop]width` 和 `[prop]height` 的简单对象。属性 `[prop]left` 和 `[prop]top` 是可选的，默认值为 `[num]0`。
- `[prop]$svg` 是 SVG 的根元素。

## 方法

提供以下方法：

- `[func]load(content)` 替换图标内容。这与创建新的 `[type]SVG` 实例相同，但它会修改当前实例而不是创建新实例。
- `[func]toString()` 将图标导出为字符串。
- `[func]toMinifiedString()` 将图标导出为字符串，但不包含空白字符。
- `[func]toPrettyString()` 将图标导出为字符串，包含额外的缩进和换行以提高可读性。
- `[func]getBody()` 将图标内容导出为字符串（不包含 `[tag]svg` 标签的图标）。
- `[func]getIcon()` 将图标导出为 `[type]IconifyIcon` 对象。

## 验证与清理图标

遗憾的是，许多编辑器会在 SVG 文件中留下大量冗余数据，有时会使图标文件大小增加数倍。

SVG 文件还可能包含脚本和指向外部资源的链接。

这就是为什么在加载图标后，应对其进行验证和清理。请参阅 `[func]cleanupSVG()` 函数。

## 优化图标

清理过程非常基础，仅执行最基本的操作以去除不良内容。
然而，图标通常包含不必要或未使用的元素和属性。

在导出图标之前，你需要对其进行适当的修复。该过程可能包括：

- 修正调色板。
- 缩放图标。
- 优化图标。

请参阅 [图标操作函数](../icon/index.md)。
