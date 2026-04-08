```yaml
title: Rendering Modes in Iconify Icon Web Component
```

# 渲染模式

本教程是 [Iconify Icon Web 组件教程](./index.md) 的一部分。

该 Web 组件支持多种图标渲染模式。

## 模式

Web 组件支持 4 种模式：

- `[str]svg`：渲染 `[tag]svg` 元素。
- `[str]style`：根据图标调色板使用 `[str]bg` 或 `[str]mask` 模式。
- `[str]bg`：将图标作为背景图像渲染 `[tag]span` 元素。仅适用于带有调色板的图标。
- `[str]mask`：将图标作为遮罩图像渲染 `[tag]span` 元素。仅适用于不带调色板的图标。

演示使用 4 种模式渲染的 2 个图标（一个单色，一个带调色板）：

`include icon-components/modes-demo`

### 代码示例

这些模式在 DOM 中实际上是什么样子的？

`[icon]mdi:home`（用于上述模式演示）图标的示例：

```yaml
hint: 'svg mode'
src: icon-components/common/modes-svg.html
extra:
  - src: icon-components/common/modes-bg.html
    hint: 'bg mode'
  - src: icon-components/common/modes-mask.html
    hint: 'mask mode'
```

## 为什么不直接渲染 SVG？ {#why}

你可能想知道，为什么需要这样做？难道 `[tag]svg` 还不够吗？

将图标渲染为 `[tag]svg` 对大多数图标都有效，但对于使用 SVG 动画的图标并不总是有效。

SVG 动画必须等到文档就绪后才能开始。这看起来可能微不足道，但动画渲染不够快会导致糟糕的用户体验。此问题可能由一些小问题引起，例如统计脚本加载失败或广告代码加载缓慢。如果页面加载资源的服务器中至少有一个无法访问，可能会破坏页面上所有动画 SVG。`async` 和 `defer` 属性也无济于事。该问题甚至可能由 iframe 中的脚本引起。

### 动画延迟演示 {#delay-demo}

下方是一个 `[tag]iframe`，展示了图标渲染问题。它包含一个动画图标，分别以 `[tag]svg` 和背景图像的形式渲染。两个图标都会立即渲染，但 `[tag]svg` 中的动画在几秒钟内不会开始，因为文档仍在加载。

`include icon-components/frames/delay-demo-1up`

更糟糕的是，这个位于 `[tag]iframe` 中的演示会影响主文档。本页的 Logo 是以 `[tag]svg` 渲染的，并且包含动画。刷新此页面，查看框架中加载缓慢的脚本如何阻止主文档中不相关图标的 SVG 动画。

## 背景与遮罩

背景图像无法使用 `[prop]currentColor`，但它们会保留图标的调色板，因此带有调色板的图标可以渲染为背景图像。

但如果图标使用了 `[prop]currentColor` 该怎么办？解决方案是将图标用作遮罩，并将背景颜色设置为 `[prop]currentColor`。

背景图像和遮罩图像的结合使得几乎可以将所有 SVG 用作 URL。唯一无法正确渲染的图标是混合了 `[prop]currentColor` 和硬编码调色板的图标。

请参阅 Anthony Fu 的 [纯 CSS 中的图标](https://antfu.me/posts/icons-in-pure-css) 一文，其中对此有更详细的解释。

### SVG 动画

当图标包含动画时，如果将其渲染为遮罩或背景，动画会立即开始，从而解决上文提到的动画延迟问题。

然而，还存在另一个问题：Chrome 的浏览器缓存。图像以 URL 形式渲染。如果该 URL 已存在于浏览器缓存中，Chrome 不会重新启动动画。这意味着后续渲染相同的动画图标可能会出现异常。

`include icon-components/frames/delay-demo-freeze-1up`

因此，SVG 动画在用作背景或遮罩时也会存在问题。Web 组件通过在图标中添加随机注释内容来解决此问题，从而使其绕过浏览器缓存。

`include icon-components/frames/delay-demo-icon-1up`

## 应该使用哪种模式？ {#choices}

Web 组件将自动使用最佳模式：

- 如果图标包含 SVG 动画，则使用 `[str]style` 以立即渲染动画。
- 否则使用 `[str]svg`，它在大多数浏览器中渲染速度略快。
