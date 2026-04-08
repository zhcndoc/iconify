```yaml
title: Iconify for Vue
replacements:
  - code: "60,000"
    value: "${counters.icons}"
  - code: "80+"
    value: "${counters.sets}+"
  - code: "@iconify/vue@3"
    value: "${vue.import}"
types:
  IconifyIcon: "/docs/types/iconify-icon.md"
functions:
  addCollection: "./add-collection.md"
  addIcon: "./add-icon.md"
  iconExists: "./icon-exists.md"
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

# Iconify for Vue

```yaml
include: icon-components/components/intro
replacements:
  - search: React
    replace: Vue
```

请注意，此组件并非专为服务端渲染设计。
如果您正在使用 SSR，请考虑切换到 [Iconify Icon Web 组件](/docs/iconify-icon/index.md)。

## 安装

如果您使用 NPM：

```bash
npm install --save-dev @iconify/vue@3
```

如果您使用 Yarn：

```bash
yarn add --dev @iconify/vue@3
```

## 使用方法

安装 `[npm]@iconify/vue@3` 并从中导入组件（该组件以命名导出形式提供）：

```js
import { Icon } from "@iconify/vue";
```

然后在模板中使用 `[var]Icon` 组件，并将图标名称作为 `[prop]icon` 参数传入：

```jsx
<Icon icon="mdi-light:home" />
```

### Nuxt.js {#ssr}

该组件与 Nuxt.js 兼容。

该组件在挂载前不会获取图标数据。
对于服务端渲染而言，这意味着生成的 HTML 将不包含 SVG，
图标仅在水合（hydration）完成后于客户端渲染。

如果您确实希望在服务端渲染 SVG，
请提供 [图标数据](/docs/types/iconify-icon.md) 作为参数，而非图标名称，
或 [使用其他图标组件](/docs/usage/index.md)。

#### SSR 属性

在 4.1.2 版本中新增了一个布尔属性：`[prop]ssr`。

启用后，它将立即渲染图标：

```vue
<Icon icon="mdi:home" :ssr="true" />
```

在非 SSR 环境下使用也是安全的，因为不存在水合中断的问题。

如果您正在使用 SSR（例如 Nuxt），请确保图标数据在服务端和客户端均可用。

## 属性

您可以向组件传递任意自定义属性。

必需属性：

- `[prop]icon`，`[type]IconifyIcon | string` 图标名称或图标数据。

```yaml
include: icon-components/component-optional-props
replacements:
  - search: hAlign
    replace: horizontalAlign
  - search: vAlign
    replace: verticalAlign
  - search: hFlip
    replace: horizontalFlip
  - search: vFlip
    replace: verticalFlip
```

有关每个可选属性的详细信息，请参见下文。

除上述属性外，图标组件还接受任何其他属性和事件。所有其他属性和事件都将传递给生成的 SVG 元素，因此您可以执行设置内联样式、添加标题、绑定 `[prop]onClick` 事件等操作。

## 图标

```yaml
include: icon-components/components/intro-icon
```

## 颜色

```yaml
include: icon-components/components/intro-color
```

```vue
<Icon icon="mdi:home" style="color: red" />
```

有关设置颜色的各种方法，请参阅 [如何在 Iconify for Vue 中更改图标颜色](./color.md)。

## 尺寸

```yaml
include: icon-components/components/intro-size
```

```vue
<Icon icon="mdi:home" style="font-size: 24px;" />
```

有关更改图标尺寸的各种方法，请参阅 [如何在 Iconify for Vue 中更改图标尺寸](./dimensions.md)。

## 变换

```yaml
include: icon-components/components/intro-transform
```

更多详情请参阅 [如何在 Iconify for Vue 中变换图标](./transform.md)。

## 加载事件

`include icon-components/components/onload-event`

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
