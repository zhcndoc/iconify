```yaml
title: 'Iconify SVG 框架函数：loadIcon'
functions:
  scan: './scan.md'
  loadIcons: './load-icons.md'
types:
  IconifyIconName: './icon-name.md'
  FullIconifyIcon: '/docs/libraries/utils/full-iconify-icon.md'
```

# SVG 框架函数：loadIcon

本教程属于 [Iconify SVG 框架函数教程](./functions.md#api) 的一部分。

```yaml
include: icon-components/functions/load-icon/intro
replacements:
  - search: 'component'
    replace: 'SVG framework'
```

## 用法

`include icon-components/functions/load-icon/props`

## IconifyIconName 类型

`include types/iconify-icon-name`

## 示例

使用 `[type]Promise` 语法：

```yaml
src: icon-components/iconify/load-icon-global.html
replacements:
  - code: '/2/2.0.0/'
    value: '/${svg-framework.version.major}/${svg-framework.version.full}/'
```

Async/await 语法：

```yaml
src: icon-components/iconify/load-icon-await.js
```

如果您想加载多个图标，请参阅 `[func]loadIcons()`。
