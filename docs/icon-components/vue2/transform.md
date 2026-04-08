```yaml
title: Transforming Icon in Iconify for Vue 2
```

# 变换

本教程是 [Iconify for Vue 2 教程](./index.md) 的一部分。

`include icon-components/transform-intro`

## CSS 与 Iconify 变换 {#css}

`include icon-components/transform-compare`

示例：

```yaml
src: icon-components/common/rotate-comparison.vue
demo: icon-components/common/rotate-comparison.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
replacements:
  - search: iconify/vue
    replace: iconify/vue2
```

`include icon-components/transform-compare-footer`

## 翻转

```yaml
include: icon-components/components/transform-flip
replacements:
  - search: hFlip
    replace: horizontalFlip
  - search: vFlip
    replace: verticalFlip
```

```yaml
src: icon-components/common/flip.vue
hint: Using "flip" attribute
demo: icon-components/common/flip.html
extra:
  - src: icon-components/common/flip-alt.vue
    hint: Using "horizontalFlip" and "verticalFlip" attributes
replacements:
  - search: iconify/vue
    replace: iconify/vue2
```

## 旋转

`include icon-components/components/transform-rotate`

```yaml
src: icon-components/common/rotate.vue
demo: icon-components/common/rotate.html
replacements:
  - search: iconify/vue
    replace: iconify/vue2
```

## 旋转与翻转

`include icon-components/components/transform-footer`

## 属性名称

在其他组件中，翻转属性为 `[attr]hFlip` 和 `[attr]vFlip`。Vue 对以 `[attr]v-` 开头的属性有特殊处理，因此如果不使用复杂的语法，将无法使用 `[attr]vFlip`（同样适用于 `[attr]vAlign` 属性）属性。

因此，为了保持一致性，Vue 组件使用了更长的属性名称：使用 `[attr]verticalFlip` 代替 `[attr]vFlip`，使用 `[attr]horizontalFlip` 代替 `[attr]hFlip`。
