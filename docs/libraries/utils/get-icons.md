```yaml
title: getIcons() in Iconify Utils
types:
  IconifyJSON: '/docs/types/iconify-json.md'
```

# getIcons()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]getIcons()` 用于从图标集中检索少量图标。

## 用法

该函数包含以下参数：

- `[prop]data`，`[type]IconifyJSON`。图标集数据。
- `[prop]icons`，`[type]string[]`。要检索的图标名称列表。
- `[prop]nof_found`，`[type]boolean`。可选。如果设置，图标集中不存在的图标将被添加到结果的 `[prop]not_found` 属性中。默认值为 `false`。

## 示例

```yaml
src: libraries/utils/get-icons.ts
title: 'usage.ts'
extra:
  - src: libraries/utils/get-icons.json
    title: 'Result:'
```
