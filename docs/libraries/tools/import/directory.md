```yaml
title: 从目录导入 SVG
types:
  SVG: '../svg/index.md'
  IconSet: '../icon-set/index.md'
functions:
  cleanupSVG: '../icon/cleanup.md'
  parseColors: '../icon/colors.md'
  runSVGO: '../icon/svgo.md'
```

# 从目录导入 SVG

此函数属于 [Iconify Tools](../index.md) 中的 [导入函数](./index.md) 的一部分。

函数 `[func]importDirectory()` 和 `[func]importDirectorySync()` 用于查找并导入目录中的所有 SVG 文件。

这两个函数功能相同，唯一的区别在于读取文件的方式。
函数 `[func]importDirectorySync()` 同步读取文件，而 `[func]importDirectory()` 异步读取文件。

这些函数会创建 `[type]IconSet` 实例，该实例[可导出为多种格式](../export/index.md)。

## 用法

该函数包含以下参数：

- `[prop]dir`，`[type]string` 类型。要导入的目录。
- `[prop]options`，`[type]object` 类型。选项（可选）。

函数返回 `[type]IconSet` 实例。

## 选项

`[prop]options` 对象包含以下可选属性：
- `[prop]prefix`，`[type]string` 类型。图标集前缀。
- `[prop]includeSubDirs`，`[type]boolean` 类型。扫描子目录中的文件。默认启用。
- `[prop]keyword`，`[type]function` 类型。回调函数，根据文件名返回图标的关键词。
- `[prop]ignoreImportErrors`，`[type]boolean | "warn"` 类型。当图标加载失败时不抛出错误。默认启用。如需严格错误检查可禁用。如果设置为 `[str]warn`，将记录警告但不会抛出错误。
- `[prop]keepTitles`，`[type]boolean` 类型。如果启用，将保留 SVG 中的标题。默认禁用。

在 `[func]importDirectory()` 中，关键词回调可以是异步的，
但在 `[func]importDirectorySync()` 中必须是同步的。
它包含 3 个参数：文件名、默认生成的关键词、图标集。
它应返回包含关键词的 `[type]string`，如果应跳过该文件则返回 `[type]undefined`。

## 验证

导入图标后，需要进行以下处理：

- 使用 `[func]cleanupSVG()` 进行清理和验证。
- 在某些情况下，需要使用 `[func]parseColors()` 修复调色板。
- 使用 `[func]runSVGO()` 进行优化。

请参阅下方示例。

## 示例

异步示例：

```yaml
src: libraries/tools/import/dir.ts
title: 'example.ts'
```

同步示例：

```yaml
src: libraries/tools/import/dir-sync.ts
title: 'example.ts'
```
