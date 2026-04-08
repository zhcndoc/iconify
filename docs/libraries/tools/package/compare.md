```yaml
title: 比较目录
```

# 比较目录

本教程是 [Iconify Tools](../index.md) 中 [包函数文档](./index.md) 的一部分。

函数 `[func]compareDirectories()` 用于比较两个目录的内容。

它用于检查由某个 [导出函数](../export/index.md) 生成的包与从其他地方（例如 NPM 包）下载的包是否完全一致。如果包完全一致，则无需发布新版本。

## 用法

该函数包含以下参数：

- `[prop]dir1`，`[type]string`。目录。
- `[prop]dir2`，`[type]string`。另一个目录。
- `[prop]options`，`[type]object`。可选配置项。

函数返回值：

- 如果目录内容完全相同，返回 `true`。
- 如果内容不同，返回 `false`。

该函数为异步函数。这意味着你需要将其作为 `[class]Promise` 实例进行处理，通常是在调用函数前添加 `[js]await`。

### 选项

选项对象包含以下可选属性：

- `[prop]ignoreVersions`，`[type]boolean`。若为 `true`，则在比较包时会忽略 `[file]package.json` 中的版本号。默认值为 `true`。
- `[prop]ignoreNewLine`，`[type]boolean`。若为 `true`，则在比较文本文件时会忽略换行符的差异。默认值为 `true`。
- `[prop]textExtensions`，`[type]string[]`。需视为文本文件的扩展名列表。默认列表已包含各类函数导出的所有格式，但你也可通过此选项添加其他扩展名。扩展名需为小写。
