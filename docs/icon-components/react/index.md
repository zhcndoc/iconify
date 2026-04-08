```yaml
title: Iconify 适用于 React
replacements:
  - code: "60,000"
    value: "${counters.icons}"
  - code: "80+"
    value: "${counters.sets}+"
  - code: "@iconify/react@2"
    value: "${react.import}"
types:
  IconifyIcon: "../../types/iconify-icon.md"
functions:
  addCollection: "./add-collection.md"
  addIcon: "./add-icon.md"
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
  setCustomIconLoader: "./custom-loaders.md"
  setCustomIconsLoader: "./custom-loaders.md"
```

# Iconify 适用于 React

```yaml
include: icon-components/components/intro
```

## 安装

如果您使用 NPM：

```bash
npm install --save-dev @iconify/react@2
```

如果您使用 Yarn：

```bash
yarn add --dev @iconify/react@2
```

### 版本 4

从版本 5 开始，该组件是一个使用 React hooks 的现代函数式组件。

如果您想在较旧版本的 React 中使用该图标组件，
您可以使用 `[npm]@legacy` 标签安装版本 4：

```bash
npm install --save-dev @iconify/react@legacy
```

## 使用方法

安装 `[npm]@iconify/react@2` 并从中导入 `[var]Icon` 组件：

```js
import { Icon } from "@iconify/react";
```

然后将图标名称作为 `[prop]icon` 参数传递给 `[var]Icon` 组件：

```jsx
<Icon icon="mdi-light:home" />
```

```yaml
include: icon-components/components/intro-online
```

### Next.js {#ssr}

该组件与最新版的 Next.js 兼容。

遗憾的是，Next.js 目前不支持在组件中使用 `[func]useState`，
导致无法在服务器端和客户端使用相同的有状态组件，
因此该图标组件仅为客户端组件。
SVG 不会在服务器端渲染。

此外，为了避免水合错误，组件仅在挂载后才会渲染 SVG，
这有时会导致微小的延迟。
如果您正在使用 Next.js 或类似框架，
建议考虑切换到 [Iconify Icon Web 组件](/docs/iconify-icon/index.md)。

如果您确实希望无延迟地渲染 SVG，
请提供 [图标数据](/docs/types/iconify-icon.md) 作为参数，而不是图标名称，
或使用其他方式渲染图标，例如：

- [Iconify Icon Web 组件](/docs/iconify-icon/index.md)
- [Unplugin Icons](/docs/usage/svg/unplugin/index.md)
- [带有 Iconify 插件的 Tailwind CSS](/docs/usage/css/tailwind/iconify/index.md)
- [带有图标预设的 UnoCSS](/docs/usage/css/unocss/index.md)

## 属性

您可以向 `[var]Icon` 传递任何自定义属性。

必需属性：

- `[prop]icon`，`[type]IconifyIcon | string` 图标名称或图标数据。

`include icon-components/component-optional-props`

有关每个可选属性的更多信息，请参见下文。

除了上述属性外，该图标组件还接受任何其他属性和事件。所有其他属性和事件都将传递给生成的 SVG 元素，因此您可以执行诸如分配 `[prop]onClick` 事件、设置内联样式、添加标题等操作。

## 图标

```yaml
include: icon-components/components/intro-icon
```

## 颜色

```yaml
include: icon-components/components/intro-color
```

```jsx
<Icon icon="mdi:home" style={{ color: "red" }} />
```

有关设置颜色的各种方法，请参阅 [如何在 Iconify for React 中更改图标颜色](./color.md)。

## 尺寸

```yaml
include: icon-components/components/intro-size
```

```jsx
<Icon icon="mdi:home" style={{ fontSize: "24px" }} />
```

有关更改图标尺寸的各种方法，请参阅 [如何在 Iconify for React 中更改图标尺寸](./dimensions.md)。

## 变换

```yaml
include: icon-components/components/intro-transform
```

有关更多详细信息，请参阅 [如何在 Iconify for React 中变换图标](./transform.md)。

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
