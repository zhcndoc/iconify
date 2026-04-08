```yaml
title: Iconify SVG 框架中的垂直对齐
```

# 垂直对齐

本教程是 [Iconify SVG 框架教程](./index.md) 的一部分。

`include icon-components/vertical-align-intro`

## 内联属性

要为图标添加 `[prop]vertical-align`，有以下几种选项：

- 将 `[str]iconify-inline` 添加到类列表中（或将 `[str]iconify` 替换为 `[str]iconify-inline`）。
- 添加 `[attr]data-inline` 属性。
- 添加值为 `[num]-0.125em` 的 `[prop]vertical-align` 样式。

```yaml
src: icon-components/common/inline.html
demo: true
class: iconify-inline-block
```

`include icon-components/vertical-align-footer`
