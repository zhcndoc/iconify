```yaml
title: Iconify Utils 中的 mergeIconData()
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
  IconifyOptional: '/docs/types/iconify-icon.md#iconify-optional'
```

# mergeIconData()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]mergeIconData()` 用于合并图标与别名的数据。

## 合并逻辑

在组合图标和别名时，属性无法直接合并。这是因为别名的变换是相对于父图标的变换而言的。

例如，若图标旋转 90 度，别名也旋转 90 度，则最终结果为旋转 180 度。水平翻转与垂直翻转同理。

## 用法

该函数包含以下参数：

- `[prop]icon`，`[type]IconifyIcon`。图标数据。
- `[prop]alias`，`[type]IconifyOptional`。别名数据。

函数返回合并后的图标数据。

## 示例

```yaml
src: libraries/utils/merge-icon-data.ts
title: 'usage.ts'
extra:
  - src: libraries/utils/merge-icon-data.json
    title: 'Result 1:'
  - src: libraries/utils/merge-icon-data2.json
    title: 'Result 2:'
```
