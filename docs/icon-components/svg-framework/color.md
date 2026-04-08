```yaml
title: 在 Iconify SVG 框架中更改图标颜色
```

# 图标颜色

本教程是 [Iconify SVG 框架教程](./index.md) 的一部分。

您只能更改单色图标的颜色。某些图标（例如表情符号）具有硬编码的调色板，无法更改。

要更改单色图标的颜色，只需更改文本颜色即可。

```yaml
src: icon-components/iconify/index-color.html
css: iconify/index-color.scss
demo: true
class: iconify-index-color
```

颜色仅适用于没有调色板的图标。具有调色板的图标（如上面示例中的 `[icon]noto:paintbrush`）的颜色无法更改。

## 演示解析

在上面的演示中，某些图标具有 `[attr]class="iconify-inline"`，但在样式表中它们是通过 `[prop].iconify` 进行定位的。这需要稍作解释。

当图标由 Iconify SVG 框架渲染时，所有图标都会获得 `[str]iconify` 类，即使原本没有。这意味着如果占位符具有 `[attr]class="iconify-inline"`，则 `[tag]svg` 将具有 `[attr]class="iconify iconify-inline"`（以及其他一些额外的类）。所有自定义类也会从占位符传递到 `[tag]svg`。

为什么图标使用 `[attr]class="iconify-inline"`？这在 [内联模式教程](./inline.md) 中有详细说明。

## 设置颜色的各种方法

您可以像更改文本颜色一样更改图标颜色。

上面的示例展示了如何使用样式表更改颜色。

您也可以使用内联样式更改颜色：

```html
<span class="iconify" data-icon="ion:umbrella-sharp" style="color: red"></span>
```

## 定位特定图标

要定位特定图标，您可以：

### 按名称定位图标

```css
.iconify[data-icon='mdi:home'] {
	color: red;
}
```

这会将所有具有 `[attr]data-icon="mdi:home"` 的图标的颜色更改为红色。

### 按前缀定位图标

```css
.iconify--mdi {
	color: red;
}
```

当 SVG 框架渲染 `[tag]svg` 时，它会将当前提供者和前缀添加到类列表中。请参阅下面的演示。

### 自定义类

您可以向占位符添加自定义类：

```html
<span class="iconify red-icon" data-icon="mdi:home"></span>
```

然后您可以通过该类名定位图标：

```css
.red-icon {
	color: red;
}
```

### 示例

```yaml
src: icon-components/iconify/prefix-color.html
hint: '占位符 HTML'
extra:
  - src: icon-components/iconify/prefix-color-svg.html
    hint: '渲染后的 SVG'
  - src: icon-components/iconify/prefix-color.css
```

## RGBA 和 HSLA 颜色 {#opacity}

`include icon-components/color-rgba`

## fill 和 stroke

`include icon-components/color-fill`
