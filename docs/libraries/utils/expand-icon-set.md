```yaml
title: Iconify Utils 中的 expandIconSet()
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
  IconifyOptional: '/docs/types/iconify-icon.md#iconify-optional'
  FullIconifyIcon: './full-iconify-icon.md'
functions:
  minifyIconSet: './minify-icon-set.md'
```

# expandIconSet()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]expandIconSet()` 用于反优化图标集，与 `[func]minifyIconSet()` 的作用相反。

## 用法

该函数仅有一个参数：

- `[prop]data`，`[type]IconifyJSON` 类型。图标集数据。

该函数不会创建新对象，而是直接对传入函数的对象进行反优化。

## 它具体做了什么？ {#explanation}

详情请参阅 `[func]minifyIconSet()`。

## 示例

```yaml
src: libraries/utils/expand.ts
title: 'usage.ts'
extra:
  - src: libraries/utils/expand.json
    title: '结果：'
```
