```yaml
title: 'Iconify SVG 框架函数：disableCache'
functions:
  enableCache: './enable-cache.md'
  addIcon: './add-icon.md'
  addCollection: './add-collection.md'
```

# SVG 框架函数：disableCache

本教程是 [Iconify SVG 框架函数教程](./functions.md#api) 的一部分。

```yaml
include: icon-components/functions/cache/intro-disable
replacements:
  - search: component
    replace: SVG 框架
```

## 用法

`include icon-components/functions/cache/props`

## 存储类型

`include icon-components/functions/cache/storage-types`

## 示例

```js
// 禁用 localStorage 中的缓存
Iconify.disableCache('local');
```

另一个示例：

```js
// 禁用所有缓存
Iconify.disableCache('all');
```

## 注意事项

`include icon-components/functions/cache/notes`
