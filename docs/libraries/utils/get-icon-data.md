```yaml
title: Iconify Utils 中的 getIconData()
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
functions:
  iconToSVG: './icon-to-svg.md'
```

# getIconData()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]getIconData()` 用于从图标集中检索单个图标的数据。

## 用法

该函数包含以下参数：

- `[prop]data`，`[type]IconifyJSON`。图标集数据。
- `[prop]name`，`[type]string`。图标名称。

函数返回类型为 `[type]IconifyIcon` 的图标数据，出错时返回 `null`。

## 示例

```yaml
src: libraries/utils/get-icon.ts
title: 'usage.ts'
demo: libraries/utils/get-icon.html
demoFirst: false
demoTitle: 'Result:'
```
