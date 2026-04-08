```yaml
title: 'Iconify 图标 Web 组件函数：addIcon'
types:
  IconifyJSON: '../types/iconify-json.md'
  IconifyIcon: '../types/iconify-icon.md'
functions:
  addCollection: './add-collection.md'
```

# Web 组件函数：addIcon

本教程属于 [Iconify Icon Web 组件教程](./index.md#functions) 的一部分。

`include icon-components/functions/add-icon/intro`

## 用法

`include icon-components/functions/add-icon/props`

## 示例

```yaml
src: icon-components/common/add-icon.js
replacements:
  - search: '@iconify/react'
    replace: 'iconify-icon'
```

`include icon-components/functions/add-icon/notes`

## API 提供商

`include icon-components/functions/add-icon/provider`

示例：

```yaml
src: icon-components/common/add-icon2.js
replacements:
  - search: '@iconify/react'
    replace: 'iconify-icon'
```

上述代码添加了以下图标：

- `[prop]provider` 为 `[str]custom`。
- `[prop]prefix` 为 `[str]md`。
- `[prop]name` 为 `[str]test`。

在 HTML 中，可以像这样使用该图标：

```html
<iconify-icon icon="@custom:md:test"></iconify-icon>
```

`include icon-components/functions/add-icon/custom`

## 单个图标

`include icon-components/functions/add-icon/footer`
