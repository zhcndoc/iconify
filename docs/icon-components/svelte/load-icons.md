```yaml
title: 'Iconify for Svelte 函数：loadIcons'
functions:
  getIcon: './get-icon.md'
  loadIcon: './load-icon.md'
types:
  IconifyIconName: './icon-name.md'
```

# Iconify for Svelte 函数：loadIcons

本教程属于 [Iconify for Svelte 函数教程](./index.md#functions) 的一部分。

`include icon-components/functions/load-icons/intro`

## 使用方法

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
  - search: react
    replace: svelte
```

`[func]loadIcons()` 的异步版本：

```yaml
src: icon-components/common/load-icons-async.js
replacements:
  - search: react
    replace: svelte
```

## Svelte 组件示例

此示例在图标加载期间渲染 `[html]<slot />`，以模拟 React 组件的行为。由于 Svelte 中存在一个 bug，第三方组件无法使用 `[html]<slot />`，因此 Svelte 组件的行为与其他组件略有不同。

```yaml
src: icon-components/common/get-icon.svelte
```

如果您只想加载单个图标，还可以使用更简单的 `[func]loadIcon()`。
