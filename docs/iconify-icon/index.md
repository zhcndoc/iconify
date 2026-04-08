```yaml
title: Iconify Icon Web 组件
replacements:
  - code: "60k"
    value: "${counters.icons-short}"
  - code: "0.0.4"
    value: "${iconify-icon.version}"
types:
  IconifyIcon: "../types/iconify-icon.md"
functions:
  addCollection: "./add-collection.md"
  addIcon: "./add-icon.md"
  iconExists: "./icon-exists.md"
  iconLoaded: "./icon-exists.md"
  listIcons: "./list-icons.md"
  loadIcons: "./load-icons.md"
  loadIcon: "./load-icon.md"
  getIcon: "./get-icon.md"
  enableCache: "./enable-cache.md"
  disableCache: "./disable-cache.md"
  addAPIProvider: "./add-api-provider.md"
  buildIcon: "./build-icon.md"
  setFetch: "./set-fetch.md"
  setCustomIconLoader: "./custom-loaders.md"
  setCustomIconsLoader: "./custom-loaders.md"
```

# Iconify Icon Web 组件

Iconify Icon 是一个用于渲染图标的 Web 组件。

## 使用方法

它的设计初衷是尽可能易于使用。

```yaml
src: icon-components/icon/usage.html
demo: true
demoFirst: false
class: sample-big
```

### 支持的框架

该 Web 组件可以直接在 HTML 中使用，无需任何 UI 框架。请参阅下方的使用示例。

它也能与所有支持 Web 组件的现代框架完美配合：

- Svelte 和 SvelteKit/Sapper。
- Vue 2 和 Vue 3。在 Nuxt 中使用时需要修改配置（见下文）。
- Lit。
- Ember。
- React 和 Next，但存在细微差异，例如使用 `[prop]class` 而不是 `[prop]className`。[包装器可修复此问题](./react.md)。

然而，某些 UI 框架需要自定义包装器：

- Solid。请参阅 [适用于 Solid 的 Iconify 图标 Web 组件](./solid.md)。

### 布局偏移

Web 组件不会立即渲染。可能会有几毫秒的延迟。

原因如下：

- JavaScript。Web 组件在加载和注册完成之前无法渲染。
- Web 组件规范的限制。浏览器中的渲染是异步进行的，通常会导致微小的延迟。

这可能会导致布局偏移。

为避免布局偏移，请将以下代码添加到您的 CSS 中：

```css
iconify-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
}
```

## 按需加载图标数据

无需嵌入整个图标，您只需在 `[prop]icon` 属性中提供图标名称即可。

Web 组件将从 [Iconify API](../api/index.md) 获取图标数据，然后在 Shadow DOM 中渲染 SVG。

目前可从众多开源图标集中获取超过 60k 个图标。

不想依赖第三方 API 服务器？您可以[托管自己的 Iconify API](/docs/api/hosting.md)。您也可以将其与您自己的图标一起使用。

## Shadow DOM

SVG 在 Shadow DOM 中渲染。这意味着什么？

- 图标的 HTML 是隐藏的，不属于主文档的一部分。
- 当在支持服务端渲染的 UI 框架中使用该 Web 组件时，它简化了水合（hydration）过程。见下文。
- 文档中使用的样式表不会影响图标，从而防止潜在的冲突。

有时这可能是一个缺点，例如，如果您确实想访问图标内容以执行基于 CSS 或 JavaScript 的动画。如果您不想使用基于 Shadow DOM 的 Web 组件，请查看 [Iconify 图标组件](../icon-components/index.md)。

### SSR 水合 {#ssr}

Web 组件解决的问题之一是水合（hydration），这是许多现代 UI 框架所使用的技术。

服务端渲染正变得越来越流行，水合过程很复杂，并且很容易因 DOM 不匹配而中断。

什么是水合？
水合是将服务器生成的内容与浏览器中 UI 框架生成的内容进行匹配的过程。
UI 框架不会重新渲染文档，而是直接使用服务器生成的 HTML。
这是最基本的解释。
实际上它比这更复杂，请参阅有关 SSR 水合的各种文章。

