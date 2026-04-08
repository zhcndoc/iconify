```yaml
title: 获取包的版本号
functions:
  downloadNPMPackage: './npm.md'
  getNPMVersion: './npm-version.md'
```

# 获取包的版本号

本教程是 [Iconify Tools](../index.md) 中 [包函数文档](./index.md) 的一部分。

函数 `[func]getPackageVersion()` 是一个简单的函数，用于从目标目录中的 `[file]package.json` 获取版本号。

它被 `[func]downloadNPMPackage()` 用于获取已下载并解压的包的版本号。它也可用于获取从 Git 仓库下载的包的版本号（如下例所示）。

## 用法

该函数具有以下参数：

- `[prop]target`，`[type]string` 类型。目标目录，不包含 `[str]/package.json`。

函数以 `[type]string` 类型返回版本号。

另请参阅 `[func]getNPMVersion()`。

该函数为异步函数。

## 示例

```yaml
src: libraries/tools/package/package-version.ts
title: 'example.ts'
```
