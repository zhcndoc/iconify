```yaml
title: Export icon set
types:
  IconSet: './index.md'
  IconifyJSON: '/docs/types/iconify-json.md'
```

# export()

此函数属于 [Iconify Tools](../index.md) 中的 `[type]IconSet` 类。

函数 `[func]export()` 将图标集导出为 `[type]IconifyJSON` 对象。

## 用法

该函数包含以下参数：

- `[prop]validate`，`[type]boolean` 类型。可选。如果启用，将在导出前验证图标。

函数返回 `[type]IconifyJSON` 对象。

结果包含所有元数据。如果图标集包含 information 属性，导出时将自动更新信息块中的图标总数。

## 示例

```yaml
src: libraries/tools/icon-set/export.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon-set/export.json
    title: 'Result:'
```
