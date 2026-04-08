```yaml
title: 'Iconify for Ember 函数：loadIcon'
types:
  IconifyIconName: './icon-name.md'
  FullIconifyIcon: '/docs/libraries/utils/full-iconify-icon.md'
functions:
  loadIcons: './load-icons.md'
```

# Iconify for Ember 函数：loadIcon

本教程是 [Iconify for Ember 函数教程](./index.md#functions) 的一部分。

`include icon-components/functions/load-icon/intro`

## 用法

`include icon-components/functions/load-icon/props`

## IconifyIconName 类型

`include types/iconify-icon-name`

## 示例

使用 `[type]Promise` 语法：

```yaml
src: icon-components/common/load-icon.js
replacements:
  - search: '@iconify/react'
    replace: '@iconify/ember/components/iconify-icon'
```

Async/await 语法：

```yaml
src: icon-components/common/load-icon-async.js
replacements:
  - search: '@iconify/react'
    replace: '@iconify/ember/components/iconify-icon'
```

如果您需要加载多个图标，请参阅 `[func]loadIcons()`。
