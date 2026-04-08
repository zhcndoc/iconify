```yaml
title: 在 Tailwind CSS 中使用 Iconify
types:
  IconifyJSON: "/docs/types/iconify-json.md"
  IconifyInfo: "/docs/types/iconify-info.md"
functions:
  addIconSelectors: "../iconify/index.md"
```

# 在 Tailwind CSS 中使用 Iconify 插件

[Iconify Tailwind CSS 插件包](../index.md) 包含多个插件。
本文档介绍 `[func]addDynamicIconSelectors` 插件。

此插件适用于 Tailwind 3，也可用于 Tailwind 4，但需要创建配置文件。

如需了解较新的 Tailwind 4 插件，请参阅 [Tailwind 4 插件文档](../tailwind4/index.md)。

## 区别

此插件与 `[func]addIconSelectors()` 有何不同？

它更易于使用。

- 无需配置插件。
- 每个图标对应一个类名。

缺点：

- CSS 不够紧凑。
- 选择器较为奇怪（由 Tailwind CSS 插件系统的限制导致）。

## HTML

要在 HTML 中使用图标，只需创建一个包含图标名称的类名的 `[tag]span` 元素。

类名的语法为：`[str]icon-[{prefix}--{name}]`，其中 `[str]{prefix}` 是图标集前缀，`[str]{name}` 是图标名称。

示例：

```html
<span class="icon-[ph--alarm-duotone]"></span>
<span class="icon-[fluent-emoji-flat--alarm-clock]"></span>
<span class="icon-[carbon--edit-off]"></span>
```

请确保前缀和图标名称之间用两个连字符分隔：`[str]--`。

为什么语法如此复杂？
这是由于 Tailwind CSS 的限制。
它只能处理以 `[str]rule-[value]` 格式创建的动态类名。

## 使用方法

要将插件添加到 Tailwind CSS，你需要打开 `[file]tailwind.config.js`，从 `[npm]@iconify/tailwind` 导入 `[func]addDynamicIconSelectors`，并将其添加到插件列表中。

### 基本用法

```js
const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  plugins: [
    // Iconify 插件
    addDynamicIconSelectors(),
  ],
};
```

#### 颜色

要更改图标颜色，请更改文本颜色。请参阅 [CSS 中单色图标的工作原理](../../index.md#monotone)。

#### 尺寸

请参阅 [图标尺寸文档](./size.md)。

### 高级用法

插件接受选项以自定义插件行为。

如果需要，你可以使用不同的选项创建多个插件实例。

每个插件实例必须为 `[prop]prefix` 选项使用不同的值！

```js
const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  plugins: [
    // Iconify 插件
    addDynamicIconSelectors({
      // 选择器的前缀，每个 addDynamicIconSelectors() 必须不同
      prefix: "icon",
      // 移除冗余规则
      overrideOnly: false,
      // 图标高度，设为 0 可禁用尺寸
      scale: 1,
      // 自定义图标集
      iconSets: {},
      // 用于自定义图标的回调函数（例如更改描边宽度、颜色等）。
      // 第一个参数是内容，第二个是图标名称，第三个是图标集前缀。
      // 函数应返回修改后的内容。
      customise: (content, name, prefix) => content,
    }),
  ],
};
```

## 选项

插件选项：

- `[prop]prefix`，`[type]string` - 动态类名的前缀。
- `[prop]overrideOnly`，`[type]boolean` - 如果启用，将移除重复的 CSS。
- `[prop]iconSets` - 以对象形式提供的图标集，可用于指定图标集位置或自定义图标集。
- `[prop]scale` - 缩放图标。见下文。
- `[prop]customise` - 用于自定义图标的回调函数。你可以使用它来[更改描边宽度、颜色](./customise.md)等。

所有选项的默认值已在上面的代码示例中显示。

### prefix

选项 `[prop]prefix` 设置动态类名的前缀。

默认值为 `[str]icon`。

例如，如果你将其设置为 `[str]icon-hover`（如上面的代码示例所示），你可以使用 `[str]icon-hover-[mdi-light--home]` 来调用图标。

值末尾不能包含 `[str]-`。类名始终会在前缀后自动添加 `[str]-`。这就是 Tailwind CSS 动态类名的工作原理。

你可以使用具有不同 `[prop]prefix` 值的多个插件实例来支持不同的配置选项，如下例所示。

### overrideOnly

如果启用，生成的 CSS 将仅包含覆盖图标的规则。

例如，使用上面代码示例中的配置，插件将为 `[str]icon-hover-[mdi-light--arrow-right]` 生成以下 CSS：

```css
.icon-hover-\[mdi-light--arrow-right\] {
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='black' d='M4 12h12.25L11 6.75l.66-.75l6.5 6.5l-6.5 6.5l-.66-.75L16.25 13H4v-1Z'/%3E%3C/svg%3E");
}
```

这可以与默认选择器结合使用，在悬停时切换图标而无需重复 CSS：

```yaml
src: usage/tailwind/override.js
hint: "tailwind.config.js"
extra:
  - src: usage/tailwind/override.html
    title: "使用示例："
```

### iconSets

通过 `[prop]iconSets`，你可以为图标集使用自定义文件。

请参阅 [自定义图标集文档](./icon-sets.md)。

### scale

请参阅 [图标尺寸文档](./size.md)。

### customise 选项

customise 选项可用于自定义图标。

你可以更改图标颜色、描边宽度、动画持续时间等。

有关详细信息和使用示例，请参阅 [customise 选项文档](./customise.md)。

## 常见问题

如果一切操作正确，图标应该能正常工作。

可能遇到的问题：

### 构建 CSS 时出错

如果缺少图标集或图标，插件将抛出错误。

请查看错误信息。如果插件找不到图标集，请安装依赖项。如果插件找不到图标，说明你使用了错误的图标名称。

### 选择器不生效

你已添加类名并构建了 CSS，但图标不生效？

首先，请确保类名正确。如果正确，很可能是 Tailwind CSS 未检测到你的类名。
如果你熟悉 Tailwind CSS，修复此问题的过程与处理任何其他缺失类名的过程完全相同：

- 你可以检查文件是否已被扫描。
- 你可以在配置中将其添加到 `[prop]safelist`。

## 多个实例

你可以在 Tailwind CSS 配置的插件列表中多次添加该插件，并设置不同的选项。

插件列表中的每个 `[func]addDynamicIconSelectors()` 条目都应具有不同的 `[prop]prefix` 选项，以避免冲突。`[prop]prefix` 的默认值为 `[str]icon`。
