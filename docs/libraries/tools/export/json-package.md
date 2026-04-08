```yaml
title: 导出 JSON 包
types:
  IconSet: '../icon-set/index.md'
  IconifyJSON: '/docs/types/iconify-json.md'
```

# 将图标集导出为 JSON 包

本教程属于 [Iconify Tools](../index.md) 中的 [导出函数文档](./index.md) 的一部分。

函数 `[func]exportJSONPackage()` 会在指定目录中创建一个图标包。

这些包用于加载整个图标集，示例如下：

```js
import { addCollection, Icon } from '@iconify/react';
import { icons as mdiLightIcons } from '@iconify-json/mdi-light';
import { icons as tablerIcons } from '@iconify-json/tabler';

addCollection(mdiLightIcons);
addCollection(tablerIcons);

// 演示使用部分已导入的图标
export function renderHomeIcon() {
	return <Icon icon="mdi-light:home" />;
}

export function renderAlertIcon() {
	return <Icon icon="tabler:alert-octagon" />;
}
```

`[npm]@iconify-json/mdi-light` 和 `[npm]@iconify-json/tabler` 是由该函数生成的包，即上述示例中使用的包。

有关详细信息，请参阅 [独立图标集包文档](/docs/icons/json.md)。

## 用法

该函数具有以下参数：

- `[prop]iconSet`，`[type]IconSet`。要导出的图标集。
- `[prop]options`，`[type]object`。选项。见下文。

函数返回生成的文件数组。

该函数是异步的。这意味着你需要将其作为 `[class]Promise` 实例进行处理，通常是在函数调用前添加 `[js]await`。

### 选项

选项对象包含以下必需属性：

- `[prop]target`，`[type]string`。目标目录。如果目录不存在，将会被创建。

以及以下可选属性：

- `[prop]cleanup`，`[type]boolean`。如果为 `true`，则在导出图标前会清空目标目录。默认为 `false`。
- `[prop]package`，`[type]object`。`[file]package.json` 的属性。使用此项至少设置包名称和版本。
- `[prop]customFiles`，`[type]Record<string, unknown>`。要导出的自定义文件。键为文件名，值为内容。见下文。

### customFiles

`[prop]customFiles` 选项包含你想要添加到包中的其他文件。键为文件名，值可以是以下类型之一：

- `[type]string`。文件内容。
- `[type]object`。将在写入文件前被序列化的 JSON 内容。
- `[type]null`。如果值为 `[type]null`，则删除该文件。

## 示例

```yaml
src: libraries/tools/export/json-package.ts
title: 'example.ts'
```
