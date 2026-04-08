```yaml
title: Fixing compatibility with old SVG parsers
types:
  SVG: '../svg/index.md'
  IconSet: '../icon-set/index.md'
```

# 与旧版 SVG 解析器的兼容性

此函数属于 [Iconify Tools](../index.md) 中的 [图标操作函数](./index.md) 的一部分。

函数 `[func]deOptimisePaths()` 会检查 `[tag]path` 元素中可能不被旧版软件支持的语法，并自动进行修复。

遗憾的是，许多软件（例如图像编辑软件）仍在使用旧版库来解析 SVG。
这些库不支持路径中的圆弧压缩，从而导致导入的图标显示不正确。
压缩圆弧对图标大小的影响微乎其微，
因此，确保图标能在所有软件中正常使用，比节省几个字节更为重要。

## 用法

该函数仅有一个参数：

- `[prop]svg`，`[type]SVG`。图标实例。

该函数不返回任何值，它会直接对 `[type]SVG` 实例应用更改。

## 示例

```yaml
src: libraries/tools/icon/paths.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon/paths.svg
    title: 'Result:'
```

从示例中可以看出，所做的更改非常微小。
然而，如果不应用这些微小的更改，可能会导致许多使用旧版软件的用户无法正常显示图标，
因此最好在导出前对所有图标运行此函数。

请确保在运行此函数后不要再运行 SVGO 优化，因为 SVGO 可能会再次压缩路径。
