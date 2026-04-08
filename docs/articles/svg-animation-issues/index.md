```yaml
title: "SVG 动画 2 级规范：常见问题与解决方案"
```

# 解决 SVG 动画规范问题

为图标添加动画有多种方式：

- 使用关键帧的 CSS 动画。
- JavaScript 动画。有多个库可用于实现此功能。
- SVG 动画。

本文主要介绍最后一种方法：使用 [SVG 动画 2 级规范](https://svgwg.org/specs/animations/) 为图标添加动画。

## SMIL？

不，它不是那个已被废弃的旧版 SMIL 动画。

它是一个现代规范，尽管基于 SMIL。目前所有现代浏览器都已支持它。

## 示例

那么 SVG 动画看起来是什么样的呢？

```yaml
src: articles/animations/image-twotone.svg
demo: true
demoFirst: false
class: restart-animation
```

此示例使用 `[tag]animate` 标签随时间更改父元素的属性。它通过更改 `[prop]stroke-dashoffset` 来为描边添加动画，使其看起来像是图标正在被绘制，并通过 `[attr]fill-opacity` 让填充元素淡入。

无需 CSS，无需 JavaScript，无外部依赖。

有关更多示例以及其他相关标签和属性，请参阅 MDN 上的 [`[tag]animate` 文档](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate) 和 [SVG 动画 2 级规范](https://svgwg.org/specs/animations/)。

## 时序控制

遗憾的是，SVG 动画规范有一个主要缺点：动画时序的处理非常棘手。

这究竟意味着什么？

渲染 SVG 有两种方式：

- 使用 `[tag]svg` 内联图标。
- 外部资源：将 SVG 作为 URL 或背景图像。

两者在动画时序方面都存在不同的问题。

### 内联 SVG

使用内联 `[tag]svg` 时，动画必须等到文档准备就绪后才能开始。

这看起来可能微不足道，但动画渲染不够快会导致糟糕的用户体验。

此问题可能由一些小事引起，例如统计脚本加载失败或广告代码加载缓慢。如果页面加载资源的服务器中至少有一个无法访问，就可能会破坏页面上所有带动画的 SVG。async 和 defer 属性也无济于事。该问题甚至可能由 iframe 中的脚本引起。

#### 解决方案？ {#solution-svg}

没有。

如果您的网站有大量可能延迟动画的外部依赖项，请不要对内联 SVG 使用带动画的图标。

### 将 SVG 作为 URL

当将图标作为 URL 使用时，您根本无法控制动画时序。

动画总是在图标首次渲染时开始。绝对没有办法控制这一点。

#### 解决方案？ {#solution-css}

唯一的解决方案是每次需要重新启动动画时，为图标生成唯一的 URL。

实现这一点的最简单方法是在图标内容中添加一个基本的 HTML 注释，如下所示：

```css
.test-icon {
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath stroke-dasharray='20' stroke-dashoffset='20' d='M3 12h17.5'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' dur='0.2s' values='20;0' /%3E%3C/path%3E%3Cpath stroke-dasharray='12' stroke-dashoffset='12' d='M21 12l-7 7M21 12l-7 -7'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='0.2s' dur='0.2s' values='12;0' /%3E%3C/path%3E%3C/g%3E%3C!-- 1234567890 --%3E%3C/svg%3E");
  width: 1em;
  height: 1em;
  background-color: currentcolor;
  mask-image: var(--svg);
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
}
```

注意 URL 末尾附近的 `[str]%3C!-- 1234567890 --%3E`。这是一个带有数字的简单注释，用于破坏浏览器的缓存。

遗憾的是，此解决方案需要 JavaScript。它可以用作内联 CSS，但不能用于 CSS 文件中。

## Iconify Web 组件

解决这些问题的一个简单方法是使用 [Iconify 图标 Web 组件](/docs/iconify-icon/index.md)。

[Iconify 图标 Web 组件](/docs/iconify-icon/index.md) 将带动画的图标渲染为背景或遮罩图像，并实现了随机 URL 的变通方案。

此外，它仅在图标可见时才渲染图标。这意味着 CPU 不会浪费在为不可见的图标添加动画上。

## 结论

SVG 动画规范前景广阔，但使用起来很困难。

CSS 动画是更好的选择，但在撰写本文时，并非所有主流浏览器都完全支持 CSS 动画（见下文更新）。更具体地说，只有像 `[prop]stroke-dashoffset` 这样的基本动画有效，不支持为其他属性添加动画（见下文更新）。这使得在 CSS 中为图标添加动画除了非常基础的动画外几乎不可能实现。

### 更新

CSS 动画更新：2025 年 4 月。

2024 年，所有主流浏览器都增加了对在 CSS 中为大多数 SVG 属性添加动画的支持。

唯一的例外是路径中的 `[prop]d` 属性，这实际上是最重要的属性。Safari 18.4 不支持在 CSS 中为 `[prop]d` 添加动画或更改它，但 Safari TP 已支持，因此希望该支持能随 Safari 18.5 一同发布。
