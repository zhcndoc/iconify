```yaml
title: 'Iconify for Ember 函数：loadIcons'
types:
  IconifyIconName: './icon-name.md'
functions:
  getIcon: './get-icon.md'
  loadIcon: './load-icon.md'
```

# Iconify for Ember 函数：loadIcons

本教程属于 [Iconify for Ember 函数教程](./index.md#functions) 的一部分。

`include icon-components/functions/load-icons/intro`

## 用法

`include icon-components/functions/load-icons/props`

## 图标列表

`include icon-components/functions/load-icons/props-icons`

## 回调函数

`include icon-components/functions/load-icons/props-callback`

## IconifyIconName 类型

`include types/iconify-icon-name`

## 示例

加载单个图标的简单回调：

```yaml
src: icon-components/common/load-icons.js
replacements:
  - search: '@iconify/react'
    replace: '@iconify/ember/components/iconify-icon'
```

`[func]loadIcons()` 的异步版本：

```yaml
src: icon-components/common/load-icons-async.js
replacements:
  - search: '@iconify/react'
    replace: '@iconify/ember/components/iconify-icon'
```

如果您只想加载单个图标，还可以使用更简单的 `[func]loadIcon()`。
