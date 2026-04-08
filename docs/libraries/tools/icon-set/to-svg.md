```yaml
title: Export icon as SVG instance in icon set
types:
  IconSet: './index.md'
  SVG: '../svg/index.md'
functions:
  fromSVG: './from-svg.md'
```

# toSVG()

此函数属于 [Iconify Tools](../index.md) 中的 `[type]IconSet` 类。

函数 `[func]toSVG()` 将图标导出为 `[type]SVG` 实例。

它用于配合处理 `[type]SVG` 实例的函数来对图标进行处理。

### 重要提示

`[type]SVG` 实例与图标集不同步。

修改图标后，您需要使用 `[func]fromSVG()` 方法更新 `[type]IconSet` 中的条目。

## 用法

该函数包含以下参数：

- `[prop]name`，`[type]string` 类型。图标名称。

函数在成功时返回 `[type]SVG` 实例，出错时返回 `[type]null`。

## 示例

```yaml
src: libraries/tools/icon-set/to-svg.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon-set/to-svg.svg
    title: 'Result:'
```
