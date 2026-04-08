```yaml
title: 'Iconify for Vue 函数：addIcon'
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
functions:
  addCollection: './add-collection.md'
```

# Iconify for Vue 函数：addIcon

本教程属于 [Iconify for Vue 函数教程](./index.md#functions) 的一部分。

`include icon-components/functions/add-icon/intro`

## 用法

`include icon-components/functions/add-icon/props`

## 示例

```yaml
src: icon-components/common/add-icon.js
replacements:
  - search: react
    replace: vue
```

`include icon-components/functions/add-icon/notes`

## API 提供方

`include icon-components/functions/add-icon/provider`

示例：

```yaml
src: icon-components/common/add-icon2.js
replacements:
  - search: react
    replace: vue
```

上述代码添加了以下图标：

- `[prop]provider` 为 `[str]custom`。
- `[prop]prefix` 为 `[str]md`。
- `[prop]name` 为 `[str]test`。

在组件模板中，可以像这样使用该图标：

```jsx
<Icon icon="@custom:md:test" />
```

`include icon-components/functions/add-icon/custom`

## 单个图标

`include icon-components/functions/add-icon/footer`
