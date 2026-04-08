```yaml
title: 获取 Git 仓库哈希值
functions:
  downloadGitRepo: './git.md'
```

# 获取 Git 仓库哈希值

本教程是 [Iconify Tools](../index.md) 中[包函数文档](./index.md)的一部分。

函数 `[func]getGitRepoHash()` 用于从本地 Git 仓库中获取最后一次提交的哈希值。

该函数由 `[func]downloadGitRepo()` 调用。

## 用法

该函数包含以下参数：

- `[prop]options`，`[type]DownloadGitRepoOptions`。选项，与 `[prop]downloadGitRepo()` 函数中的选项相同（仅使用 `[prop]target` 属性）。

函数以 `[type]string` 类型返回最后一次提交的哈希值。

该函数为异步函数。
