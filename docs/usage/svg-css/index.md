```yaml
title: 使用 SVG + CSS 渲染图标
replacements:
  - code: "60,000"
    value: "${counters.icons}"
  - code: "60k"
    value: "${counters.icons-short}"
```

# 使用 SVG + CSS 渲染图标

SVG + CSS 图标渲染方法将图标分为两部分：

- 可嵌入 HTML 的小型 SVG。
- 包含所有形状数据的 CSS。

请参阅[将图标渲染为 SVG + CSS 的文章](https://cyberalien.dev/articles/svg-css)。

## 示例

以下是 SVG + CSS 图标代码的示例。

SVG 仅包含最少的代码，从而减小 HTML 体积：

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path class="mdi-account-box" />
</svg>
```

每个形状使用类名代替冗长的路径数据。
CSS 中包含带有该类名的选择器及形状数据：

```css
.mdi-account-box {
  fill: currentColor;
  d: path(
    "M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2"
  );
}
```

## 优势

SVG+CSS 最大的优势在于紧凑性和缓存机制：

- HTML 体积尽可能小。
- 实际的形状数据位于 CSS 文件中，可由浏览器缓存。

此外，您可以充分利用 CSS 的强大功能：

- 使用 CSS 变量控制颜色。
- 在事件触发时更改形状和颜色，例如鼠标悬停在图标上时。

### 体积对比

对于动画图标，这一优势尤为明显。

以下是完全相同的图标在不同格式下的源代码链接：

- [静态 SVG](https://github.com/cyberalien/line-md/blob/main/svg-static/bell-loop.svg?short_path=bebc22d) - 446 字节
- [SVG 动画](https://github.com/cyberalien/line-md/blob/main/svg/bell-loop.svg?short_path=0d3dc1c) - 1.29 KB
- [内嵌样式的 CSS 动画](https://github.com/cyberalien/line-md/blob/main/svg-style/bell-loop.svg?short_path=c681330) - 总计 1.49 KB（176 字节 SVG + 1.29 KB CSS）

采用 CSS 动画的图标文件体积显著更小，这是一个巨大的优势：176 字节对比 1.29 KB！

这需要以增加 CSS 文件体积为代价（本例中增加了 1.29 KB），但 CSS 文件通常在多个页面间共享，并且会被浏览器缓存。

## 劣势

使用 SVG + CSS 只有一个缺点：Safari 浏览器的支持问题。

### Safari 浏览器

图标中占比最大的部分始终是路径，它定义在 `[tag]path` 元素的 `[prop]d` 属性中。

如上述示例所示，在 CSS 中可以通过 `[func]path()` 函数来使用它。

然而，目前最新版本的 Safari (26.3) 并不支持该功能！

解决方案：使用组件来渲染图标，检测不兼容的浏览器，并为这些浏览器使用不同的渲染方法。

## 转换图标

您可以使用在线脚本将图标[从 SVG 转换为 SVG+CSS](https://cyberalien.dev/svg-to-css/)。

此转换器不会进行优化和清理，请配合已清理过的 SVG 使用。

## 图标组件

由于目前将图标渲染为 SVG+CSS 需要为 Safari 浏览器提供降级方案，
渲染方法非常有限且需要 JavaScript。

目前，Iconify 为以下框架提供了 SVG+CSS 解决方案：

- [Vue 组件](./vue/index.md)
- [Svelte 组件](./svelte/index.md)
- [React 组件](./react/index.md)
- [SolidJS 组件](./solid/index.md)

此外，[Iconify Unplugin](https://github.com/iconify/unplugin-iconify) 可以为上述所有框架按需渲染图标。