水合图标时存在几个问题：

- 图标元素中可能包含唯一 ID，例如遮罩和裁剪路径。在同一页面上使用多个图标需要使用不同的 ID（或将其随机化），这通常会破坏水合过程。
- 动态加载的图标数据在水合结束前无法渲染。这可以通过仅在组件挂载后渲染图标来解决，但这可能会导致渲染延迟和其他问题。

Web 组件使用的 Shadow DOM 解决了水合问题。
当 UI 框架在服务器上渲染图标时，它只渲染 `[tag]iconify-icon` 元素。
在水合过程中，UI 框架只检查 `[tag]iconify-icon` 元素，而不检查实际的图标。
这意味着：

- 服务器端只需生成 `[html]<iconify-icon icon="mdi:home"></iconify-icon>`，从而减小文档体积。
- Web 组件可以独立于 UI 框架立即加载图标数据并进行渲染，无需等待 UI 框架挂载组件。
- 不会出现唯一 ID 重复的问题。每个图标都有自己的文档，因此无需更改图标元素的 ID。
- 水合速度更快。图标可能很复杂，不检查图标内容意味着 UI 框架的工作量更少。

使用 Shadow DOM 渲染图标能为开发者带来更好的体验。无需进行任何配置，无需担心图标数据，无需担心冲突。它开箱即用。

### 仅渲染可见图标

从 Web 组件的 2.0.0 版本开始，图标仅在访客可见时才会渲染。

对于包含大量图标的长文档，这能大幅提升页面性能。

从 2.1.0 版本开始，您可以通过在 Web 组件的 HTML 中添加 `[html]noobserver` 属性来退出此行为：

```html
<iconify-icon icon="mdi:home" noobserver></iconify-icon>
```

## 为什么不使用图标字体？ {#icon-font}

Web 组件使用的 Shadow DOM 相比普通 SVG 或特定框架的组件具有巨大优势，但图标字体呢？

不要使用图标字体！！！

- 图标字体很难看。浏览器使用字体渲染方法来渲染图标，这会导致图标边缘模糊，失去清晰度。
- 由图标字体渲染的图标通常难以对齐，导致图标错位。
- 浏览器为了渲染几个图标就要加载庞大的字体文件。这可以通过使用自定义图标字体来解决，但无法解决其他问题。
- 没有彩色图标，只有单色。不支持 SVG 动画。

图标字体不属于现代 Web。在 Internet Explorer 流行、Web 组件尚未出现且 SVG 支持存在缺陷的时代，它们曾是一个很好的解决方案。那些糟糕的日子已经过去了。

## 注册 Web 组件

为了让 Web 组件正常工作，需要先进行注册。
`[npm]iconify-icon` 包会自动完成此操作。
您只需在页面中引入它即可。

如果您使用打包器构建项目，
可以通过将 `[npm]iconify-icon` 安装为依赖项并在项目中导入它来引入脚本：

```js
import "iconify-icon";
```

如果您不使用打包器，或希望单独引入图标 Web 组件，请将脚本添加到您的文档中：

```html
<script src="https://code.iconify.design/iconify-icon/0.0.4/iconify-icon.min.js"></script>
```

或

```html
<script src="https://cdn.jsdelivr.net/npm/iconify-icon@0.0.4/dist/iconify-icon.min.js"></script>
```

### Nuxt

在 Nuxt 中使用该组件时，您需要告知它 `[tag]iconify-icon` 是一个 Web 组件。

`[file]nuxt.config.ts` 示例：

```ts
import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === "iconify-icon",
    },
  },
});
```

## 属性

有多个属性可用于自定义图标外观。

要更改颜色（仅单色图标可更改颜色）或大小，请使用样式：

```yaml
src: icon-components/icon/color-size.html
demo: true
class: sample-big
```

您也可以使用 `[attr]width` 和/或 `[attr]height` 属性来更改大小：

```yaml
src: icon-components/icon/size.html
demo: true
```

如果只设置了一个尺寸属性，另一个属性将根据图标的宽高比自动计算。

