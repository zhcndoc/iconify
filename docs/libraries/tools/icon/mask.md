```yaml
title: 将 SVG 转换为遮罩
types:
  SVG: '../svg/index.md'
  IconSet: '../icon-set/index.md'
functions:
  #parseColors: './colors/parse.md'
```

# 将 SVG 转换为遮罩

此函数是 [Iconify Tools](../index.md) 中 [图标操作函数](./index.md) 的一部分。

函数 `[func]convertSVGToMask()` 将图标内容转换为 Alpha 遮罩，并遮罩一个与图标 `[prop]viewBox` 尺寸相同的矩形。

此函数适用于以下两种场景：
- 将包含多种颜色的图标转换为单色图标时，为不同颜色使用不同的深浅度。
- 修复设计不佳的图标时，该图标使用白色形状代替了透明部分。

## 遮罩的工作原理

当存在多个形状，且其中一些应为实心、一些应为透明时，遮罩可以提供帮助。
遮罩中的图像将被视为被遮罩形状的 Alpha 通道。

形状中的颜色将被视为 Alpha 通道：白色 (255) 的不透明度为 1，黑色 (0) 的不透明度为 0。其他颜色通过组合其红、绿、蓝通道并除以 255*3 来转换为 Alpha 通道。

例如，此图标包含多个不同颜色的形状（使用黑色背景以确保白色形状可见）：

<svg width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="background-color: black">
    <path d="M6.5 20C4.98 20 3.68333 19.4767 2.61 18.43C1.53667 17.3767 1 16.0933 1 14.58C1 13.28 1.39 12.12 2.17 11.1C2.95667 10.08 3.98333 9.43 5.25 9.15C5.67 7.61667 6.50333 6.37667 7.75 5.43C9.00333 4.47667 10.42 4 12 4C13.9533 4 15.6067 4.68 16.96 6.04C18.32 7.39333 19 9.04667 19 11C20.1533 11.1333 21.1067 11.6333 21.86 12.5C22.62 13.3533 23 14.3533 23 15.5C23 16.7533 22.5633 17.8167 21.69 18.69C20.8167 19.5633 19.7533 20 18.5 20" fill="white"/>
    <path d="M6.5 18H18.5C19.2 18 19.79 17.7567 20.27 17.27C20.7567 16.79 21 16.2 21 15.5C21 14.8 20.7567 14.21 20.27 13.73C19.79 13.2433 19.2 13 18.5 13H17V11C17 9.62 16.5133 8.44 15.54 7.46C14.5667 6.48667 13.3867 6 12 6C10.62 6 9.44 6.48667 8.46 7.46C7.48667 8.44 7 9.62 7 11H6.5C5.53333 11 4.71 11.3433 4.03 12.03C3.34333 12.71 3 13.5333 3 14.5C3 15.4667 3.34333 16.3 4.03 17C4.71 17.6667 5.53333 18 6.5 18Z" fill="#444"/>
    <circle cx="19" cy="19" r="5" fill="red"/>
    <path d="M18 16H20V18H22V20H20V22H18V20H16V18H18V16Z" fill="white"/>
</svg>

以下是将同一图标用作矩形遮罩，并使用各种颜色渲染的效果：

