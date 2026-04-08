```yaml
title: 在图标集中为图标分配字符
types:
  IconSet: './index.md'
  IconifyJSON: '/docs/types/iconify-json.md'
functions:
  chars: './chars.md'
  entries: './entries.md'
```

# toggleCharacter()

此函数属于 [Iconify Tools](../index.md) 中的 `[type]IconSet` 类。

`[func]toggleCharacter()` 函数用于向图标添加字符或从中移除字符。

## 用法

该函数包含以下参数：

- `[prop]iconName`，`[type]string` 类型。图标名称。
- `[prop]char`，`[type]string` 类型。十六进制字符串格式的字符，例如 `[str]f001`。
- `[prop]add`，`[type]boolean` 类型。如果为 `true`，则将字符添加到图标；如果为 `false`，则从图标中移除字符。

函数执行成功时返回 `true`，失败时返回 `false`。

## 字符映射

字符映射的作用是什么？

它用于生成图标字体。图标字体中的每个图标都会分配一个字符。即使使用连字，连字也会指向一个字符，因此字符是必需的。

## 如何查找所有字符？ {#chars}

你可以通过使用 `[func]chars()` 方法来获取所有已分配字符的列表。

如果你想查看分配给某个图标的字符，可以使用如下代码：

```ts
const item = iconSet.entries['some-icon'];
// Set<string>
console.log(item.chars);
```

直接在 `[func]entries` 属性中修改字符是安全的。

## 示例

```yaml
src: libraries/tools/icon-set/chars.ts
title: 'chars-example.ts'
```
