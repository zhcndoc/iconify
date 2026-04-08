```yaml
title: 'Iconify for React 函数：addIcon'
types:
  IconifyJSON: '../../types/iconify-json.md'
  IconifyIcon: '../../types/iconify-icon.md'
functions:
  addCollection: './add-collection.md'
```

# Iconify for React 函数：addIcon

本教程属于 [Iconify for React 函数教程](./index.md#functions) 的一部分。

`include icon-components/functions/add-icon/intro`

## 用法

`include icon-components/functions/add-icon/props`

## 示例

```yaml
src: icon-components/common/add-icon.js
```

`include icon-components/functions/add-icon/notes`

## API 提供商

`include icon-components/functions/add-icon/provider`

示例：

```yaml
src: icon-components/common/add-icon2.js
```

上述代码添加了以下图标：

- `[prop]provider` 是 `[str]custom`。
- `[prop]prefix` 是 `[str]md`。
- `[prop]name` 是 `[str]test`。

在组件 JSX 中，可以像这样使用该图标：

```jsx
<Icon icon="@custom:md:test" />
```

`include icon-components/functions/add-icon/custom`

## 单个图标

`include icon-components/functions/add-icon/footer`
