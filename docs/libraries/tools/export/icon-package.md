```yaml
title: 导出图标包
types:
  IconSet: '../icon-set/index.md'
```

# 将图标集导出为图标包

本教程是 [Iconify Tools](../index.md) 中 [导出函数文档](./index.md) 的一部分。

函数 `[func]exportIconPackage()` 会在指定目录中创建图标包。

这些包用于离线图标组件，例如：

```yaml
src: icon-components/common/offline.jsx
```

`[npm]@iconify-icons/bi` 就是由该函数生成的包，用于上述示例中。

有关详细信息，请参阅 [拆分图标包文档](/docs/icons/icons.md)。

### 弃用通知

此函数已被弃用，但仍为依赖它的开发者提供维护。

在 Iconify 项目的早期阶段，需要单个图标包。 
在现代 Node 生态系统中，这已不再需要。
可以使用 Vite 等工具按需生成内容，包括单文件包。
像 Unplugin Icons 这样的包可以动态生成图标组件。

不再需要单个图标包，应避免使用。
如果您需要提取少量图标的数据， 
请在应用的构建过程中通过自定义脚本或 Vite 插件来完成。

## 用法

该函数具有以下参数：

- `[prop]iconSet`，`[type]IconSet`。要导出的图标集。
- `[prop]options`，`[type]object`。选项。见下文。

函数返回生成的文件数组。

该函数是异步的。这意味着您需要将其作为 `[class]Promise` 实例进行处理，通常是在函数调用前添加 `[js]await`。

### 选项

`[prop]options` 对象具有以下必需属性：

- `[prop]target`，`[type]string`。目标目录。如果目录不存在，将会被创建。

以及以下可选属性：

- `[prop]cleanup`，`[type]boolean`。如果为 `true`，则在导出图标前会清空目标目录。默认为 `false`。
- `[prop]package`，`[type]object`。`[file]package.json` 的属性。使用它至少设置包名称和版本。
- `[prop]module`，`[type]boolean`。如果为 `true`，函数将生成包含 ES 模块的包；如果为 `false`，函数将生成包含 CommonJS 模块的包。默认为 `true`。
- `[prop]typesContent`，`[type]string`。`[file].d.ts` 文件的自定义内容。
- `[prop]customFiles`，`[type]Record<string, unknown>`。要导出的自定义文件。键为文件名，值为内容。见下文。

### customFiles

`[prop]customFiles` 选项包含您想要添加到包中的额外文件。键为文件名，值可以是以下类型之一：

- `[type]string`。文件内容。
- `[type]object`。将在写入文件前进行序列化的 JSON 内容。
- `[type]null`。如果值为 `[type]null`，则删除该文件。

## 示例

```yaml
src: libraries/tools/export/icon-package.ts
title: 'example.ts'
```
