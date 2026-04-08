```yaml
title: 'Iconify for Vue 函数：addCollection'
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
functions:
  addIcon: './add-icon.md'
```

# Iconify for Vue 函数：addCollection

本教程属于 [Iconify for Vue 函数教程](./index.md#functions) 的一部分。

`include icon-components/functions/add-collection/intro`

## 用法

`include icon-components/functions/add-collection/props`

## 示例

```yaml
src: icon-components/common/add-collection.js
replacements:
  - search: react
    replace: vue
```

```yaml
src: icon-components/common/add-collection2.js
replacements:
  - search: react
    replace: vue
```

`include icon-components/functions/add-collection/notes`

## API 提供者

`include icon-components/functions/add-collection/provider`

示例：

```yaml
src: icon-components/common/add-collection3.js
replacements:
  - search: react
    replace: vue
```

上述代码仅添加了一个图标：

- `[prop]provider` 为 `[str]custom`。
- `[prop]prefix` 为 `[str]md`。
- `[prop]name` 为 `[str]test`。

在组件模板中，可以按如下方式使用该图标：

```jsx
<Icon icon="@custom:md:test" />
```

`include icon-components/functions/add-collection/custom`

## 单个图标

`include icon-components/functions/add-collection/footer`
