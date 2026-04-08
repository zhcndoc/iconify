```yaml
title: 将所有 Iconify 图标集导出为 SVG
```

# 将所有 Iconify 图标导出为 SVG

本示例展示了如何为 `[npm]@iconify/json` 包中的所有图标生成 SVG 文件。

首先，创建一个空白的 Node 项目，并将 `[npm]@iconify/tools` 添加为依赖项。 

然后创建文件 `[file]export-files.mjs` 并填入以下内容：

```yaml
src: libraries/tools/examples/export-all-files.mjs
title: 'export-files.mjs'
```

然后运行该文件：

```bash
node export-files.mjs
```