<svg width="192" height="48" viewBox="0 0 96 24" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <mask id="mask0">
            <path d="M6.5 20C4.98 20 3.68333 19.4767 2.61 18.43C1.53667 17.3767 1 16.0933 1 14.58C1 13.28 1.39 12.12 2.17 11.1C2.95667 10.08 3.98333 9.43 5.25 9.15C5.67 7.61667 6.50333 6.37667 7.75 5.43C9.00333 4.47667 10.42 4 12 4C13.9533 4 15.6067 4.68 16.96 6.04C18.32 7.39333 19 9.04667 19 11C20.1533 11.1333 21.1067 11.6333 21.86 12.5C22.62 13.3533 23 14.3533 23 15.5C23 16.7533 22.5633 17.8167 21.69 18.69C20.8167 19.5633 19.7533 20 18.5 20" fill="white"/>
            <path d="M6.5 18H18.5C19.2 18 19.79 17.7567 20.27 17.27C20.7567 16.79 21 16.2 21 15.5C21 14.8 20.7567 14.21 20.27 13.73C19.79 13.2433 19.2 13 18.5 13H17V11C17 9.62 16.5133 8.44 15.54 7.46C14.5667 6.48667 13.3867 6 12 6C10.62 6 9.44 6.48667 8.46 7.46C7.48667 8.44 7 9.62 7 11H6.5C5.53333 11 4.71 11.3433 4.03 12.03C3.34333 12.71 3 13.5333 3 14.5C3 15.4667 3.34333 16.3 4.03 17C4.71 17.6667 5.53333 18 6.5 18Z" fill="#444"/>
            <circle cx="19" cy="19" r="5" fill="red"/>
            <path d="M18 16H20V18H22V20H20V22H18V20H16V18H18V16Z" fill="white"/>
        </mask>
    </defs>
    <rect mask="url(#mask0)" width="24" height="24" fill="currentColor"/>
    <rect mask="url(#mask0)" width="24" height="24" fill="var(--hljs-inline-type)" transform="translate(24 0)" />
    <rect mask="url(#mask0)" width="24" height="24" fill="var(--hljs-string)" transform="translate(48 0)" />
    <rect mask="url(#mask0)" width="24" height="24" fill="var(--vp-c-text-2)" transform="translate(72 0)" />
</svg>

用于创建此示例的代码可在下方“示例”部分的“按原样转换”演示中找到。

## 用法

该函数具有以下参数：

- `[prop]svg`，`[type]SVG`。图标实例。
- `[prop]options`，`[type]object`。可选配置项。

函数在成功时返回 `true`，如果图标未转换为遮罩则返回 `false`。

### 返回 false 的情况

函数在什么情况下会无法将图标转换为遮罩？
- 如果图标包含未预期的颜色。请确保所有颜色都已通过 `[prop]solid`、`[prop]transparent` 和/或 `[prop]custom` 选项进行处理。
- 如果没有需要遮罩的内容（图标仅有一种颜色）且未启用 `[prop]force` 选项。请使用 `[func]parseColors` 来更改此类图标的颜色。

## 配置项

配置项是一个包含以下可选属性的对象：
- `[prop]id`，`[type]string`。遮罩 ID，默认值为 `[str]mask`。
- `[prop]force`，`[type]boolean`。如果启用，即使没有需要遮罩的内容，也会强制函数应用遮罩。
- `[prop]color`，`[type]string`。用于填充遮罩的颜色，默认值为 `[str]#000`。

要告知函数哪些颜色应被视为实心、透明或半透明，请使用以下选项：
- `[prop]solid`，`[type]string | string[] | function`。实心颜色：字符串、字符串数组或回调函数。
- `[prop]transparent`，`[type]string | string[] | function`。透明颜色：字符串、字符串数组或回调函数。
- `[prop]custom`，`[type]function`。回调函数，应为图标中找到的颜色返回遮罩颜色或不透明度。

默认情况下，黑色被视为实心，白色被视为透明（这与遮罩的工作原理相反，但正是大多数存在缺陷的图标的设计方式），图标中发现的所有其他颜色都会导致函数失败。

使用 `[prop]custom` 选项时，如果 `[prop]custom` 不处理未知颜色，您可能希望禁用 `[prop]solid` 和 `[prop]transparent` 选项的默认值。为此，请将它们设置为空数组。

### 实心与透明

`[prop]solid` 和 `[prop]transparent` 可以是：
- `[type]string`，例如 `[str]#fff`
- `[type]string[]`，例如 `[js]["#fff", "black"]`
- `[type]function`，接受颜色字符串作为参数，并返回 `true`（如果颜色应为实心/透明）或 `false`（如果颜色不应为实心/透明）

颜色值以及传递给回调的颜色始终为小写。因此，如果您的图标使用 `[str]#FFF`，请检查 `[str]#fff`。

### 自定义

当 `[prop]solid` 和 `[prop]transparent` 均返回 `false` 时，将使用 `[prop]custom` 属性。

它是一个包含 2 个参数的函数：
- 颜色，类型为 `[type]string`，小写形式，例如 `[str]#fff`。
- 颜色，类型为 `[type]Color` 实例。

