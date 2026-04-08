```yaml
title: 清理图标
types:
  IconifyJSON: '/docs/types/iconify-json.md'
functions:
  importDirectory: '/docs/libraries/tools/import/directory.md'
  forEach: '/docs/libraries/tools/icon-set/for-each.md'
```

# 清理图标

所有通过 Iconify 提供的图标集都会经过验证和清理流程。

为什么需要这样做？SVG 与其他图像不同，它可能包含大量内容，导致处理起来很困难。

图标通常包含大量无用代码（尤其是从旧版软件导出时）。

图标甚至可能包含恶意代码，例如脚本、事件监听器以及指向外部资源的链接。

在处理单色图标（仅有一种颜色，且该颜色应可更改的图标）时，有些图标使用 `[attr]fill`，有些使用 `[attr]stroke`，有些依赖系统默认颜色，有些使用 `[prop]black` 颜色，还有些使用看似随机的颜色。

您需要的所有工具均可在 [Iconify Tools](/docs/libraries/tools/index.md) 包中找到。

## 处理流程

清理流程分为 3 个步骤：

- 验证与初步清理。
- 更改图标调色板。
- 优化。

### 验证与初步清理 {#cleanup}

第一部分是代码验证与初步清理。

当设计师从编辑器导出图标时，SVG 通常包含大量显示图标所不需要的额外代码。

图标还可能包含危险元素，例如脚本或外部资源。会对图标进行验证，以确保它们不包含矢量形状以外的任何内容。

请参阅 [错误代码示例](./cleanup.md) 以及 [SVG 验证工作原理说明](./validate.md)。

### 调色板更改 {#palette}

在初步清理和验证之后，会更改图标的调色板。

对于单色图标，颜色会更改为 `[prop]currentColor`，以确保图标跟随文本颜色。这样无论图标使用的是 `[prop]fill` 还是 `[prop]stroke`，都能轻松更改任何图标的颜色。

对于具有硬编码调色板的图标，解析器会检查图标是否未使用系统默认颜色或 `[prop]currentColor`。

请参阅 [解释调色板更改的文章](./palette.md)。

### 优化 {#optimisation}

最后一步是优化。它通过移除不必要的代码和优化路径来减小图标大小。

请参阅 [一篇非常简短的解释图标优化的文章](./optimise.md)。

## 代码

想用自己的图标试试吗？您需要的所有函数均可在 [Iconify Tools](/docs/libraries/tools/index.md) 中找到。

以下是几个示例。

### 解析单个单色图标

此代码示例解析单个单色图标。图标使用黑色，该颜色将被替换为 `[prop]currentColor`，白色形状将被移除。

图标从单个文件加载，输出存储在另一个文件中。

```yaml
src: libraries/tools/examples/cleanup-one-icon.ts
```

### 解析整个图标集

此代码示例解析整个图标集，并以 `[type]IconifyJSON` 格式返回图标集。

它与上面的示例类似，但使用 `[func]importDirectory()` 导入目录中的所有 SVG 文件，然后将结果存储在 JSON 文件中。每个图标都在异步 `[func]forEach()` 回调中进行解析。

```yaml
src: libraries/tools/examples/cleanup-directory.ts
```
