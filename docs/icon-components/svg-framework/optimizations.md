```yaml
title: Iconify SVG 框架优化
replacements:
  - code: '22kb'
    value: '${svg-framework.size}'
```

# SVG 框架优化

本教程是 [Iconify SVG 框架教程](./index.md) 的一部分。

本教程包含以下几个部分：

- [脚本标签应放在何处](#header-vs-footer)。
- [如何优化图标加载](#loading)。

## 脚本标签应放在何处？ {#header-vs-footer}

大多数网站优化教程都会告诉你，应该将脚本放在页脚 `[tag]</body>` 之前。那么 Iconify 呢？你可以将 Iconify 脚本放在 head 部分（在 `[tag]<head>` 和 `[tag]</head>` 之间），或者放在页脚 `[tag]</body>` 之前。

那么它们有什么区别呢？

### 将 Iconify 放在页脚 {#script-footer}

如果你将 Iconify 的链接放在页脚 `[tag]</body>` 之前，它会在整个页面加载完成后才加载，不会阻塞渲染。这对页面加载速度是有好处的。

然而，这也意味着图标占位符要等到整个页面加载完成后才会被替换。Iconify 必须加载完成后才能开始工作。

### 将 Iconify 放在 head 部分 {#script-header}

如果你将 Iconify 的链接放在 head 部分（在 `[tag]<head>` 和 `[tag]</head>` 之间），它会立即加载。缺点是，放在 head 部分的任何脚本标签都会阻塞页面渲染，直到脚本加载完成。

Iconify SVG 框架非常小（未压缩约 22kb），由快速的 CloudFlare CDN 分发。加载只需几分之一秒。

将 Iconify 脚本放在 head 部分的好处是，它可以立即开始替换图标。这意味着，如果你的页面很大，图标会在文档部分加载完成后就被替换，而无需等待整个文档加载完毕。

### 结论 {#script-conclusion}

每种方法都有优缺点。你应该自行决定，而不是盲目依赖在线网站检测工具的建议。在线检测工具并不知道脚本的具体作用和工作原理，因此它们总是建议将所有脚本放在页脚。

如果你的页面较小，最好将脚本放在页脚 `[tag]</body>` 之前。例如，本网站就将其放在了页脚。

如果你的页面较大且是动态生成的（例如论坛页面），最好将脚本放在 head 部分。论坛页面可能需要几秒钟才能加载，将脚本放在 head 部分可以确保访客尽快看到图标。

如果你在加载过程中遇到闪烁问题（页面先加载，然后渲染，最后图标才被替换），你可能应该将 Iconify SVG 框架脚本移到 head 部分。

## 如何优化图标加载 {#loading}

Iconify SVG 框架本身已经很快，但你可以通过帮助 Iconify 提前确定需要加载哪些图标，使其变得更快。

有几种方法可以改进图标加载：

### 预加载图标

如果你的页面在初始加载后可能会显示额外的图标（例如 AJAX 表单或 React/Angular 应用），你可以告诉 Iconify SVG 框架预加载这些图标。这样，当你的脚本显示这些图标时，Iconify 就已经从 API 获取了这些图标的数据。

这也有助于减少 API 查询次数。批量加载图标比逐个加载要快得多。

要预加载图标，请在引入 Iconify 脚本后的任意位置添加以下代码：

```yaml
src: icon-components/iconify/preload.html
```

`[func]loadIcons` 的参数是你想要加载的图标数组。

要使用此函数，请确保 Iconify 要么放在页脚 `[tag]</body>` 之前，要么与 SVG 框架打包在一起。否则，SVG 框架可能会比你的脚本加载得更快，它会扫描 DOM 并获取较短的图标列表进行检索，从而将其拆分为多次 API 查询。
