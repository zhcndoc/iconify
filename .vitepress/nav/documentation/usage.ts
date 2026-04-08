import type { SidebarItem } from "../sidebar-item";
import { IconifyUsageSidebar } from "./usage/iconify";

const usageRoot = "/docs/usage/";

export const UsageSidebar: SidebarItem[] = [
  {
    text: "SVG + CSS",
    collapsed: true,
    link: `${usageRoot}svg-css/`,
    items: [
      {
        text: "Vue",
        link: `${usageRoot}svg-css/vue/`,
      },
      {
        text: "Svelte",
        link: `${usageRoot}svg-css/svelte/`,
      },
      {
        text: "React",
        link: `${usageRoot}svg-css/react/`,
      },
      {
        text: "SolidJS",
        link: `${usageRoot}svg-css/solid/`,
      },
    ],
  },
  {
    text: "CSS 中的 SVG",
    collapsed: true,
    link: `${usageRoot}css/`,
    items: [
      {
        text: "无需代码",
        link: `${usageRoot}css/no-code/`,
      },
      {
        text: "Tailwind CSS",
        link: `${usageRoot}css/tailwind/`,
        collapsed: true,
        items: [
          {
            text: "Tailwind CSS 4",
            link: `${usageRoot}css/tailwind/tailwind4/`,
            // collapsed: true,
            items: [
              {
                text: "尺寸与颜色",
                link: `${usageRoot}css/tailwind/tailwind4/size-color`,
              },
              {
                text: "自定义图标",
                link: `${usageRoot}css/tailwind/tailwind4/custom-icons`,
              },
            ],
          },
          {
            text: "Tailwind CSS 3",
            link: `${usageRoot}css/tailwind/tailwind3/`,
            items: [
              {
                text: "Clean Plugin",
                link: `${usageRoot}css/tailwind/iconify/`,
                // collapsed: true,
                items: [
                  {
                        text: "尺寸与颜色",
                    link: `${usageRoot}css/tailwind/iconify/size-color`,
                  },
                  {
                        text: "前缀",
                    link: `${usageRoot}css/tailwind/iconify/prefixes`,
                  },
                  {
                        text: "选择器",
                    link: `${usageRoot}css/tailwind/iconify/selectors`,
                  },
                  {
                        text: "自定义",
                    link: `${usageRoot}css/tailwind/iconify/customise`,
                  },
                ],
              },
              {
                text: "Dynamic Plugin",
                link: `${usageRoot}css/tailwind/dynamic/`,
                // collapsed: true,
                items: [
                  {
                        text: "尺寸",
                    link: `${usageRoot}css/tailwind/dynamic/size`,
                  },
                  {
                        text: "图标集",
                    link: `${usageRoot}css/tailwind/dynamic/icon-sets`,
                  },
                  {
                        text: "自定义",
                    link: `${usageRoot}css/tailwind/dynamic/customise`,
                  },
                ],
              },
              {
                    text: "简洁类名",
                link: `${usageRoot}css/tailwind/clean`,
                hidden: true,
              },
              {
                    text: "选项",
                link: `${usageRoot}css/tailwind/options`,
                hidden: true,
              },
            ],
          },
        ],
      },
      {
        text: "UnoCSS",
        link: `${usageRoot}css/unocss/`,
      },
      {
        text: "Iconify Utils",
        link: `${usageRoot}css/utils/`,
      },
    ],
  },
  {
    text: "HTML 中的 SVG",
    collapsed: true,
    link: `${usageRoot}svg/`,
    items: [
      {
        text: "无需代码",
        link: `${usageRoot}svg/no-code/`,
      },
      {
        text: "Unplugin Icons",
        link: `${usageRoot}svg/unplugin/`,
      },
      {
        text: "Iconify Utils",
        link: `${usageRoot}svg/utils/`,
      },
      {
        text: "Astro Icon",
        link: `${usageRoot}svg/astro/`,
      },
    ],
  },
  {
    text: "按需图标",
    collapsed: true,
    link: "/docs/icon-components/",
    items: IconifyUsageSidebar,
  },
  {
    text: "UI 设计",
    collapsed: true,
    link: "/docs/design/",
    items: [
      {
        text: "Figma 插件",
        link: "/docs/design/figma/",
      },
      {
        text: "Penpot 插件",
        link: "/docs/design/penpot/",
      },
      {
        text: "Sketch 插件",
        link: "/docs/design/sketch/",
      },
    ],
  },
];
