```yaml
title: 图标集中的分类数据
types:
  IconSet: './index.md'
  IconCategory: './categories.md#type'
functions:
  listCategory: './list-category.md'
```

# 分类

此属性属于 [Iconify Tools](../index.md) 中的 `[type]IconSet` 类。

属性 `[prop]categories` 包含分类列表。

## 结构

属性 `[prop]categories` 是一个由 `[type]IconCategory` 条目组成的 `[type]Set`。

## IconCategory 类型 {#type}

类型 `[type]IconCategory` 包含以下属性：

- `[prop]title`，`[type]string` 类型。分类标题。
- `[prop]count`，`[type]number` 类型。图标数量。

图标数量为近似值，如需获取精确数量，请使用 `[func]listCategory()` 函数。运行 `[func]listCategory()` 会更新 `[type]IconCategory` 条目并删除空分类。
