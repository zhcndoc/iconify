```yaml
title: Import icon from SVG to icon set
types:
  IconSet: './index.md'
  SVG: '../svg/index.md'
```

# fromSVG()

此函数属于 [Iconify Tools](../index.md) 中的 `[type]IconSet` 类。

函数 `[func]fromSVG()` 将图标从 `[type]SVG` 实例导入到 `[type]IconSet` 图标集中。
它可用于添加新图标或替换现有图标。

## 用法

该函数包含以下参数：

- `[type]name`，`[type]string`。图标名称。
- `[type]svg`，`[type]SVG`。SVG 实例。

函数在成功时返回 `true`，失败时返回 `false`。

## 示例

```yaml
src: libraries/tools/icon-set/to-svg.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon-set/to-svg.svg
    title: 'Result:'
```
