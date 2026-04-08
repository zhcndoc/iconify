```yaml
title: 使用 Iconify Tools 从 Figma 导出图标集
```

# 从 Figma 导出图标

本示例展示了如何从 Figma 导入图标集，清理所有图标（包括双色图标），并将图标集导出为 `[type]IconifyJSON` 和 SVG 格式。

此特定代码专为导入和清理 Solar 图标集而设计。

## 流程

本示例展示了什么？

此代码包含 3 个部分：
- 使用 Figma API 从 Figma 导入图标。
- 清理图标。
- 将图标集导出为 `[type]IconifyJSON` 和独立的 SVG 文件。

清理过程中会执行什么操作？对于每个图标，它会：
- 从 `[type]IconSet` 实例中检索图标，并将其作为 `[type]SVG` 实例。
- 尝试移除裁剪路径（如果存在），Figma 通常会将其添加到 SVG 中。
- 解析所有颜色：将已知的图标颜色替换为黑色，已知的双色颜色替换为灰色，保留白色不变。在 Figma 文档中，图标使用了多种颜色，而不仅仅是黑色。
- 如果图标包含白色或双色，则为其应用遮罩。

## 代码

```yaml
src: libraries/tools/examples/import-solar.mjs
title: 'import-solar.mjs'
```
