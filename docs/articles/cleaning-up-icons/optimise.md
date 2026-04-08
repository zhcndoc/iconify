```yaml
title: 优化图标代码
functions:
  deOptimisePaths: '/docs/libraries/tools/icon/paths.md'
  runSVGO: '/docs/libraries/tools/icon/svgo.md'
```

# 优化图标

本文是 [SVG 清理文章](./index.md) 的一部分。

在完成初始的 [清理与验证](./cleanup.md) 以及 [修改图标配色](./palette.md) 之后，将对图标进行优化。

优化工作由 SVGO 完成。此处不作赘述，[你可以使用 SVGOMG 项目亲自尝试 SVGO 优化](https://jakearchibald.github.io/svgomg/)。

## 代码

优化使用 [Iconify Tools](/docs/libraries/tools/index.md) 中的 `[func]runSVGO()` 函数完成，随后调用 `[func]deOptimisePaths()` 以确保图标在任何地方都能正常使用。
