```yaml
title: 在 Iconify Icon Web 组件中更改图标尺寸
```

# 图标尺寸

本教程是 [Iconify Icon Web 组件教程](./index.md) 的一部分。

```yaml
include: icon-components/components/size-intro
```

```yaml
src: icon-components/icon/size-icon.html
css: icon/size.scss
demo: true
class: icon-size
```

如果你想在 CSS 中使用 `[prop]width` 和 `[prop]height` 控制图标尺寸，请参阅下方的 [如何移除图标尺寸](#unset) 部分。

## 单位

`[prop]width` 和 `[prop]height` 均可作为属性和特性使用。

`[num]24px` 图标的示例：

```html
<iconify-icon icon="mdi:home" height="24"></iconify-icon>
<iconify-icon icon="mdi:home" height="24px"></iconify-icon>
<iconify-icon
	icon="mdi:home"
	style="font-size: 16px;"
	height="1.5em"
></iconify-icon>
```

## 关键字 "auto" {#auto}

```yaml
include: icon-components/components/size-auto
```

```html
<iconify-icon icon="mdi:home" height="auto"></iconify-icon>
```

## 关键字 "none" 和 "unset" {#unset}

```yaml
include: icon-components/components/size-unset
```

```yaml
src: icon-components/icon/size-unset.html
demo: true
class: 'icon-size icon-size--unset'
```

```yaml
include: icon-components/components/size-unset-footer
```

## 仅设置宽度或高度

在上面的示例中，所有图标仅使用了 `[prop]height`。

`include icon-components/size-one`

### 示例

`include icon-components/size-example`

## 对齐方式

`include icon-components/align-header`

```yaml
src: icon-components/icon/alignment.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

`include icon-components/align-behavior`

你可以使用 `[attr]preserveAspectRatio` 属性控制对齐方式。默认值为 `[str]xMidYMid slice`。

### 裁剪

浏览器不仅可以在图标周围添加空白以使其适应边界框，还可以裁剪掉无法适应的部分。

要裁剪图标的部分区域，请向图标添加 `[attr]preserveAspectRatio="xMidYMid slice"`：

```yaml
src: icon-components/icon/alignment-slice.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

### 水平对齐 {#horizontal}

当...

- 图标过宽时...
- 图标过高且启用了裁剪（slice）时...

...你可以水平对齐图标。

要水平对齐图标，请将 `[attr]preserveAspectRatio` 中的 `[str]xMid` 更改为 `[str]xMin` 或 `[str]xMax`：

对齐宽图标的示例：

```yaml
src: icon-components/icon/alignment-horizontal.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

启用裁剪时对齐高图标的示例：

```yaml
src: icon-components/icon/alignment-horizontal-slice.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

### 垂直对齐 {#vertical}

当...

- 图标过高时...
- 图标过宽且启用了裁剪（slice）时...

...你可以垂直对齐图标。

要垂直对齐图标，请将 `[attr]preserveAspectRatio` 中的 `[str]YMid` 更改为 `[str]YMin` 或 `[str]YMax`：

对齐高图标的示例：

```yaml
src: icon-components/icon/alignment-vertical.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

启用裁剪时对齐宽图标的示例：

```yaml
src: icon-components/icon/alignment-vertical-slice.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

### 垂直与水平对齐 {#full-alignment}

你可以同时为图标添加水平和垂直对齐。

其中一种对齐方式将不会生效。例如，如果图标过高，水平对齐将被忽略，因为图标已经同时与左侧和右侧对齐。

```yaml
src: icon-components/icon/alignment-both.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```
