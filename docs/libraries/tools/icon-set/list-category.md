```yaml
title: 列出图标集中某个类别下的图标
types:
  IconSet: './index.md'
  IconifyJSON: '/docs/types/iconify-json.md'
  IconCategory: './categories.md#type'
functions:
  categories: './categories.md'
```

# listCategory()

此函数属于 [Iconify Tools](../index.md) 中的 `[type]IconSet` 类。

函数 `[func]listCategory()` 用于列出属于某个类别的图标。

在显示图标集时，类别用于过滤图标。

## 用法

该函数包含以下参数：

- `[prop]category`，`[type]string | IconCategory`。类别名称或类别项。

函数返回 `[type]string[]` 类型的图标名称数组。

结果不包含：

- 隐藏的图标（及其变体）。
- 别名。

此函数会自动更新 `[type]IconCategory` 项的 `[prop]count` 属性。如果类别为空，则会从图标集的 `[func]categories` 属性中移除该类别。

## 示例

```yaml
src: libraries/tools/icon-set/list-category.ts
title: 'example.ts'
```
