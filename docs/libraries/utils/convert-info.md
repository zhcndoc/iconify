```yaml
title: Iconify Utils 中的 convertIconSetInfo()
types:
  IconifyInfo: '/docs/types/iconify-info.md'
```

# convertIconSetInfo()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]convertIconSetInfo()` 用于转换并验证图标集信息。

一些旧的图标集可能采用旧版格式的信息，这些格式是在 Iconify 项目迁移到 TypeScript 之前创建的。此函数将同时接受旧版和新版格式，对其进行转换和验证，并返回正确的 `[type]IconifyInfo` 数据。

## 用法

该函数包含以下参数：

- `[prop]data`，`[type]unknown`。图标集信息，可以是旧版对象或 `[type]IconifyInfo`。
- `[prop]expectedPrefix`，`[type]string`。可选。如果设置了该参数，且源对象的 `[prop]prefix` 属性值与之不同，函数将抛出错误。当旧版信息可能不正确时，可使用此参数。

函数返回值：

- 成功时返回 `[type]IconifyInfo` 对象。
- 出错时返回 `[type]null`。

## 示例

```yaml
src: libraries/utils/convert-info.ts
title: 'usage.ts'
extra:
  - src: libraries/utils/convert-info.json
    title: 'Result:'
```
