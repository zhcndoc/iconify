```yaml
title: 下载 NPM 包
types:
  DownloadNPMPackageResult: './npm.md#result'
```

# 下载 NPM 包

本教程是 [Iconify Tools](../index.md) 中 [包函数文档](./index.md) 的一部分。

函数 `[func]downloadNPMPackage()` 用于下载 NPM 包。

与 `[bash]npm install` 不同，此函数仅下载并提取请求的 NPM 包，不会安装依赖项，也不会运行任何脚本。

## 用法

该函数具有以下参数：

- `[prop]options`，`[type]object`。选项，见下文。

函数返回：

- 成功时返回 `[type]DownloadNPMPackageResult` 对象。
- 如果自上次运行以来包未更新，则返回 `[str]not_modified` 字符串（仅在设置了 `[prop]ifModifiedSince` 选项时才会返回）。

如果发生错误，函数可能会抛出异常，你可以使用 `[func]try` 和 `[func]catch` 进行捕获。

该函数是异步的。这意味着你需要将其作为 `[class]Promise` 实例进行处理，通常是在函数调用前添加 `[js]await`。

### 选项

选项对象包含以下必需属性：

- `[prop]target`，`[type]string`。目标目录。如果目录不存在，将会自动创建。
- `[prop]package`，`[type]string`。包名称。

以及以下可选属性：

- `[prop]tag`，`[type]string`。NPM 标签。默认为 `[str]latest`。
- `[prop]cleanup`，`[type]boolean`。如果为 `true`，则在导出图标前会清空目标目录。默认为 `false`。
- `[prop]ifModifiedSince`，`[type]string | true | DownloadNPMPackageResult`。如果设置，函数将检查包是否已更新。

#### ifModifiedSince

当你希望仅在包已更新时才检索数据时，可使用 `[prop]ifModifiedSince` 选项。

值可以是以下之一：

- 作为 `[type]string` 的版本号。你可以从上次运行结果的 `[prop]version` 属性中获取。
- 如果值为 `true`，函数会将 NPM 注册表中的最新版本与 `[prop]target` 目录中先前下载文件的版本进行比较。
- 上次运行返回的 `[type]DownloadNPMPackageResult` 值。

如果包未更新，函数将返回字符串 `[str]not_modified`。

如果未设置该选项，函数将不会返回 `[str]not_modified`。

### 结果

结果对象包含以下属性：

- `[prop]downloadType` = `[str]npm`。
- `[prop]rootDir`，`[type]string`。目标目录。它是 `[prop]target` 选项的规范化版本，不包含末尾的 `[str]/`。
- `[prop]contentsDir`，`[type]string`。解压归档文件的目录。
- `[prop]version`，`[type]string`。包版本。

`[prop]contentsDir` 的值始终包含 `[prop]rootDir`，因为归档文件会解压到 `[prop]rootDir` 的子目录中。例如：

```json
{
	"downloadType": "npm",
	"rootDir": "output/npm-test",
	"contentsDir": "output/npm-test/package",
	"version": "1.0.1"
}
```

## 示例

```yaml
src: libraries/tools/package/npm.ts
title: 'example.ts'
```
