```yaml
title: 'Iconify for React 函数：addCollection'
types:
  IconifyJSON: '../../types/iconify-json.md'
  IconifyIcon: '../../types/iconify-icon.md'
functions:
  addIcon: './add-icon.md'
```

# Iconify for React 函数：addCollection

本教程属于 [Iconify for React 函数教程](./index.md#functions) 的一部分。

`include icon-components/functions/add-collection/intro`

## 用法

`include icon-components/functions/add-collection/props`

## 示例

```yaml
src: icon-components/common/add-collection.js
```

```yaml
src: icon-components/common/add-collection2.js
```

`include icon-components/functions/add-collection/notes`

## API 提供者

`include icon-components/functions/add-collection/provider`

示例：

```yaml
src: icon-components/common/add-collection3.js
```

上述代码仅添加了一个图标：

- `[prop]provider` 是 `[str]custom`。
- `[prop]prefix` 是 `[str]md`。
- `[prop]name` 是 `[str]test`。

在组件 JSX 中，可以按如下方式使用该图标：

```jsx
<Icon icon="@custom:md:test" />
```

`include icon-components/functions/add-collection/custom`

## 单个图标

`include icon-components/functions/add-collection/footer`
