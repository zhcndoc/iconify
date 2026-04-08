```yaml
title: 在 Iconify for React 中更改图标尺寸
```

# 图标尺寸

本教程是 [Iconify for React 教程](./index.md) 的一部分。

```yaml
include: icon-components/components/size-intro
```

```yaml
src: icon-components/common/size.jsx
css: components/size.scss
demo: true
class: components-size
```

如果您想在 CSS 中使用 `[prop]width` 和 `[prop]height` 控制图标大小，请参阅下方的 [如何移除图标尺寸](#unset) 部分。

## 单位

```yaml
include: icon-components/components/size-units
```

```jsx
<JSXWrapper>
// 数字
<Icon icon="mdi:home" height={24} />
// 不带单位的字符串
<Icon icon="mdi:home" height="24" />
// 带单位的字符串
<Icon icon="mdi:home" height="24px" />
// 带单位的字符串，font-size 为 16px
<Icon icon="mdi:home" height="1.5em" />
</JSXWrapper>
```

## 关键字 "auto" {#auto}

```yaml
include: icon-components/components/size-auto
```

```jsx
<Icon icon="mdi:home" height="auto" />
```

## 关键字 "none" 和 "unset" {#unset}

```yaml
include: icon-components/components/size-unset
```

```yaml
src: icon-components/common/size-unset.jsx
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
src: icon-components/common/alignment.jsx
demo: true
demoHint: 使用 box-shadow 显示图标尺寸
class: highlight-box
```

`include icon-components/align-behavior`
