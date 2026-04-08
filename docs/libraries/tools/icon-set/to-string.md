```yaml
title: 将图标集中的图标转换为字符串
types:
  IconSet: './index.md'
  IconifyIconCustomisations: '../../utils/icon-customisations.md'
```

# toString()

此函数属于 [Iconify Tools](../index.md) 中的 `[type]IconSet` 类。

函数 `[func]toString()` 将图标导出为字符串。

## 用法

该函数包含以下参数：

- `[prop]name`，`[type]string`。图标名称。
- `[prop]customisations`，`[type]IconifyIconCustomisations`。可选的自定义配置列表。

函数在成功时返回渲染后的图标 `[type]string`，如果图标不存在则返回 `[type]null`。

## 自定义配置

如果未设置 `[prop]customisations`，则默认值为：

```json
{
	"width": "auto",
	"height": "auto"
}
```

这将使图标的 `[prop]width` 和 `[prop]height` 与 `[prop]viewBox` 匹配（见下方示例）。

如果您想使用 `[num]1em` 的高度，请使用以下 `[prop]customisations`：

```json
{
	"height": "1em"
}
```

## 示例

```yaml
src: libraries/tools/icon-set/to-string.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon-set/to-string.svg
    title: 'Result:'
```
