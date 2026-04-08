```yaml
title: ResolvedIconifyIcon 类型
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
  FullIconifyIcon: '../utils/full-iconify-icon.md'
  IconSet: './icon-set/index.md'
```

# ResolvedIconifyIcon 类型

`[type]ResolvedIconifyIcon` 类型用于 [Iconify Utils](./index.md)。

它是 `[type]IconifyIcon`，并添加了同时存在于 `[type]ExtendedIconifyIcon` 和 `[type]ExtendedIconifyAlias` 中的可选属性。
目前，仅包含一个额外属性：

- `[prop]hidden`，`[type]boolean`。如果值为 `true`，则图标将被隐藏，且不应显示在图标列表中。通常，此属性用于设置那些曾存在于旧版图标集中但现已不存在的图标。
