```yaml
title: IconifyIconName 类型
```

# IconifyIconName 类型

`[type]IconifyIconName` 类型用于 [Iconify Utils](./index.md) 中处理图标名称。

你可以在 [Iconify Utils 源代码](https://github.com/iconify/iconify/tree/main/packages/utils) 的 `[file]src/icon/name.ts` 中找到此类型。

`include types/iconify-icon-name`

## 验证

图标名称的所有部分都必须匹配以下正则表达式：`[js]/^[a-z0-9]+(-[a-z0-9]+)*$/`。

唯一的例外是 `[prop]provider`，它可以为空。

验证表达式可以从 Iconify Utils 中导入：

```yaml
src: libraries/utils/match-name.ts
title: 'example.ts'
```
