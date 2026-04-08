```yaml
title: 获取 GitHub 仓库的最后一次提交哈希值
functions:
  downloadGitHubRepo: './github.md'
```

# 获取 GitHub 仓库的最后一次提交哈希值

本教程是 [Iconify Tools](../index.md) 中 [包函数文档](./index.md) 的一部分。

函数 `[func]getGitHubRepoHash()` 使用 GitHub API 从远程 GitHub 仓库获取最后一次提交的哈希值。

它被 `[func]downloadGitHubRepo()` 用于检查仓库是否已更新，并生成归档文件的下载链接。

## 用法

该函数包含以下参数：

- `[prop]options`，`[type]DownloadGitHubRepoOptions`。配置选项，与 `[prop]downloadGitHubRepo()` 函数中的选项相同（仅使用与访问 GitHub API 相关的属性）。

函数以 `[type]string` 类型返回最后一次提交的哈希值。

该函数为异步函数。
