```yaml
title: 独立图标集
types:
  IconifyJSON: "/docs/types/iconify-json.md"
  IconifyInfo: "/docs/types/iconify-json-metadata.md"
  IconifyChars: "/docs/types/iconify-json-metadata.md#chars"
  IconifyMetaData: "/docs/types/iconify-json-metadata.md#iconify-categories"
functions:
  exportJSONPackage: "/docs/libraries/tools/export/json-package.md"
  getIconData: "/docs/libraries/utils/get-icon-data.md"
  getIcons: "/docs/libraries/utils/get-icons.md"
```

# 独立图标集

为了方便开发者，[完整图标集包](./all.md) 也提供了更小的分包形式，每个图标集对应一个独立的包。

## 软件包

软件包以 `[npm]@iconify-json/{prefix}` 的形式发布，其中 `[str]{prefix}` 是图标集的前缀。

这些软件包仅在 NPM 上提供。每当 [大型图标集包](./all.md) 更新时，它们都会自动生成。

## 内容

与将所有图标集数据存储在一个文件中的完整包不同，独立图标集将数据拆分到多个文件中，因此您只需加载所需的数据：

- `[file]icons.json` 包含 `[type]IconifyJSON` 格式的图标集数据，不包含任何元数据。
- `[file]info.json` 包含 `[type]IconifyInfo` 格式的图标集信息。
- `[file]chars.json` 包含字符映射（如果存在），格式为 `[type]IconifyChars`。某些图标集中可能不存在此文件。
- `[file]metadata.json` 包含 `[type]IconifyMetaData` 格式的元数据：分类、主题。某些图标集中可能不存在此文件。

您可以使用命名导入从包中导入图标集，如下所示：

```js
import { icons as mdiIcons } from "@iconify-json/mdi";
import { icons as mdiLightIcons } from "@iconify-json/mdi-light";
```

上述代码示例使用了 JSON 模块。在使用打包工具或 CommonJS 时，它可以正常工作。当使用 ES 模块时，较旧版本的 Node.js 需要使用 `[str]--experimental-json-modules` 标志来运行脚本。

如果您使用的是较旧版本的 Node.js 且无法导入 JSON 文件，可以使用 `[func]require()`：

```js
const mdiIcons = require("@iconify-json/mdi/icons.json");
const mdiLightIcons = require("@iconify-json/mdi-light/icons.json");
```

## 创建软件包

如果您想为自己的图标集创建软件包，请参阅 [Iconify Tools](/docs/libraries/tools/index.md) 中的 `[func]exportJSONPackage()`。

## 与大型图标集包的区别

在 [大型图标集包](./all.md) 中，所有 JSON 文件都包含完整的图标集：图标数据、信息、元数据（分类、主题）以及字符映射。

在小型软件包中，这些数据被拆分为多个文件，如上所述。如果您只需要图标数据，最好从多个小型软件包中读取 `[file]icons.json`，因为它们的体积更小。

## 图标集列表

如果您需要获取可用的开源图标集列表，请参阅 [图标集列表包](./collections.md)。

## 读取数据 {#tools}

要读取图标集，您可以使用：

- 用于 JavaScript 的 [Iconify Utils](/docs/libraries/utils/index.md)。
- 用于 PHP 的 [Iconify JSON Tools](https://github.com/iconify/json-tools.php)（已弃用）。

要将图标集软件包与 Iconify Utils 配合使用，请按照以下步骤操作：

- 读取图标数据。如果您使用的是返回字符串的文件系统函数，请使用 `[func]JSON.parse()` 将其转换为 `[type]IconifyJSON` 对象。
- 提取数据。要提取多个图标，请使用 `[func]getIcons()`；要提取单个图标，请使用 `[func]getIconData()`。点击函数链接可查看代码示例。
