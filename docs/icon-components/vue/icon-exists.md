```yaml
title: "Iconify for Vue 函数：iconLoaded"
functions:
  getIcon: "./get-icon.md"
  loadIcons: "./load-icons.md"
```

# Iconify for Vue 函数：iconLoaded

本教程属于 [Iconify for Vue 函数教程](./index.md#functions) 的一部分。

`include icon-components/functions/icon-loaded/intro`

## 用法

`include icon-components/functions/icon-loaded/props`

## 示例

```js
import { iconLoaded } from "@iconify/vue";

const icon = "bi:arrow-left";
console.log(`Is ${icon} available?`, iconLoaded(icon) ? "yes" : "no");
```

此示例在图标加载期间动态加载图标数据并渲染 `[html]<slot />`。由于 Vue 组件本身已经实现了该功能，因此这显得有些多余，但此处用于展示如何使用 `[func]iconLoaded()` 和 `[func]loadIcons()`。不过，相较于使用 `[func]iconLoaded()`，使用 `[func]getIcon()` 会是更好的做法。

```js
import { Icon, iconLoaded, loadIcons } from "@iconify/vue";
import { h, defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    Icon,
  },
  props: ["icon"],
  setup() {
    // 用于存储取消加载函数的变量
    const loader = ref(null);

    // 图标状态
    const loaded = ref(null);

    // 检查图标数据是否可用的函数
    const check = (icon: string) => {
      const isLoaded = (loaded.value = iconLoaded(icon));

      // 取消旧的加载器
      if (loader.value) {
        loader.value();
        loader.value = null;
      }

      if (!isLoaded) {
        loader.value = loadIcons([icon], () => {
          loaded.value = iconLoaded(icon);
        });
      }
    };
    return {
      loader,
      loaded,
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
    const loaded = this.loaded;
    if (loaded) {
      return h(Icon, {
        icon: this.icon,
      });
    }
    return this.$slots.default ? this.$slots.default() : null;
  },
});
```

## 旧版

`include icon-components/functions/icon-loaded/legacy`
