```yaml
title: 下载 Git 仓库
types:
  DownloadGitRepoResult: './git.md#result'
```

# 下载 Git 仓库

本教程是 [Iconify Tools](../index.md) 中 [包函数文档](./index.md) 的一部分。

函数 `[func]downloadGitRepo()` 会创建 Git 仓库的浅克隆。

## Git 可执行文件

此函数使用 Git 来克隆仓库。请确保您的计算机上已安装 Git。

## 用法

该函数包含以下参数：

- `[prop]options`，`[type]object`。配置选项，详见下文。

函数返回：

- 成功时返回 `[type]DownloadGitRepoResult` 对象。
- 如果自上次运行以来仓库未更新，则返回 `[str]not_modified` 字符串（仅在设置了 `[prop]ifModifiedSince` 选项时可能返回）。

如果发生错误，函数可能会抛出异常，您可以使用 `[func]try` 和 `[func]catch` 进行捕获。

该函数是异步的。这意味着您需要将其作为 `[class]Promise` 实例进行处理，通常是在函数调用前添加 `[js]await`。

### 选项

选项对象包含以下必需属性：

- `[prop]target`，`[type]string`。目标目录。如果目录不存在，将会自动创建。值可以包含 `[str]{hash}`，它将被替换为最新的提交哈希值。
- `[prop]remote`，`[type]string`。Git 仓库地址，例如 `[str]git@github.com:iconify/tools.git`。
- `[prop]branch`，`[type]string`。分支名称，例如 `[str]master`。

以及以下可选属性：

- `[prop]cleanup`，`[type]boolean`。如果为 `true`，则在导出图标前会清空目标目录。默认为 `false`。
- `[prop]ifModifiedSince`，`[type]string | true | DownloadGitRepoResult`。如果设置，函数将检查仓库是否已更新。

#### ifModifiedSince

当您希望仅在仓库已更新时才获取数据时，可使用 `[prop]ifModifiedSince` 选项。

该值可以是以下之一：

- 作为 `[type]string` 的提交哈希值。您可以从上次运行结果的 `[prop]hash` 属性中获取。
- 如果值为 `true`，函数会将远程仓库中的哈希值与 `[prop]target` 目录中先前下载文件的哈希值进行比较。
- 上次运行返回的 `[type]DownloadGitRepoResult` 值。

如果仓库未发生修改，函数将返回字符串 `[str]not_modified`。

如果未设置此选项，函数将不会返回 `[str]not_modified`。

### 返回值

结果对象包含以下属性：

- `[prop]downloadType` = `[str]git`。
- `[prop]contentsDir`，`[type]string`。仓库被克隆到的目录。它是 `[prop]target` 选项的规范化版本，不包含末尾的 `[str]/`，且 `[str]{hash}` 已被替换为提交哈希值。
- `[prop]hash`，`[type]string`。最后一次提交的哈希值。

## 示例

```yaml
src: libraries/tools/package/git.ts
title: 'boxicons.ts'
```
