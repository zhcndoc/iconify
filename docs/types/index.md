```yaml
title: Iconify 类型
types:
  IconifyIcon: './iconify-icon.md'
  IconifyAlias: './iconify-alias.md'
  IconifyJSON: './iconify-json.md'
  IconifyInfo: './iconify-info.md'
```

# Iconify 类型

所有 Iconify 库都共享通用的对象结构。它们在 `[npm]@iconify/types` NPM 包中被描述为类型。

## TypeScript

所有类型均使用 TypeScript 进行描述。

如果你不熟悉 TypeScript 但熟悉 JavaScript，理解本文档应该不会太难，因为它主要只涉及基本类型。

理解本文档你需要了解的几个基本 TypeScript 概念：

### Record

类型 `[type]Record<string, number>` 是一个对象，其中键为 `[type]string`，值为 `[type]number`。

对于 PHP 开发者来说，它等同于关联数组。

### unknown

类型 `[type]unknown` 表示值可以是任何类型。

### extends

```yaml
src: types/interface.ts
copy: false
```

这表示一个类型扩展了另一个类型。在上面的示例中，类型 `[type]Foo` 拥有类型 `[type]Bar` 和 `[type]Baz` 的所有属性。

## 主要类型

Iconify 生态系统中使用了两种主要类型：

- `[type]IconifyIcon` 用于单个图标的数据。
- `[type]IconifyJSON` 用于整个图标集。它存储图标数据、图标别名以及各种元数据。

## 附加类型

这些类型在 `[type]IconifyJSON` 类型中使用：

- `[type]IconifyAlias` 用于图标别名。
- `[type]IconifyInfo` 用于图标集信息。
