```yaml
title: "Iconify Icon Web 组件函数：buildIcon"
types:
  IconifyIcon: "../types/iconify-icon.md"
functions:
  getIcon: "./get-icon.md"
  loadIcon: "./load-icon.md"
  iconExists: "./icon-exists.md"
  iconLoaded: "./icon-exists.md"
```

# Web 组件函数：buildIcon

本教程属于 [Iconify Icon Web 组件教程](./index.md#functions) 的一部分。

`include icon-components/functions/build-icon/intro-component`

## 用法

`include icon-components/functions/build-icon/usage`

## 结果

`include icon-components/functions/build-icon/result`

## 自定义选项

第二个参数为可选的图标自定义配置。可用的自定义选项如下：

`include icon-components/customisations`

有关尺寸的更多详细信息，请参阅[图标尺寸文档](./dimensions.md)。

有关变换的更多详细信息，请参阅[图标变换文档](./transform.md)。

## 示例

```yaml
src: icon-components/common/build-icon.js
replacements:
  - search: "@iconify/svelte"
    replace: "iconify-icon"
extra:
  - src: icon-components/common/build-icon.json
    title: "Result:"
```
