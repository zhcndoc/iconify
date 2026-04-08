```yaml
title: 在 Iconify for Ember 中更改图标尺寸
```

# 图标尺寸

本教程是 [Iconify for Ember 教程](./index.md) 的一部分。

```yaml
include: icon-components/components/size-intro
```

```yaml
src: icon-components/ember/size.hbs
css: components/size.scss
demo: icon-components/common/size.html
class: components-size
```

如果您想在 CSS 中使用 `[prop]width` 和 `[prop]height` 控制图标大小，请参阅下方的 [如何移除图标尺寸](#unset) 部分。

## 单位

```yaml
include: icon-components/components/size-units
```

```hbs
<IconifyIcon @icon='mdi:home' @height={{24}} />
<IconifyIcon @icon='mdi:home' @height='24' />
<IconifyIcon @icon='mdi:home' @height='24px' />
<IconifyIcon @icon='mdi:home' @height='1.5em' style='font-size: 16px;' />
```

## 关键字 "auto" {#auto}

```yaml
include: icon-components/components/size-auto
```

```vue
<IconifyIcon @icon="mdi: home;" height="auto" />
```

## 关键字 "none" 和 "unset" {#unset}

```yaml
include: icon-components/components/size-unset
```

```yaml
src: icon-components/ember/size-unset.hbs
demo: icon-components/common/size-unset.html
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
src: icon-components/ember/alignment.hbs
demo: icon-components/common/alignment.html
demoHint: 使用 box-shadow 显示图标尺寸
class: highlight-box
```

`include icon-components/align-behavior`
