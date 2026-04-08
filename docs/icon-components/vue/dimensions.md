```yaml
title: 在 Iconify for Vue 中更改图标尺寸
```

# 图标尺寸

本教程是 [Iconify for Vue 教程](./index.md) 的一部分。

```yaml
include: icon-components/components/size-intro
```

```yaml
src: icon-components/common/size.vue
css: components/size.scss
demo: true
class: components-size
```

如果您想在 CSS 中使用 `[prop]width` 和 `[prop]height` 控制图标大小，请参阅下方的 [如何移除图标尺寸](#unset) 部分。

## 单位

```yaml
include: icon-components/components/size-units
```

```vue
<Icon icon="mdi:home" :height="24" />
<Icon icon="mdi:home" height="24" />
<Icon icon="mdi:home" height="24px" />
```

## 关键字 "auto" {#auto}

```yaml
include: icon-components/components/size-auto
```

```vue
<Icon icon="mdi:home" height="auto" />
```

## 关键字 "none" 和 "unset" {#unset}

```yaml
include: icon-components/components/size-unset
```

```yaml
src: icon-components/common/size-unset.vue
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
src: icon-components/common/alignment.vue
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

`include icon-components/align-behavior`
