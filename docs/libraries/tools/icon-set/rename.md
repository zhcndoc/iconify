```yaml
title: 重命名图标集中的图标
types:
  IconSet: './index.md'
  IconifyJSON: '/docs/types/iconify-json.md'
functions:
  export: './export.md'
  toggleCharacter: './toggle-character.md'
```

# rename()

此函数属于 [Iconify Tools](../index.md) 中的 `[type]IconSet` 类。

函数 `[func]rename()` 用于重命名图标。

该函数会检查引用了被重命名图标的别名和变体，并将父图标更新为新名称。

如果已存在具有新名称的图标，它将被覆盖。

## 用法

该函数具有以下参数：

- `[prop]oldName`，`[type]string` 类型。旧图标名称。
- `[prop]newName`，`[type]string` 类型。新图标名称。

函数执行成功时返回 `true`，失败时返回 `false`。

## 示例

```yaml
src: libraries/tools/icon-set/rename.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon-set/rename.json
    title: '结果：'
```
