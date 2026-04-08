```yaml
title: 按需加载图标
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
```

# 按需加载图标

Iconify 生态系统拥有一个独特的功能：[Iconify API](/docs/api/index.md)。

它可用于[按需加载图标数据](/docs/api/icon-data.md)，并且被 Iconify 图标组件所使用。

如果您想跳过关于其工作原理的长篇解释，可以直接[跳转到可用组件列表](#components)。

## 它是如何工作的？ {#process}

Iconify 图标组件非常易于使用。开发者只需指定一个图标名称：

```yaml
src: icon-components/icon/usage.html
demo: true
demoFirst: false
class: sample-big
```

与[常规图标组件](/docs/usage/svg/index.md)不同，Iconify 图标组件不会打包图标数据。它们仅在运行时加载当前查看页面所使用的图标数据。

<icon-loading-process link="#components"></icon-loading-process>

### 优势

与使用[常规图标组件](/docs/usage/svg/index.md)相比，按需加载图标数据既有优势也有劣势。

优势：

- 非常易于使用。
- 如果您在不同页面上使用大量图标，打包体积会更小，因为图标数据仅在需要时加载。
- 它可以与可定制的主题配合使用，适用于开发者不知道主题具体使用哪些图标的场景。
- HTML 体积小。图标仅在浏览器中加载，而非服务端渲染。

劣势：

- 需要访问 Iconify API，因此无法用于离线应用。您可以自行托管 API 实例，但这并不简单。
- 图标可能无法立即渲染。尽管有多层图标数据缓存机制，但渲染时仍会有几毫秒的延迟。

## 组件

目前最好的选择是 [Web 组件](#web-component)。
无论是否使用 UI 框架，它都可以在 HTML 中使用。  

此外，还有[适用于 UI 框架的组件](#ui-frameworks)：React、Vue、Svelte、Ember。

未来，将仅支持 `[npm]iconify-icon` Web 组件。为什么？
- SVG Framework 是 Web 组件的旧版本，是多年前在浏览器尚不支持 Web 组件时作为实验开发的。它在现代开发中已无立足之地。
- 特定于框架的组件在服务端渲染方面存在问题。Web 组件解决了这些问题。

### Web 组件 {#web-component}

目前最好的选择是 Web 组件。
它是目前最现代的迭代版本，兼容所有 UI 框架，并且在服务端渲染方面表现优异。

用法很简单：

```html
<iconify-icon icon="mdi:home"></iconify-icon>
```

请参阅 [Iconify 图标 Web 组件文档](/docs/iconify-icon/index.md)。

#### Shadow DOM

Web 组件在 Shadow DOM 中渲染图标，将其与主文档分离。

与其他组件相比，这既有优势也有劣势。

优势：

- 将图标与主 DOM 分离，避免主 DOM 变得臃肿。
- 不会与唯一 ID 冲突，某些图标在遮罩、裁剪路径、动画及其他少数元素中会使用这些 ID。
- 与 SSR 配合极佳，远优于 UI 框架原生组件：无 ID 冲突，渲染独立于框架渲染，因此不会引起任何水合（hydration）问题。

劣势：

- 访问图标内容（例如更改 `[prop]stroke-width`）并不总是可行。具体取决于使用场景。
- 无法在不提供 `[prop]width` 和 `[prop]height` 的情况下渲染图标，因此无法通过这些属性调整图标大小。图标只能通过 `[prop]font-size` 调整大小。

如果您的项目无法接受这些劣势，请使用“SVG framework”或下方列出的特定 UI 框架组件之一。

### UI 框架 {#ui-frameworks}

Iconify 提供了原生支持各种 UI 框架的组件：

- [React](./react/index.md)（警告：与 Next.js 配合使用时，请将其包装在仅客户端组件中，或切换到 IconifyIcon Web 组件！）
- [Vue](./vue/index.md)
- [Svelte](./svelte/index.md)

用法与其他任何组件相同：

```jsx
<Icon icon="mdi:home" />
```

这些组件的行为与 Web 组件不同：

- 为避免 SSR 错误，图标仅在组件挂载后渲染。否则会导致水合（hydration）失败。
- 图标可以在没有 `[prop]width` 和 `[prop]height` 属性的情况下渲染，便于在 CSS 中进行样式设置。

建议您考虑使用 `[npm]iconify-icon` Web 组件，而不是上述组件。
动态数据加载与 SSR 的配合并不理想。
Web 组件解决了这些问题。

#### 遗留组件

除了上述组件外，还有几个遗留组件。
它们创建于很久以前，但在现代开发中已不再适用。 

这些组件已不再更新，但如果您确实需要，仍可使用：

- [Vue 2](./vue2/index.md)（Vue 3 早已发布，继续支持旧版本已无意义）
- [Ember](./ember/index.md)（Ember 框架已过时）
- [SVG Framework](./svg-framework/index.md)（最古老的组件，已被 IconifyIcon Web 组件取代）
