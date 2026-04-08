```yaml
title: '从 Figma 导入 SVG：获取文件 ID'
functions:
  importFromFigma: ./index.md
```

# 如何获取 Figma 文档 ID

本文是 `[func]importFromFigma()` 文档的一部分。

如何获取 Figma 文件 ID：

1. 在 Figma 中打开文件。
2. 点击右上角的“分享”按钮。
3. 点击“复制链接”。

![如何在 Figma 中获取文件 ID](/assets/images/tools/figma_id.png)

你的剪贴板中将包含一个指向 Figma 文件的链接，格式如下：

```txt
https://www.figma.com/file/9lvc7JGhqpNnpF3OK9kjnG/Quill-Iconset-(Community)?node-id=0%3A1
```

文件 ID 位于 `[str]/file/` 和下一个 `[str]/` 之间。在上面的示例中，文件 ID 为 `[str]9lvc7JGhqpNnpF3OK9kjnG`。

## 社区文件

社区文件的链接中包含 `[str]/community/`：

```txt
https://www.figma.com/community/file/1034432054377533052/Quill-Iconset
```

该链接无法用于获取文件 ID。

你需要从实际文件中获取 ID。如果其他人将文件发布到了社区，你需要先克隆该文件，然后按照上述步骤获取文件 ID。
