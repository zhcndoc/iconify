```yaml
title: 'Iconify Icon Web 组件函数：addCollection'
types:
  IconifyJSON: '../types/iconify-json.md'
  IconifyIcon: '../types/iconify-icon.md'
functions:
  addIcon: './add-icon.md'
```

# Web 组件函数：addCollection

本教程是 [Iconify Icon Web 组件教程](./index.md#functions) 的一部分。

`include icon-components/functions/add-collection/intro`

## 用法

`include icon-components/functions/add-collection/props`

## 示例

```yaml
src: icon-components/common/add-collection.js
replacements:
  - search: '@iconify/react'
    replace: 'iconify-icon'
```

```yaml
src: icon-components/common/add-collection2.js
replacements:
  - search: '@iconify/react'
    replace: 'iconify-icon'
```

`include icon-components/functions/add-collection/notes`

## API 提供者

`include icon-components/functions/add-collection/provider`

示例：

```yaml
src: icon-components/common/add-collection3.js
replacements:
  - search: '@iconify/react'
    replace: 'iconify-icon'
```

上述代码仅添加了一个图标：

- `[prop]provider` 为 `[str]custom`。
- `[prop]prefix` 为 `[str]md`。
- `[prop]name` 为 `[str]test`。

在 HTML 中，可以像这样使用该图标：

```html
<iconify-icon icon="@custom:md:test"></iconify-icon>
```

`include icon-components/functions/add-collection/custom`

## 单个图标

`include icon-components/functions/add-collection/footer`
