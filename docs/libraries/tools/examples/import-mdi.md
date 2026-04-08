```yaml
title: 使用 Iconify Tools 将 SVG 集合转换为 Iconify JSON
```

# 将 SVG 集合转换为 Iconify JSON

本示例展示了如何将包含大量 SVG 文件的目录转换为 Iconify JSON 格式。

作为数据源，本示例使用了来自 [Templarian/MaterialDesign-SVG](https://github.com/Templarian/MaterialDesign-SVG) 仓库的 Material Design 图标，该仓库也可作为 `[npm]@mdi/svg` NPM 包获取。

安装依赖：

```bash
npm install @iconify/tools @mdi/svg --save
```

然后创建文件 `[file]convert-mdi.ts` 并填入以下内容：

```yaml
src: libraries/tools/examples/convert-mdi.ts
title: 'convert-mdi.ts'
```

假设 TypeScript 已配置为编译到 `[file]lib` 目录，将文件编译为 JavaScript 并运行：

```bash
node lib/convert-mdi
```

如果您不使用 TypeScript，请从代码中移除类型注解。这应该不难，因为需要删除的行数并不多。

准备好的项目可在 [Iconify Tools GitHub 仓库](https://github.com/iconify/tools/tree/main/%40iconify-demo/create-bundle) 中获取。

## 它是如何工作的？

上述代码中的注释解释了具体过程。

流程很简单：

1. `[func]importDirectory()` 从 `[npm]@mdi/svg` 包的 `[str]"svg"` 目录导入所有图标。
2. 使用 `[func]iconSet.forEach()` 遍历所有图标以执行以下操作：
   - 使用 `[func]toSVG()` 获取可通过各种函数进行操作的 SVG 实例。
   - 使用 `[func]cleanupSVG()` 清理代码（MDI 的代码已经很干净，因此无需清理，但对于其他图标集则是必要的）。
   - 使用 `[func]parseColors()` 将默认颜色更改为 `[str]currentColor`。
   - 使用 `[func]runSVGO()` 优化图标代码。
   - 使用 `[func]iconSet.fromSVG()` 更新图标集中的图标数据。
3. 然后脚本处理元数据：为所有图标添加分类和别名。
4. 使用 `[func]iconSet.export()` 将图标集导出为 JSON 文件。
