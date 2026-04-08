```yaml
title: 将图标导出为 SVG
types:
  SVG: '../svg/index.md'
  IconSet: '../icon-set/index.md'
  IconifyJSON: '/docs/types/iconify-json.md'
functions:
  export: '../icon-set/export.md'
```

# 将图标导出到目录

本教程是 [Iconify Tools](../index.md) 中[导出函数文档](./index.md)的一部分。

函数 `[func]exportToDirectory()` 将 `[type]IconSet` 实例中的所有图标写入指定目录。

## 用法

该函数具有以下参数：

- `[prop]iconSet`，`[type]IconSet`。要导出的图标集。
- `[prop]options`，`[type]object`。选项。见下文。

函数返回已存储图标的数组。

该函数是异步的。这意味着你需要将其作为 `[class]Promise` 实例进行处理，通常在函数调用前添加 `[js]await`。

### 选项

`[prop]options` 对象具有以下必需属性：

- `[prop]target`，`[type]string`。目标目录。如果目录不存在，将会自动创建。

以及以下可选属性：

- `[prop]cleanup`，`[type]boolean`。如果为 `true`，则在导出图标前会清空目标目录。默认为 `false`。
- `[prop]autoHeight`，`[type]boolean`。如果为 `true`，图标的尺寸将与 `[attr]viewBox` 匹配。如果为 `false`，图标的高度将设置为 `[str]1em`。默认为 `true`。
- `[prop]includeAliases`，`[type]boolean`。为别名生成文件。默认为 `true`。
- `[prop]includeChars`，`[type]boolean`。为字符生成文件，例如为分配了字符 `[str]f00` 的图标生成 `[file]f00.svg`。默认为 `false`。
- `[prop]log`，`[type]boolean`。如果为 `true`，函数将记录处理过程。默认为 `false`。

## 示例

```yaml
src: libraries/tools/export/directory.ts
title: 'example.ts'
```
