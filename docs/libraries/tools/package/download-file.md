```yaml
title: 下载二进制文件
functions:
  downloadGitHubRepo: './github.md'
  downloadNPMPackage: './npm.md'
  sendAPIQuery: './api-query.md'
```

# 下载二进制文件

本教程属于 [Iconify Tools](../index.md) 中的 [包函数文档](./index.md) 的一部分。

函数 `[func]downloadFile()` 是 `[func]fetch` 的包装器，用于下载二进制文件。

它被用于下载函数中检索归档文件的函数，例如 `[func]downloadGitHubRepo()` 和 `[func]downloadNPMPackage()`。

如需检索文本文件，请参阅 `[func]sendAPIQuery()`。

## 用法

该函数包含以下参数：

- `[prop]query`，`[type]APIQueryParams`。URI 和参数。
- `[prop]filename`，`[type]string`。文件存储路径。

该函数是异步的。这意味着你需要将其作为 `[class]Promise` 实例进行处理，通常是在函数调用前添加 `[js]await`。

### APIQueryParams

`[type]APIQueryParams` 对象包含以下属性：

- `[prop]uri`，`[type]string`。基础 URI。
- `[prop]params`，`[type]URLSearchParams`。可选参数。
- `[prop]header`，`[type]Record<string, string>`。可选请求头。
