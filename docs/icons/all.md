```yaml
title: Iconify 图标集包
replacements:
  - code: "60,000"
    value: "${counters.icons}"
  - code: "60k"
    value: "${counters.icons-short}"
  - code: "80 个图标集"
    value: "${counters.sets} 个图标集"
types:
  IconifyJSON: "/docs/types/iconify-json.md"
  IconifyInfo: "/docs/types/iconify-json-metadata.md"
  LegacyIconifyInfo: "/docs/types/iconify-json-metadata.md"
  IconifyChars: "/docs/types/iconify-json-metadata.md#chars"
  IconifyMetaData: "/docs/types/iconify-json-metadata.md#iconify-categories"
functions:
  exportJSONPackage: "/docs/libraries/tools/export/json-package.md"
  getIconData: "/docs/libraries/utils/get-icon-data.md"
  getIcons: "/docs/libraries/utils/get-icons.md"
```

# Iconify 图标集包

您可以从以下来源获取最新版本的开源图标数据：

- 来自 GitHub：[https://github.com/iconify/icon-sets](https://github.com/iconify/icon-sets)
- 来自 NPM：`[npm]@iconify/json`
- 来自 Packagist：`[packagist]iconify/json`

您也可以获取更小的包，但本文档未涵盖相关内容。请参阅[图标数据文档](./icon-data.md)。

## 内容

该包包含：

- 位于 `[file]collections.json` 中的图标集列表。
- 位于 `[file]json/{prefix}.json` 中的图标集，其中 `[str]{prefix}` 是图标集前缀，例如 `[file]json/mdi-light.json`。
- 适用于 PHP 和 Node.js 的辅助函数
- 其他文件，如包定义文件、README 以及人类可读的图标集列表。

## 图标集列表

图标集列表存储在 `[file]collections.json` 中。

内容是一个简单的对象，其中键是图标集前缀，值是以 `[type]IconifyInfo` 格式存储的图标集信息。信息包括图标集名称、作者信息、许可证、文件数量以及 3 个用于展示的示例文件。

此外，`[file]collections.md` 包含相同的数据，但采用人类可读的格式。

## 图标集

每个图标集都存储在一个文件中，位于 `[file]json/` 目录下。文件名与图标集前缀匹配，您可以在 `[file]collections.json` 的图标集列表中将其作为键找到。

内容以 `[type]IconifyJSON` 格式存储。

图标集文件包含所有图标集数据，包括信息和元数据。如果您想获取不包含额外内容的最小版本，请改用[小型包](./json.md)。

## 维护

该包每隔几天会自动更新一次，因此始终包含最新的图标。如果您想使用最新的图标，只需保持项目中的依赖项为最新即可。

如果您正在使用 [Iconify API](../api/index.md)，则无需执行任何操作，因为更改会在发布后几分钟内自动推送到 API 服务器。

## 读取数据 {#tools}

要读取图标集，您可以使用：

- 适用于 JavaScript 的 [Iconify Utils](/docs/libraries/utils/index.md)。
- 适用于 PHP 的 [Iconify JSON Tools](https://github.com/iconify/json-tools.php)，已弃用且不再维护。

要将图标集包与 Iconify Utils 配合使用，请按照以下步骤操作：

- 从特定图标集的 JSON 文件中读取图标数据。如果您使用的是返回字符串的文件系统函数，请使用 `[func]JSON.parse()` 将其转换为 `[type]IconifyJSON` 对象。
- 提取数据。要提取多个图标，请使用 `[func]getIcons()`；要提取单个图标，请使用 `[func]getIconData()`。点击函数链接可查看代码示例。

## 辅助函数 {#helpers}

该包包含适用于 Node.js 和 PHP 的简单辅助函数。

### Node.js 函数 {#functions-node}

在 `[npm]@iconify/json` 的 Node.js 版本中，函数是异步的：

- `[func]lookupCollections()` 返回集合列表。它是一个简单的对象，其中键是前缀，值是以 `[type]IconifyInfo` 格式存储的图标集信息。
- `[func]lookupCollection(prefix)` 加载一个图标集。结果为 `[type]IconifyJSON` 对象。

上述所有函数均为异步函数，需要在函数名前使用 `[func]await`（见下方示例）。

此外还有少数同步函数：

- `[func]locate(prefix)` 返回图标集 JSON 文件的位置。

### PHP 函数

PHP 是一种同步语言，因此适用于 PHP 的函数在版本 1 和版本 2 中是相同的。

使用 `[prop]Iconify\IconsJSON\Finder` 类，该类包含以下静态函数：

- `[func]collections()` 返回集合列表。它是一个简单的对象，其中键是前缀，值是图标集信息。对于版本 1，数据采用 `[type]LegacyIconifyInfo` 格式；对于版本 2，数据采用 `[type]IconifyInfo` 格式。
- `[func]locate(prefix)` 返回图标集 JSON 文件的位置。
- `[func]rootDir()` 返回包根目录的位置。

### 示例

示例：

```yaml
src: icons/json/finder.js
title: Node.js
extra:
  - src: icons/json/finder.php
    title: PHP
```

这些辅助函数仅用于列出和定位图标集。

要读取图标集，您可以使用 [Iconify Utils](/docs/libraries/utils/index.md)。

## 添加图标集 {#submit}

您是否知道某个优秀的开源图标集尚未收录在 Iconify 图标集中？[在 GitHub 上提交 Issue](https://github.com/iconify/icon-sets/issues) 以请求将其添加到 Iconify 图标集中。

## 许可证

Iconify 集合中提供的所有图标集均在免费或开源许可证下发布，允许重新分发。有关详细信息，请参阅每个图标集的信息。
