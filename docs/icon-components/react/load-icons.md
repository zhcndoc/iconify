```yaml
title: 'Iconify for React 函数：loadIcons'
functions:
  getIcon: './get-icon.md'
  loadIcon: './load-icon.md'
types:
  IconifyIconName: './icon-name.md'
```

# Iconify for React 函数：loadIcons

本教程属于 [Iconify for React 函数教程](./index.md#functions) 的一部分。

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
```

`[func]loadIcons()` 的异步版本：

```yaml
src: icon-components/common/load-icons-async.js
```

如果您只想加载单个图标，还可以使用更易用的 `[func]loadIcon()`。
