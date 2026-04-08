```yaml
title: 将 Font Awesome Pro 转换为 Iconify JSON
```

# 将 Font Awesome Pro 转换为 Iconify JSON

## 使用 FontAwesome Pro git 仓库

本示例展示了如何将 FontAwesome Pro 的 SVG 文件转换为 Iconify JSON 格式。

本示例假设您有权访问 FontAwesome Pro 仓库。如果您拥有有效的许可证，您应该能够访问它。

创建文件 `[file]convert-fa-pro.ts` 并填入以下内容：

```yaml
src: libraries/tools/examples/convert-fa-pro.ts
title: 'convert-fa-pro.ts'
```

假设 TypeScript 已配置为编译到 `[file]lib` 目录，将文件编译为 JavaScript 并运行：

```bash
node lib/convert-fa-pro
```

如果您不使用 TypeScript，请从代码中移除类型声明。
这应该不难，因为需要移除的行数并不多。

准备好的项目可在 [Iconify Tools GitHub 仓库](https://github.com/iconify/tools/tree/main/%40iconify-demo/create-bundle) 中获取。


## 使用 FontAwesome Pro npm 库

生成 JSON 文件的另一种方法是使用 FontAwesome 提供的 NPM 库。

本示例假设您有权访问 FontAwesome Pro npm 库。[如果您尚未获得库的访问权限，请参阅官方指南。](https://docs.fontawesome.com/web/setup/packages#1-configure-pro-package-access)

创建文件 `[file]convert-fa-pro-npm.ts` 并填入以下内容：

```yaml
src: libraries/tools/examples/convert-fa-pro-npm.ts
title: 'convert-fa-pro-npm.ts'
```

如果您使用的是 Node.js V22.6.0 或更高版本，您可以原生运行 TypeScript 文件。

```bash
node convert-fa-pro-npm.ts
```

如果您的 Node.js 版本低于 v22.6.0，则需要在命令中添加 `--experimental-strip-types`。

```bash
node --experimental-strip-types convert-fa-pro-npm.ts
```

或者，您也可以手动从代码中移除类型声明，然后将其作为 JS 文件运行。
