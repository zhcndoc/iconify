```yaml
title: 统计图标集中的图标数量
types:
  IconSet: './index.md'
```

# count()

此函数属于 [Iconify Tools](../index.md) 中的 `[type]IconSet` 类。

函数 `[func]count()` 用于统计图标集中的图标数量。

## 用法

该函数无参数。

函数返回图标的 `[type]number`（数量）。

## 统计哪些图标？ {#logic}

计入统计的：

- 图标。
- 变体（见下文）。

不计入统计的：

- 隐藏的图标及其别名/变体。
- 别名。

## 图标类型

`include libraries/tools/icon-set/icon-types`

## 示例

```yaml
src: libraries/tools/icon-set/count.ts
title: 'example.ts'
```
