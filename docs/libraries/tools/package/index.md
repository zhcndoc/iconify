```yaml
title: 管理包
types:
  IconSet: '../icon-set/index.md'
  IconifyJSON: '/docs/types/iconify-json.md'
functions:
  importDirectory: '../import/directory.md'
  importFromFigma: '../import/figma/index.md'
  downloadGitRepo: './git.md'
  downloadGitHubRepo: './github.md'
  downloadGitLabRepo: './gitlab.md'
  downloadNPMPackage: './npm.md'
  compareDirectories: './compare.md'
  sendAPIQuery: './api-query.md'
  downloadFile: './download-file.md'
  bumpVersion: './bump-version.md'
  getPackageVersion: './package-version.md'
  getNPMVersion: './npm-version.md'
  getGitRepoHash: './git-repo-hash.md'
  getGitHubRepoHash: './github-commit.md'
  getGitLabRepoHash: './gitlab-commit.md'
```

# 管理包

[Iconify Tools](../index.md) 提供了多个函数，以帮助自动化下载、比较和更新包。

## 异步

下面列出的大多数函数都是异步的。

`include libraries/tools/async`

## 下载包

这些函数用于从各种来源下载包。

这些函数可用于下载图标集的源代码，然后可以使用 `[func]importDirectory()` 函数进行导入。

这些函数还可用于将导出的数据与之前发布的数据进行比较，如果包发生了更改，则发布新版本。

- `[func]downloadGitRepo()` 创建 Git 仓库的浅克隆。
- `[func]downloadGitHubRepo()` 使用 GitHub API 下载 GitHub 仓库。它与 `[func]downloadGitRepo()` 类似，但使用的是 API 而不是 Git 客户端。
- `[func]downloadGitLabRepo()` 使用 GitLab API 下载 GitLab 仓库。它与 `[func]downloadGitRepo()` 类似，但使用的是 API 而不是 Git 客户端。
- `[func]downloadNPMPackage()` 从注册表下载 NPM 包。

此外，还有几个用于通过 URL 下载文件的函数：

- `[func]sendAPIQuery()` 是 `[func]fetch` 的包装器，支持缓存。它被 `[func]importFromFigma()` 等函数使用。
- `[func]downloadFile()` 也是 `[func]fetch` 的包装器，简化了二进制文件（如压缩包）的下载。它被 GitHub、GitLab 和 NPM 下载器使用。

## 版本 {#versions}

在发布包时，您可能需要更改包的版本号。Iconify Tools 提供了几个函数来帮助您自动化此过程：

- `[func]bumpVersion()` 增加版本号。

用于从本地文件获取版本号或提交哈希的函数：

- `[func]getPackageVersion()` 从 `[file]package.json` 中检索版本号。
- `[func]getGitRepoHash()` 检索本地 Git 仓库的哈希值。

用于从远程包/仓库获取版本号或提交哈希的函数：

- `[func]getNPMVersion()` 从 NPM 注册表检索包的最新版本。
- `[func]getGitHubRepoHash()` 检索远程 GitHub 仓库最后一次提交的哈希值。
- `[func]getGitLabRepoHash()` 检索远程 GitLab 仓库最后一次提交的哈希值。

## 比较目录

在自动化构建流程时，如果没有任何更改却发布新包是没有意义的。Iconify Tools 中有一个函数可用于检查更改：

- `[func]compareDirectories()` 比较两个目录的内容。

与简单的比较不同，此函数会忽略 `[file]package.json` 中的版本号、隐藏文件以及不同的换行符。
