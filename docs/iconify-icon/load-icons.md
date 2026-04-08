```yaml
title: 'Iconify Icon Web 组件函数：loadIcons'
functions:
  getIcon: './get-icon.md'
  loadIcon: './load-icon.md'
types:
  IconifyIconName: './icon-name.md'
```

# Web 组件函数：loadIcons

本教程属于 [Iconify Icon Web 组件教程](./index.md#functions) 的一部分。

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
    replace: 'iconify-icon'
```

`[func]loadIcons()` 的异步版本：

```yaml
src: icon-components/common/load-icons-async.js
replacements:
  - search: '@iconify/react'
    replace: 'iconify-icon'
```

如果您只想加载单个图标，还可以使用更简便的 `[func]loadIcon()`。
