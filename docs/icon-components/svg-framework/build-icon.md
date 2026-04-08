```yaml
title: "Iconify SVG 框架函数：buildIcon"
types:
  IconifyIcon: "/docs/types/iconify-icon.md"
functions:
  renderIcon: "./render-icon.md"
  renderSVG: "./render-svg.md"
  renderHTML: "./render-html.md"
  replaceIDs: "./replace-ids.md"
  getIcon: "./get-icon.md"
  loadIcon: "./load-icon.md"
  iconExists: "./icon-exists.md"
  iconLoaded: "./icon-exists.md"
```

# SVG 框架函数：buildIcon

本教程是 [Iconify SVG 框架函数教程](./functions.md#render) 的一部分。

函数 `[func]buildIcon()` 生成 `[func]renderSVG()` 和 `[func]renderHTML()` 函数所使用的数据。

该函数适用于生成 `[tag]svg` 代码的场景。

## 用法

`include icon-components/functions/build-icon/usage`

## 结果

请参阅 `[func]renderIcon()` 函数。

## 与 renderIcon 的区别

该函数与 `[func]renderIcon()` 几乎完全相同，唯一区别在于：第一个参数是图标数据，而非图标名称。

为何存在两个函数？旨在与其他图标组件及旧版 SVG 框架保持兼容。其他组件仅导出 `[func]buildIcon()`，而 SVG 框架自旧版本起便已提供 `[func]renderIcon()`。在内部实现上，`[func]renderIcon()` 复用了 `[func]buildIcon()` 的代码，因此同时保留两者并不会显著增加打包体积。
