```yaml
title: 加载图标集
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconSet: './index.md'
functions:
  mergeIconSets: '../index.md'
  validateIconSet: '../../utils/validate-icon-set.md'
```

# load()

此函数属于 [Iconify Tools](../index.md) 中的 `[type]IconSet` 类。

函数 `[func]load()` 从 `[type]IconifyJSON` 数据加载图标集。

它会替换现有的图标集数据，因此与创建新的 `[type]IconSet` 实例完全相同。如果您想合并图标集，请参阅 `[func]mergeIconSets()` 函数。

## 验证

该函数不会验证图标集。如果您不确定数据来源，需要使用 [Iconify Utils](../../utils/index.md) 中的 `[func]validateIconSet()` 进行验证。

## 示例

```yaml
src: libraries/tools/icon-set/load.ts
title: 'example.ts'
```
