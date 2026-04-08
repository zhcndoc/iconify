```yaml
title: Iconify SVG Framework Functions
replacements:
  - code: '"2.0.0"'
    value: '"${svg-framework.version.full}"'
  - code: "@iconify/iconify@2"
    value: "${svg-framework.import}"
types:
  IconifyJSON: "../../types/iconify-json.md"
  IconifyIcon: "../../types/iconify-icon.md"
  IconifyInfo: "../../types/iconify-json-metadata.md"
functions:
  addCollection: "./add-collection.md"
  addIcon: "./add-icon.md"
  iconExists: "./icon-exists.md"
  iconLoaded: "./icon-exists.md"
  listIcons: "./list-icons.md"
  getIcon: "./get-icon.md"
  renderSVG: "./render-svg.md"
  renderHTML: "./render-html.md"
  renderIcon: "./render-icon.md"
  replaceIDs: "./replace-ids.md"
  scan: "./scan.md"
  observe: "./observe.md"
  stopObserving: "./stop-observing.md"
  pauseObserver: "./pause-observer.md"
  resumeObserver: "./resume-observer.md"
  loadIcons: "./load-icons.md"
  loadIcon: "./load-icon.md"
  enableCache: "./enable-cache.md"
  disableCache: "./disable-cache.md"
  addAPIProvider: "./add-api-provider.md"
  buildIcon: "./build-icon.md"
  fetFetch: "./set-fetch.md"
```

# SVG 框架函数

本教程是 [Iconify SVG 框架教程](./index.md) 的一部分。

Iconify SVG 框架提供了许多函数，你可以在脚本中使用它们来调用 SVG 框架。

## 使用方法

有两种使用 SVG 框架函数的方法：

- 通过使用 `[var]Iconify` 全局变量。
- 如果你将 SVG 框架与脚本一起打包，可以从 `[npm]@iconify/iconify@2` 导入 `[var]Iconify`（或你想导入的具名函数）。

使用 `[func]loadIcon` 函数的示例：

```yaml
src: icon-components/iconify/load-icon-global.html
title: "Browser:"
replacements:
  - code: "/2/2.0.0/"
    value: "/${svg-framework.version.major}/${svg-framework.version.full}/"
extra:
  - src: icon-components/iconify/load-icon-promise.js
    title: "Node.js:"
```

即使你使用打包方式（如第二个示例所示），`[var]Iconify` 全局变量依然可用，因为无论以何种方式使用，SVG 框架都会导出函数并创建全局变量。这意味着无论你如何导入 SVG 框架，都可以使用第一个示例中展示的方法。

## 函数

函数分为以下几组：

- [通用函数](#general)。
- [获取图标](#getting-icons)。
- [添加图标](#adding-icons)。
- [渲染图标](#render)。
- [扫描和监听 DOM](#scanner)。
- [API 函数](#api)。
- [内部 API 函数](#internal)。

点击函数名称查看更多详情和示例。

## 通用函数 {#general}

本节仅包含一个函数：

- `[func]getVersion()`。此函数返回 SVG 框架的版本字符串。`[str]"2.0.0"`

## 获取图标 {#getting-icons}

```yaml
include: icon-components/components/functions-list/getting-icons
```

## 添加图标 {#adding-icons}

```yaml
include: icon-components/components/functions-list/adding-icons
replacements:
  - search: "component"
    replace: "SVG framework"
```

## 渲染图标 {#render}

用于生成 SVG 或数据的函数：

- `[func]renderSVG(name, customisations?)`。创建 `[tag]svg` 元素。
- `[func]renderHTML(name, customisations?)`。返回 `[tag]svg` 字符串。
- `[func]renderIcon(name, customisations?)`。生成上述函数所使用的数据。如果你希望自己生成 `[tag]svg`，可以使用此函数。数据包含 `[tag]svg` 的属性和内部 HTML。
- `[func]buildIcon(data, customisations)` 与 `[func]renderIcon()` 相同，但将图标数据作为第一个参数

## 扫描和监听 DOM {#scanner}

每当 DOM 发生变化时，SVG 框架都会自动进行扫描。但是，存在一些限制：

- 监听器只能监听 `[prop]document.body` 的子元素。
- SVG 框架会在每次更改后扫描 DOM（尽管扫描会进行节流处理，以避免过于频繁）。

在某些情况下，你可能希望暂时禁用监听器，或扫描不属于 DOM 的元素（例如 Shadow DOM）。你可以使用以下函数：

- `[func]scan(root?)`。扫描 DOM 或自定义元素中的占位符元素。
- `[func]observe(root)`。监听自定义根元素。
- `[func]stopObserving(root)`。停止监听自定义根元素。你可以将 `[prop]document.body` 作为参数调用它，以停止监听 `[prop]document.body`。
- `[func]pauseObserver(root?)`。暂停监听器。
- `[func]resumeObserver(root?)`。恢复监听器。

## 辅助函数 {#helper}

公开了一些辅助函数，因为在创建图标选择器等工具时它们可能会很有用：

- `[func]calculateSize()`。用于计算图标尺寸的辅助函数。当仅设置 `[attr]height` 时用于计算 `[attr]width`，反之亦然。
- `[func]replaceIDs(html)`。随机化生成字符串中的 ID。当基于 `[func]renderIcon()` 或 `[func]getIcon` 返回的数据渲染图标时，应使用此函数以确保每个图标内部的元素具有唯一的 ID。对于由 `[func]renderSVG()` 和 `[func]renderHTML()` 生成的图标，不需要此函数。

## API 函数 {#api}

```yaml
include: icon-components/components/functions-list/api
```

## 内部 API 函数 {#internal}

`include icon-components/components/functions-list/internal-intro`

所有内部 API 函数都作为 `[var]Iconify._api` 对象的属性公开，并且仅在包含 API 时可用：

- `[func]getAPI()`。返回内部 API 模块。
- `[func]getAPIConfig()`。返回 API 配置。
- `[func]setAPIModule(provider)`。为提供商设置 API 模块。这是一个实验性函数，旨在用于自定义 API 提供商。API 提供商功能正在开发中。
