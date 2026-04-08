```yaml
title: 使用 Iconify Tools 合并图标集
types:
  IconSet: './index.md'
```

# mergeIconSets()

此函数属于 [Iconify Tools 包](../index.md)。

函数 `[func]mergeIconSets()` 用于合并两个图标集，并创建一个新的 `[type]IconSet` 实例。

## 为什么要合并图标集？

更新图标集时，旧图标通常会丢失。
如果有人正在使用一个已不存在或已重命名的旧图标，删除该图标将导致 UI 损坏。
这就是为什么永远不应该删除图标的原因。

合并新旧图标集可确保图标永远不会被删除。
合并过程会添加缺失的图标，但会将它们标记为隐藏，
因此它们不会显示在图标列表中，但可供使用旧图标的任何人调用。

此函数会尝试检测已重命名的图标，并为这些图标创建别名。

## 用法

该函数包含以下参数：

- `[prop]oldIcons`，`[type]IconSet`。图标集的旧版本。
- `[prop]newIcons`，`[type]IconSet`。图标集的新版本。

该函数不会修改作为参数传入的图标集，而是创建一个新的 `[type]IconSet` 实例并将其返回。

## 示例

```yaml
src: libraries/tools/merge-icon-sets.ts
title: 'example.ts'
extra:
  - src: libraries/tools/merge-icon-sets.json
    title: 'Result:'
```
