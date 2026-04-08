```yaml
title: Iconify for Ember
replacements:
  - code: "60,000"
    value: "${counters.icons}"
  - code: "80+"
    value: "${counters.sets}+"
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
```

# Iconify for Ember

```yaml
include: icon-components/components/intro
replacements:
  - search: React
    replace: Ember
```

请注意，此组件已不再维护。
Ember 是一个已过时的框架。
如果您正在使用 Ember，请考虑切换到 [Iconify Icon Web 组件](/docs/iconify-icon/index.md)。

## 安装

如果您使用 NPM：

```bash
npm install --save-dev @iconify/ember
```

如果您使用 Yarn：

```bash
yarn add --dev @iconify/ember
```

## 使用方法

无需导入任何内容，Iconify for Ember 专为 Ember 设计为插件（addon），因此 Ember 会自动导入该组件。

在模板中使用 `[var]IconifyIcon` 组件，并将导入的图标名称作为 `[prop]icon` 参数传入：

```hbs
<IconifyIcon @icon="mdi-light:home" />
```

## 属性

在 Ember 中，所有组件属性均以 `[prop]@` 开头，例如 `[prop]@icon`。

必需属性：

- `[prop]@icon`，`[type]IconifyIcon | string` 图标名称或图标数据。

```yaml
include: icon-components/component-optional-props
replacements:
  - search: '<span class="hljs-inline-prop">'
    replace: '<span class="hljs-inline-prop">@'
```

有关每个可选属性的更多信息，请参见下文。

## 图标

```yaml
include: icon-components/components/intro-icon
```

## 颜色

```yaml
include: icon-components/components/intro-color
```

```hbs
<IconifyIcon @icon="mdi:home" style="color: red;" />
```

有关设置颜色的各种方法，请参阅 [如何在 Iconify for Ember 中更改图标颜色](./color.md)。

## 尺寸

```yaml
include: icon-components/components/intro-size
```

```hbs
<IconifyIcon @icon="mdi:home" style="font-size: 24px;" />
```

有关更改图标尺寸的各种方法，请参阅 [如何在 Iconify for Ember 中更改图标尺寸](./dimensions.md)。

## 变换

```yaml
include: icon-components/components/intro-transform
```

有关更多详细信息，请参阅 [如何在 Iconify for Ember 中变换图标](./transform.md)。

## onLoad

`include icon-components/components/onload`

## SVG 元素属性

任何不以 `[prop]@` 开头的属性都会传递给 SVG 元素。您可以使用它来设置样式、类名、id，甚至覆盖组件生成的属性。

```hbs
<IconifyIcon @icon="mdi:home" id="test" />
```

此行为与其他组件不同。Ember 明确区分了组件属性和元素属性，而其他框架则没有。

## 函数 {#functions}

该组件导出了各种函数，开发者可以使用它们来控制图标。

在其他框架中，您可以从主文件导入函数，但 Ember 的行为有所不同。在 Ember 组件中，函数需要直接从组件文件导入：`[file]@iconify/ember/components/iconify-icon`。

函数分为以下几组（点击函数名称查看更多详细信息和示例）：

### 检查可用图标 {#getting-icons}

```yaml
include: icon-components/components/functions-list/getting-icons
```

### 添加图标 {#adding-icons}

```yaml
include: icon-components/components/functions-list/adding-icons
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
