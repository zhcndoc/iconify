```yaml
title: 清理 SVG 代码
functions:
  cleanupSVG: '/docs/libraries/tools/icon/cleanup.md'
```

# 清理 SVG 代码

本文是 [SVG 清理文章](./index.md) 的一部分。

当设计师从编辑器中导出图标时，生成的 SVG 通常包含大量显示图标所不需要的额外代码。

## 糟糕的图标示例 {#example}

以下 SVG 是使用流行的 Inkscape 软件生成的：

```yaml
src: articles/el-cloud.svg
```

该代码包含大量无用的冗余内容。如果它不用于显示图标，那就是毫无用处的。

清理后剩下的内容如下：

```yaml
src: articles/el-cloud.cleanup.svg
```

图标尚未最终定稿。它仍然需要进行优化。

如果你认为上面的代码只包含少量无用标签，所以没什么大不了的，那只是一个简短的示例。在某些图标集中，有些图标包含数十 KB 的垃圾数据。

## 处理流程

清理过程不会对图标进行优化。它仅执行以下操作：

- 移除无用代码。
- 将样式转换为属性。
- [验证图标](./validate.md)。

这是通过 [Iconify Tools](/docs/libraries/tools/index.md) 中的 `[func]cleanupSVG()` 函数完成的。

[优化将在稍后进行](./optimise.md)，在[解析调色板](./palette.md)之后。
