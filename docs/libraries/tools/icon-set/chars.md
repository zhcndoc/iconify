```yaml
title: 从图标集导出字符映射
types:
  IconSet: './index.md'
  IconifyJSON: '/docs/types/iconify-json.md'
functions:
  export: './export.md'
  toggleCharacter: './toggle-character.md'
```

# chars()

此函数属于 [Iconify Tools](../index.md) 中的 `[type]IconSet` 类。

`[func]chars()` 函数用于导出字符映射。该函数由 `[func]export()` 函数调用，用于将字符映射添加到 `[type]IconifyJSON` 数据中。

## 用法

该函数包含一个参数：

- `[prop]names`，`[type]string[]`。可选。要检查的图标列表。

函数返回一个简单的 `[type]Record<string, string>` 对象。键为十六进制格式的字符（例如 `[str]u1f3cc`），值为图标名称。

## 字符映射

字符映射的作用是什么？

它用于生成图标字体。图标字体中的每个图标都会分配一个字符。即使使用连字，连字也会指向一个字符，因此字符是必需的。

### 如何为图标分配字符？ {#assign}

你可以使用 `[func]toggleCharacter()` 方法为图标分配字符。

## 示例

```yaml
src: libraries/tools/icon-set/chars.ts
title: 'chars-example.ts'
extra:
  - src: libraries/tools/icon-set/chars1.json
    title: 'chars() result:'
  - src: libraries/tools/icon-set/chars2.json
    title: 'export() result:'
```
