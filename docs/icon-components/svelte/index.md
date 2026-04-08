```yaml
title: Iconify for Svelte
replacements:
  - code: "60,000"
    value: "${counters.icons}"
  - code: "80+"
    value: "${counters.sets}+"
  - code: "@iconify/svelte@2"
    value: "${svelte.import}"
types:
  IconifyIcon: "../../types/iconify-icon.md"
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
  replaceIDs: "./replace-ids.md"
  buildIcon: "./build-icon.md"
  setFetch: "./set-fetch.md"
  setCustomIconLoader: "./custom-loaders.md"
  setCustomIconsLoader: "./custom-loaders.md"
```

# Svelte 的 Iconify

```yaml
include: icon-components/components/intro
replacements:
  - search: React
    replace: Svelte
```

请注意，此组件并非为服务端渲染设计。
如果您正在使用 SSR，请考虑切换到 [Iconify Icon Web 组件](/docs/iconify-icon/index.md)。

## 安装

如果您使用 NPM：

```bash
npm install --save-dev @iconify/svelte@2
```

如果您使用 Yarn：

```bash
yarn add --dev @iconify/svelte@2
```

### Svelte 4

从组件的 6.0.0 版本开始，它使用了 Svelte 5 语法，这与 Svelte 4 不兼容。

如果您使用的是 Svelte 4，则需要使用组件的 4 版本：

```bash
npm install --save-dev @iconify/svelte@4
```

或者使用 [Web 组件](/docs/iconify-icon/index.md)。

## 使用方法

安装 `[npm]@iconify/svelte@2` 并从中导入组件（该组件作为默认导出）：

```js
import Icon from "@iconify/svelte";
```

然后在模板中使用 `[var]Icon` 组件，并将图标名称作为 `[prop]icon` 参数传入：

```jsx
<Icon icon="mdi-light:home" />
```

### SvelteKit {#sveltekit}

该组件与 SvelteKit 兼容。语法与 Svelte 相同。

该组件在挂载之前不会获取图标数据。
对于服务端渲染而言，这意味着生成的 HTML 将不包含 SVG，
图标仅在水合（hydration）完成后在客户端渲染。

如果您确实希望在服务端渲染 SVG，
请提供 [图标数据](/docs/types/iconify-icon.md) 作为参数，而不是图标名称，
或者 [使用其他图标组件](/docs/usage/index.md)。

## 属性

您可以向 `[var]Icon` 传递任何自定义属性。

必需属性：

- `[prop]icon`，`[type]IconifyIcon | string` 图标名称或图标数据。

`include icon-components/component-optional-props`

有关每个可选属性的更多信息，请参见下文。

除了上述属性外，图标组件还接受任何其他属性。所有其他属性都将传递给生成的 SVG 元素，因此您可以执行设置内联样式、添加标题等操作。

与 React 组件不同，Svelte 组件不支持事件。

## 图标

```yaml
include: icon-components/components/intro-icon
```

## 颜色

```yaml
include: icon-components/components/intro-color
```

```jsx
<Icon icon="mdi:home" style="color: red" />
```

有关设置颜色的各种方法，请参阅 [如何在 Svelte 的 Iconify 中更改图标颜色](./color.md)。

## 尺寸

```yaml
include: icon-components/components/intro-size
```

```jsx
<Icon icon="mdi:home" style="font-size: 24px;" />
```

有关更改图标尺寸的各种方法，请参阅 [如何在 Svelte 的 Iconify 中更改图标尺寸](./dimensions.md)。

## 变换

```yaml
include: icon-components/components/intro-transform
```

有关更多详细信息，请参阅 [如何在 Svelte 的 Iconify 中变换图标](./transform.md)。

## onLoad

`include icon-components/components/onload`

## 函数 {#functions}

```yaml
include: icon-components/components/functions-list/header
```

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

```yaml
include: icon-components/components/functions-list/helpers
```

### API 函数 {#api}

```yaml
include: icon-components/components/functions-list/api
```

### 内部 API 函数 {#internal}

```yaml
include: icon-components/components/functions-list/internal
```
