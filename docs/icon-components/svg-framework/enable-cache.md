```yaml
title: 'Iconify SVG 框架函数：enableCache'
functions:
  disableCache: './disable-cache.md'
  addIcon: './add-icon.md'
  addCollection: './add-collection.md'
```

# SVG 框架函数：enableCache

本教程是 [Iconify SVG 框架函数教程](./functions.md#api) 的一部分。

```yaml
include: icon-components/functions/cache/intro-enable
replacements:
  - search: 组件
    replace: SVG 框架
```

## 用法

`include icon-components/functions/cache/props-enable`

## 存储类型

`include icon-components/functions/cache/storage-types`

## 示例

```js
// 在 localStorage 中启用缓存
Iconify.enableCache('local');
```

另一个示例：

```js
// 禁用所有缓存
Iconify.enableCache('all', false);
```

## 注意事项

`include icon-components/functions/cache/notes`
