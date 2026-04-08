```yaml
title: 使用 API 下载 GitLab 仓库
types:
  DownloadGitLabRepoResult: './gitlab.md#result'
```

# 使用 API 下载 GitLab 仓库

本教程是 [Iconify Tools](../index.md) 中 [包函数文档](./index.md) 的一部分。

函数 `[func]downloadGitLabRepo()` 使用 GitLab API 从 GitLab 仓库下载文件。

## 用法

该函数包含以下参数：

- `[prop]options`，`[type]object`。选项，见下文。

函数返回：

- 成功时返回 `[type]DownloadGitLabRepoResult` 对象。
- 如果自上次运行以来仓库未更新，则返回 `[str]not_modified` 字符串（仅在设置了 `[prop]ifModifiedSince` 选项时可能返回）。

如果发生错误，函数可能会抛出异常，你可以使用 `[func]try` 和 `[func]catch` 进行捕获。

该函数是异步的。这意味着你需要将其作为 `[class]Promise` 实例进行处理，通常是在函数调用前添加 `[js]await`。

### 选项

选项对象包含以下必需属性：

- `[prop]target`，`[type]string`。目标目录。如果目录不存在，将会被创建。值可以包含 `[str]{hash}`，它将被替换为最新的提交哈希值。
- `[prop]project`，`[type]string`。GitLab 项目 ID。你可以在 GitLab 网站的项目页面上找到它。
- `[prop]branch`，`[type]string`。分支，例如 `[str]master`。
- `[prop]token`，`[type]string`。GitLab API 令牌。见下文。
- `[prop]uri`，`[type]string`。自定义 GitLab 主机的可选 URI，默认值为 `[url]https://gitlab.com/api/v4/projects`。

以及以下可选属性：

- `[prop]cleanup`，`[type]boolean`。如果为 `true`，在导出图标前将清空目标目录。默认为 `false`。
- `[prop]ifModifiedSince`，`[type]string | DownloadGitLabRepoResult`。如果设置，函数将检查仓库是否已更新。

函数会下载归档文件，将其放入 `[prop]target` 目录，然后在子目录中解压。有两个可选属性允许你在不清除所有内容的前提下移除过时的文件。如果启用了 `[prop]cleanup`，这些选项将不起作用，因为 `[prop]cleanup` 会移除所有内容。

- `[prop]cleanupOldFiles`，`[type]boolean`。如果为 `true`，将移除目标目录中旧的 zip 文件。默认为 `false`。
- `[prop]cleanupOldDirectories`，`[type]boolean`。如果为 `true`，将移除目标目录中旧的已解压归档。默认为 `true`。

#### token

你可以从 [GitLab 的访问令牌页面](https://gitlab.com/-/profile/personal_access_tokens) 获取 GitLab API 令牌。

如果你正在创建新令牌，请将作用域（scope）设置为 `[str]read_api`。

切勿将令牌提交到仓库或发布到任何地方！请严格保密。有许多方法可以保护令牌安全，最常见的是使用环境变量将令牌传递给脚本。有大量教程详细解释了不同的方法。

#### ifModifiedSince

当你只想在仓库更新时检索数据时，会使用 `[prop]ifModifiedSince` 选项。

值可以是以下之一：

- 作为 `[type]string` 的提交哈希值。你可以从上次运行结果的 `[prop]hash` 属性中获取。
- 上次运行返回的 `[type]DownloadGitLabRepoResult` 值。

如果仓库未修改，函数将返回字符串 `[str]not_modified`。

如果未设置此选项，函数将无法返回 `[str]not_modified`。

### 结果

结果对象包含以下属性：

- `[prop]downloadType` = `[str]gitlab`。
- `[prop]rootDir`，`[type]string`。目标目录。它是 `[prop]target` 选项的规范化版本，不包含末尾的 `[str]/`，且 `[str]{hash}` 已被替换为提交哈希值。
- `[prop]contentsDir`，`[type]string`。归档文件被解压到的目录。
- `[prop]hash`，`[type]string`。最后一次提交的哈希值。

`[prop]contentsDir` 的值始终包含 `[prop]rootDir`，因为归档文件是在 `[prop]rootDir` 的子目录中解压的。例如：

```json
{
	"downloadType": "gitlab",
	"rootDir": "output/gitlab-test",
	"contentsDir": "output/gitlab-test/iconify-collections-json-4049946",
	"hash": "40499460e21011478a64c1cb1212f3308168462c"
}
```

## 示例

```yaml
src: libraries/tools/package/gitlab.ts
title: 'download-jam-icons.ts'
```
