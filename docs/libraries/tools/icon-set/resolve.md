```yaml
title: 解析图标集中的图标
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
  FullIconifyIcon: '../../utils/full-iconify-icon.md'
  IconSet: './index.md'
```

# resolve()

此函数是 [Iconify Tools](../index.md) 中 `[type]IconSet` 类的一部分。

函数 `[func]resolve()` 用于检索 `[type]IconifyIcon` 格式的图标数据。

## 用法

该函数具有以下参数：

- `[prop]name`，`[type]string` 类型。图标名称。
- `[prop]full`，`[type]boolean` 类型。可选参数。如果为 `true`，函数将返回完整的图标数据（`[type]FullIconifyIcon`）。

函数返回 `[type]IconifyIcon`（如果第二个参数为 `true` 则返回 `[type]FullIconifyIcon`），出错时返回 `[type]null`。

## 示例

```yaml
src: libraries/tools/icon-set/resolve.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon-set/resolve1.json
    title: 'Results for "debug-pause":'
  - src: libraries/tools/icon-set/resolve2.json
  - src: libraries/tools/icon-set/resolve3.json
    title: 'Results for "triangle-right":'
  - src: libraries/tools/icon-set/resolve4.json
  - src: libraries/tools/icon-set/resolve5.json
    title: 'Results for "plus":'
  - src: libraries/tools/icon-set/resolve6.json
```