您还可以对图标进行变换。与 CSS 变换不同，这些变换是在图标内部完成的，这也会影响图标的 `[prop]viewBox`：

```yaml
src: icon-components/icon/transform.html
demo: true
```

### 属性列表

所有属性也可作为属性（properties）使用，因此在使用元素时，您可以轻松地在 JavaScript 中访问它们。

必需属性：

- `[prop]icon`，`[type]IconifyIcon | string` 图标名称或图标数据。由于属性只能是字符串，如果您想提供 `[type]IconifyIcon` 数据，则需要使用属性（property）或对其进行 `[js]JSON.stringify()` 处理。请参阅 [图标数据](./icon.md)。

可选属性：

- `[prop]mode`，`[type]string` 设置图标渲染模式。请参阅 [渲染模式](./modes.md)。
- `[prop]inline`，`[type]boolean` 更改垂直对齐方式。请参阅 [垂直对齐](./inline.md)。
- `[prop]width`，`[type]string | number` 图标宽度。请参阅 [图标尺寸](./dimensions.md)。
- `[prop]height`，`[type]string | number` 图标高度。请参阅 [图标尺寸](./dimensions.md)。
- `[prop]flip`，`[type]string` 翻转图标。请参阅 [图标变换](./transform.md)。
- `[prop]rotate`，`[type]number | string` 旋转图标。请参阅 [图标变换](./transform.md)。

## 函数

对于高级开发者，Web 组件提供了多个函数来控制它。

这些函数可用于加载自定义图标、获取图标数据、从 API 预加载图标、配置自定义 API 等。请参阅下方的函数列表。

函数可从以下位置导入：

- `[npm]iconify-icon` 包，该包也捆绑了 Web 组件。可在浏览器和 Node.js 中使用。
- Web 组件类作为静态方法，在组件注册后可用。
- `[tag]iconify-icon` 节点作为方法，在组件注册并创建新元素后可用。

第一种方法最可靠，因为它只是简单的导入。所有示例均使用此方法：

```js
import { loadIcon } from "iconify-icon";

const name = "mdi:home";
loadIcon(name)
  .then((data) => {
    console.log("Loaded data for", name);
  })
  .catch(console.error);
```

对于第二种方法，可以从自定义元素注册表中获取类：

```js
const IconifyIcon = window.customElements.get("iconify-icon");

const name = "mdi:home";
IconifyIcon.loadIcon(name)
  .then((data) => {
    console.log("Loaded data for", name);
  })
  .catch(console.error);
```

第三种方法可在创建新图标元素或访问现有元素后使用：

```js
const IconifyIcon = document.createElement("iconify-icon");

const name = "mdi:home";
IconifyIcon.loadIcon(name)
  .then((data) => {
    console.log("Loaded data for", name);
  })
  .catch(console.error);
```

函数分为几个组（点击函数名称查看更多详情和示例）：

### 实例函数 {#instance}

这些函数仅在 Web 组件节点上可用：

- `[func]restartAnimation()`。重启 SVG 动画，如果您想在悬停事件时重启动画（如本网站右侧导航所示），这将非常有用。

### 检查可用图标 {#getting-icons}

```yaml
include: icon-components/components/functions-list/getting-icons
```

### 添加图标 {#adding-icons}

```yaml
include: icon-components/components/functions-list/adding-icons
```

### 自定义加载器 {#custom-loaders}

```yaml
include: icon-components/components/functions-list/custom-loaders
```

### 辅助函数 {#helper}

- `[func]calculateSize()`。计算图标尺寸。当仅设置 `[attr]height` 时用于计算 `[attr]width`，反之亦然。
- `[func]buildIcon(icon, customisations?)`。生成图标组件使用的数据。如果您倾向于自己生成 `[tag]svg`，可以使用此函数。数据包含 `[tag]svg` 的属性和内部 HTML。

### API 函数 {#api}

```yaml
include: icon-components/components/functions-list/api
```

### 内部 API 函数 {#internal}

```yaml
include: icon-components/components/functions-list/internal
```
