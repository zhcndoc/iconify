```yaml
title: 为图标集中的图标分配分类
types:
  IconSet: './index.md'
  IconifyJSON: '/docs/types/iconify-json.md'
  IconCategory: './categories.md'
functions:
  categories: './categories.md'
```

# toggleCategory()

此函数属于 [Iconify Tools](../index.md) 中的 `[type]IconSet` 类。

`[func]toggleCategory()` 函数用于为图标添加分类。

分类用于在显示图标集时过滤图标。

## 用法

该函数包含以下参数：

- `[prop]iconName`，`[type]string`。图标名称。
- `[prop]category`，`[type]string`。分类名称。
- `[prop]add`，`[type]boolean`。如果为 `true`，则将分类添加到图标。如果为 `false`，则从图标中移除分类。

函数执行成功返回 `true`，失败返回 `false`。

## 示例

```yaml
src: libraries/tools/icon-set/list-category.ts
title: 'example.ts'
```
