```yaml
title: 'Iconify for Vue 函数：loadIcons'
types:
  IconifyIconName: './icon-name.md'
functions:
  getIcon: './get-icon.md'
  loadIcon: './load-icon.md'
```

# Iconify for Vue 函数：loadIcons

本教程属于 [Iconify for Vue 函数教程](./index.md#functions) 的一部分。

`include icon-components/functions/load-icons/intro`

## 使用方法

`include icon-components/functions/load-icons/props`

## 图标列表

`include icon-components/functions/load-icons/props-icons`

## 回调函数

`include icon-components/functions/load-icons/props-callback`

## IconifyIconName 类型

`include types/iconify-icon-name`

## 示例

加载单个图标的简单回调：

```yaml
src: icon-components/common/load-icons.js
replacements:
  - search: react
    replace: vue
```

`[func]loadIcons()` 的异步版本：

```yaml
src: icon-components/common/load-icons-async.js
replacements:
  - search: react
    replace: vue
```

## 组件示例

此示例动态加载图标数据，并在图标加载期间渲染 `[html]<slot />`。虽然 Vue 组件本身已经具备此功能，因此该示例显得有些多余，但它用于展示如何使用 `[func]getIcon()` 和 `[func]loadIcons()`。

```js
import { Icon, getIcon, loadIcons } from '@iconify/vue';
import { h, defineComponent, ref } from 'vue';

export default defineComponent({
	components: {
		Icon,
	},
	props: ['icon'],
	setup() {
		// 用于存储取消加载函数的变量
		const loader = ref(null);

		// 图标数据
		const data = ref(null);

		// 检查图标数据的函数
		const check = (icon: string) => {
			const iconData = getIcon(icon);

			// 取消旧的加载器
			if (loader.value) {
				loader.value();
				loader.value = null;
			}

			if (iconData) {
				data.value = iconData;
			} else {
				loader.value = loadIcons([icon], () => {
					data.value = getIcon(icon);
				});
			}
		};
		return {
			loader,
			data,
			check,
		};
	},
	watch: {
		icon: {
			immediate: true,
			handler(value) {
				// 检查新值
				this.check(value);
			},
		},
	},
	// 停止加载
	unmounted() {
		const loader = this.loader.value;
		if (loader) {
			loader();
		}
	},
	render() {
		const icon = this.data;
		if (icon) {
			return h(Icon, {
				icon,
			});
		}
		return this.$slots.default ? this.$slots.default() : null;
	},
});
```

如果您只想加载单个图标，还可以使用更简单的 `[func]loadIcon()`。
