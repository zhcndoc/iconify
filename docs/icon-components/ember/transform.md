```yaml
title: 在 Iconify for Ember 中变换图标
```

# 变换

本教程是 [Iconify for Ember 教程](./index.md) 的一部分。

`include icon-components/transform-intro`

## CSS 与 Iconify 变换 {#css}

`include icon-components/transform-compare`

示例：

```yaml
src: icon-components/ember/rotate-comparison.hbs
demo: icon-components/common/rotate-comparison.html
demoHint: 使用 box-shadow 显示图标尺寸
class: highlight-box
```

`include icon-components/transform-compare-footer`

## 翻转

```yaml
include: icon-components/components/transform-flip
```

```yaml
src: icon-components/ember/flip.hbs
hint: 使用 "flip" 属性
demo: icon-components/common/flip.html
extra:
  - src: icon-components/ember/flip-alt.hbs
    hint: 使用 "hFlip" 和 "vFlip" 属性
```

## 旋转

`include icon-components/components/transform-rotate`

```yaml
src: icon-components/ember/rotate.hbs
demo: icon-components/common/rotate.html
```

## 旋转与翻转

`include icon-components/components/transform-footer`
