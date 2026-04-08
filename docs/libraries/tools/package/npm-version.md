```yaml
title: Getting package version and URL from NPM
functions:
  downloadNPMPackage: './npm.md'
  getNPMVersion: './package-version.md'
```

# 获取 NPM 包版本和 URL

本教程是 [Iconify Tools](../index.md) 中 [包函数文档](./index.md) 的一部分。

函数 `[func]getNPMVersion()` 从 NPM 注册表获取包的最新版本以及下载包的 URL。

## 用法

该函数包含以下参数：

- `[prop]options`，`[type]NPMPackageOptions`。选项，与 `[prop]downloadNPMPackage()` 函数中的选项相同（仅使用 `[prop]package` 和 `[prop]tag` 属性）。

函数返回包含以下属性的 `[type]object`：

- `[prop]version`，`[type]string`。版本号。
- `[prop]file`，`[type]string`。压缩包的 URL（如果可用）。

## 示例

```yaml
src: libraries/tools/package/npm-version.ts
title: 'example.ts'
extra:
  - src: libraries/tools/package/npm-version.json
    title: 'Result:'
```
