```yaml
title: Iconify Utils 中的 flipFromString()
types:
  IconCustomisations: './icon-customisations.md'
```

# flipFromString()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]flipFromString()` 将 `[prop]flip` 简写属性应用于 `[type]IconCustomisations` 对象。

## 用法

该函数包含以下参数：

- `[prop]custom`，`[type]IconCustomisations`。自定义配置。
- `[prop]value`，`[type]string`。要解析的值。

该函数无返回值，它会直接修改作为第一个参数传入的对象。

## 值

值可以是以下字符串的组合，以空格和/或逗号分隔：

- `[str]horizontal` 将 `[prop]hFlip` 设置为 `true`。
- `[str]vertical` 将 `[prop]vFlip` 设置为 `true`。

## 示例

```yaml
src: libraries/utils/flip-from-string.ts
title: 'demo.ts'
```
