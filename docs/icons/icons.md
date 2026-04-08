```yaml
title: 拆分图标包
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
functions:
  exportIconPackage: '/docs/libraries/tools/export/icon-package.md'
```

# 拆分图标包

`include notices/split-icons`

为了方便开发者，[完整图标集包](./all.md) 也提供了更小的拆分版本。

本文档适用于包含多个文件（每个图标一个文件）的包。如果你只需要导入少量图标，而无需解析整个图标集，可以使用这些包。

请注意，某些包可能包含大量文件，部分文件系统可能无法处理。

## 包

NPM 上提供两种版本的包：

- `[npm]@iconify-icons/{prefix}`：包含 ES 模块格式的数据，适用于现代开发。
- `[npm]@iconify/icons-{prefix}`：包含 CommonJS 格式的图标数据，适用于旧版代码。

将 `[str]{prefix}` 替换为图标集的前缀。

每当[大型图标集包](./all.md)更新时，这些包都会自动生成。

## 内容

每个包包含一个图标集，每个图标都有独立的文件（`[str]{name}` 为图标名称）：

- `[file]{name}.js`：以默认导出形式提供 `[type]IconifyIcon` 格式的图标数据。
- `[file]{name}.d.ts`：包含类型定义。

`[type]IconifyIcon` 格式的图标数据如下所示：

```yaml
src: icons/sample.json
copy: false
```

你可以通过文件的默认导入来导入任意图标的数据，如下所示：

```js
import mdiHome from '@iconify-icons/mdi/home';
```

使用此类包中图标的 React 组件示例：

```yaml
src: icon-components/common/offline.jsx
```

### CommonJS 包

对于较旧的软件，请使用 CommonJS 包。将 `[func]import` 替换为 `[func]require()`：

```js
const mdiHome = require('@iconify/icons-mdi/home');
```

## 创建包

如果你想为自己的图标集创建包，请参阅 [Iconify Tools](/docs/libraries/tools/index.md) 中的 `[func]exportIconPackage()`。

## 图标集列表

如果你需要获取可用的开源图标集列表，请参阅[图标集列表包](./collections.md)。
