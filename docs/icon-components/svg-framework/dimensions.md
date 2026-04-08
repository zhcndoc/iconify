```yaml
title: 在 Iconify SVG 框架中更改图标尺寸
```

# 图标尺寸

本教程是 [Iconify SVG 框架教程](./index.md) 的一部分。

默认情况下，图标高度设置为 `[str]"1em"`，图标宽度会根据图标的宽高比动态调整。

这使得更改图标尺寸变得非常容易，只需在样式表或内联样式中更改 `[attr]font-size` 即可，就像使用图标字体一样：

```yaml
src: icon-components/iconify/size-demo.html
css: iconify/size-demo.scss
demo: true
class: iconify2-size-demo
```

## data- 属性 {#data}

你也可以通过使用 `[attr]data-width` 和 `[attr]data-height` 属性来设置尺寸。此时 `[prop]font-size` 将不会对图标产生影响，除非你将高度设置为相对于 `[prop]font-size` 的单位，例如 `[str]em`。

```yaml
src: icon-components/iconify/size-demo-data.html
demo: true
```

在此示例中，第一个图标的高度为 `[num]24px`，第二个图标的高度为 `[num]36px`（`[num]2 * 18px`），第三个图标的高度为 `[num]72px`。

## 关键字 "none" 和 "unset" {#unset}

```yaml
include: icon-components/components/size-unset
```

```yaml
src: icon-components/iconify/size-unset.html
demo: icon-components/common/size-unset.html
class: 'icon-size icon-size--unset'
```

```yaml
include: icon-components/components/size-unset-footer
```

这些关键字只能与 `[attr]data-width` 和 `[attr]data-height` 配合使用。如果将它们设置为 `[attr]width` 或 `[attr]height`，则不会生效。

## 仅设置宽度或高度

在上面的示例中，所有图标都仅使用了 `[prop]height`。

`include icon-components/size-one`

### 示例

`include icon-components/size-example`

## 对齐方式

`include icon-components/align-header`

```yaml
src: icon-components/common/alignment.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

`include icon-components/align-behavior`