函数可以返回：
- 颜色，类型为 `[type]string`，例如实心形状使用 `[str]#fff`，透明形状使用 `[str]#000`，半透明形状使用任何其他有效颜色。
- 不透明度，类型为 `[type]number`，介于 0 和 1 之间。函数会将回调返回的不透明度转换为灰度颜色。

`[prop]solid` 和 `[prop]transparent` 属性的默认值可能会干扰 `[prop]custom` 属性，因此请将它们设置为空数组或始终返回 `false` 的回调函数。

## 示例

以下示例展示了如何使用该函数。

### 修复黑/白

此示例修复了设计不佳的图标，这些图标使用黑色表示实心形状，使用白色表示透明形状。

此类图标在 Figma 社区资源提供的图标集中非常普遍：设计师为页面使用白色背景，并且由于图标外部背景也是白色，因此没有注意到形状中包含了白色。

```yaml
src: libraries/tools/icon/mask-white.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon/mask-white.svg
    title: '结果：'
```

如果图标不是使用黑色，而是使用另一种颜色（例如 `[str]#1C274C`）设计的，请将其以小写形式添加到 `[prop]solid` 选项中：

```ts
convertSVGToMask(svg, {
	solid: ['#000', 'black', '#1c274c']
});
```

### 按原样转换 

此示例在不更改任何颜色的情况下对图标进行遮罩处理。它用于创建本页开头使用的遮罩示例：

```yaml
src: libraries/tools/icon/mask-demo.ts
title: 'example.ts'
```

该图标的演示可在上方“遮罩的工作原理”部分查看。 

### 多种颜色

有时图标会设计为多种颜色。此函数可用于将它们转换为单色图标，将不同颜色用作实心、半透明或透明颜色。

这可以通过使用 `[prop]custom` 选项来实现。

示例（为原始图标使用灰色背景，以确保黑色和白色形状均可见）：

<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" style="background: #888">
	<g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
		<path fill="#2F88FF" stroke="#000" d="M44.0001 24C44.0001 35.0457 35.0458 44 24.0001 44C18.0266 44 4.00006 44 4.00006 44C4.00006 44 4.00006 29.0722 4.00006 24C4.00006 12.9543 12.9544 4 24.0001 4C35.0458 4 44.0001 12.9543 44.0001 24Z"/>
		<path stroke="#fff" d="M14 18L32 18"/>
		<path stroke="#fff" d="M14 26H32"/>
		<path stroke="#fff" d="M14 34H24"/>
	</g>
</svg>

以下代码将图标转换为单色图标，将黑色形状渲染为实心，将蓝色和白色渲染为不同的半透明：

```yaml
src: libraries/tools/icon/mask-colors.ts
title: 'example.ts'
```

结果：

<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
    <defs>
        <mask id="mask-colors">
            <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                <path fill="#404040" stroke="#fff" d="M44.0001 24C44.0001 35.0457 35.0458 44 24.0001 44C18.0266 44 4.00006 44 4.00006 44C4.00006 44 4.00006 29.0722 4.00006 24C4.00006 12.9543 12.9544 4 24.0001 4C35.0458 4 44.0001 12.9543 44.0001 24Z"/>
                <path stroke="#bfbfbf" d="M14 18L32 18"/>
                <path stroke="#bfbfbf" d="M14 26H32"/>
                <path stroke="#bfbfbf" d="M14 34H24"/>
            </g>
        </mask>
    </defs>
    <rect mask="url(#mask-colors)" width="48" height="48" fill="currentColor"/>
</svg>

### 高级示例

如何解析整个图标集并检查错误？

这可以通过使用 `[type]IconSet` 实例的 `[func]forEach()` 或 `[func]forEachSync()` 函数来完成。两个函数都适用，但由于遮罩是同步应用的，因此没有理由使用异步函数，所以 `[func]forEachSync()` 是更好的选择。

有关代码，请参阅 [从 Figma 导入图标集的超长示例](../examples/import-figma.md)。

在该示例中，在使用 `[func]parseColors()` 解析所有颜色后，会使用 `[func]convertSVGToMask()`。如果在解析颜色时发现白色或半透明颜色，则会调用 `[func]convertSVGToMask()` 将图标转换为遮罩。

