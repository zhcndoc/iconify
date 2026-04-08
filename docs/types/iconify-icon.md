```yaml
title: Iconify 图标类型
types:
  IconifyAlias: './iconify-alias.md'
  IconifyJSON: './iconify-json.md'
functions:
  getIconData: '../libraries/utils/get-icon-data.md'
  defaultIconProps: '../libraries/utils/default-icon-props.md'
  getIcon: '../libraries/tools/svg/index.md'
```

# IconifyIcon 类型

所有 Iconify 库都共享通用的对象结构。它们在 `[npm]@iconify/types` NPM 包中被定义为类型。

有关类型的描述和 TypeScript 的简要说明，请参阅[类型文档](./index.md)。

本文介绍了包含单个图标数据的 `[type]IconifyIcon` 类型。

## 用法

`[type]IconifyIcon` 类型中的图标数据通常从 `[type]IconifyJSON` 图标集中提取。

要在代码中提取图标数据，请使用 Iconify Utils 中的 `[func]getIconData()` 函数。[Iconify Utils](/docs/libraries/utils/index.md) 可在任何环境中使用。

要将 SVG 转换为 `[type]IconifyIcon`，你可以使用 Iconify Tools 中 `[type]SVG` 实例的 `[func]getIcon()` 函数。[Iconify Tools](/docs/libraries/tools/index.md) 是一个用于导入和解析图标的 Node.js 包。在导出之前，请确保[清理图标](/docs/libraries/tools/icon/cleanup.md)。

## 结构

`[type]IconifyIcon` 类型是一个简单的对象。它包含两部分：

- `[prop]body`，`[type]string` 类型，包含图标内容，必填。
- 可选的 `[type]IconifyOptional` 属性，包含图标尺寸和基本变换。

基础图标示例：

```yaml
src: types/icon-basic.json
copy: false
```

## 主体

主体包含 `[tag]svg` 的内容，但不包含 `[tag]svg` 标签本身。

不包含 `[tag]svg` 标签的原因如下：

- 可以对内容进行操作，例如旋转或翻转图标。当无需解析整个 `[tag]svg` 时，这会容易得多。
- 它使组件能够完全控制 `[tag]svg` 标签，允许添加/移除自定义属性。
- 便于在各种框架（如 React、Vue、Svelte）中使用，这些框架中 `[tag]svg` 元素是使用框架的原生代码创建的，内容则作为其属性进行设置。

## 可选属性 {#iconify-optional}

有多个属性在多种类型中共享。它们在 `[type]IconifyOptional` 类型中进行了描述。

`include types/iconify-optional`

典型图标数据示例：

```yaml
src: types/icon-basic2.json
copy: false
```

在你的代码中，你可以从 [Iconify Utils](/docs/libraries/utils/index.md) 的 `[var]defaultIconProps` 常量中获取默认值。
