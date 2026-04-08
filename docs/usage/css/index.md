```yaml
title: 如何在 CSS 中使用图标
functions:
  getIconsCSS: "/docs/libraries/utils/get-icons-css.md"
  getIconCSS: "/docs/libraries/utils/get-icon-css.md"
```

# 如何在 CSS 中使用图标

在 CSS 中使用图标非常简单：将图标设置为背景或遮罩图像，并在 HTML 中使用简单的 `[tag]span` 元素来渲染图标。

如果你想跳过关于其工作原理的长篇解释，可以[直接跳转到可用工具列表](#tools)。

## 优势

与[在 HTML 中使用 SVG](../svg/index.md) 相比，在 CSS 中使用 SVG 既有优势也有劣势。

优势：

- 无重复。每个图标只需定义一次。
- 不会产生深层 DOM 树。
- 可以使用来自不可信来源的图标，因为即使 SVG 中包含脚本，它们也不会被执行。

然而，它也存在一些劣势：

- 无法定位图标内部的元素，例如修改 `[prop]stroke-width`。
- 无法使用带动画的图标，除非是无限循环动画的图标。详见下文。

## 图标的渲染方式

图标分为两种类型：

- 具有固定配色的图标。
- 可改变颜色的单色图标。

这两种类型都可以在 CSS 中使用。

### 带配色的图标

具有固定配色的图标可以渲染为背景图像：

```yaml
src: usage/css-demo-bg.html
css: usage/css-demo-bg.scss
demo: true
demoFirst: true
class: usage-css-demo
```

#### 渲染为内容 {#content}

具有固定配色的图标也可以渲染为伪元素的内容。

这与将图标用作背景图像类似，但有一个区别：无法通过 CSS 控制图标的尺寸。
你需要在 SVG 中以像素为单位设置宽度和高度。

```yaml
src: usage/css-demo-content.html
css: usage/css-demo-content.scss
demo: true
demoFirst: true
class: usage-css-demo
```

将图标渲染为伪元素内容而非背景图像并没有明显的优势。

### 单色图标 {#monotone}

单色图标可以渲染为遮罩图像，并将背景颜色设置为 `[prop]currentColor`：

```yaml
src: usage/css-demo-mask.html
css: usage/css-demo-mask.scss
demo: true
demoFirst: true
class: usage-css-demo
```

使用 `[prop]currentColor` 作为背景颜色，可以通过更改文本颜色轻松改变图标颜色。

## 工具

如何在 Iconify 生态系统中为图标生成 CSS？

有几种方法可以实现：

- 你可以使用 [Iconify API 生成 CSS](./no-code/index.md)，无需编写任何代码。
- 如果你正在使用 Tailwind CSS，可以使用 [Tailwind CSS 的 Iconify 插件](./tailwind/index.md)。
- 如果你正在使用 UnoCSS，它内置了[图标预设](./unocss/index.md)。
- 你可以使用 [Iconify Utils 生成 CSS](./utils/index.md)。

## 自定义插件

想要构建一个生成 CSS 的自定义插件吗？

[Iconify Utils](/docs/libraries/utils/index.md) 包包含了你所需的所有函数。生成 CSS 的过程非常简单：

- 定位图标集文件。
- 读取并解析 JSON。
- 使用 `[func]getIconsCSS()` 或 `[func]getIconCSS()` 函数生成 CSS。

以下代码示例可能会对你有所帮助：

- 参阅 [Iconify Utils 的 CSS 文档](./utils/index.md)。
- 参阅 `[func]getIconsCSS()` 或 `[func]getIconCSS()`。
- [Iconify for Tailwind CSS](https://github.com/iconify/iconify/tree/main/plugins/tailwind) 的源代码。

## 带动画的图标

不建议在 CSS 中使用带动画的图标。

问题在于动画计时器。

通常我们会期望动画在图标渲染时开始，但在 CSS 中并非如此。

在用于背景和遮罩图像的 CSS 中，动画计时器会在图标首次渲染时启动，随后该计时器将用于该图标的所有实例。
动画计时器无法重置。
