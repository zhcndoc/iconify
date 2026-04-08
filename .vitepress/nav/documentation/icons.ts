import type { SidebarItem } from "../sidebar-item";

const root = "/docs/icons/";

export const IconsSidebar: SidebarItem[] = [
  {
    text: "图标数据",
    link: `${root}icon-data`,
    collapsed: true,
    items: [
      {
        text: "全部图标",
        link: `${root}all`,
      },
      {
        text: "图标集列表",
        link: `${root}collections`,
      },
      {
        text: "单个图标集",
        link: `${root}json`,
      },
      {
        text: "单个图标",
        link: `${root}icons`,
        hidden: true,
      },
    ],
  },
  {
    text: "图标清理",
    link: `${root}icon-basics`,
  },
  {
    text: "图标集",
    link: `${root}icon-set-basics`,
  },
  {
    text: "自定义图标集",
    link: `${root}custom`,
  },
  {
    text: "添加图标集",
    link: "/docs/articles/add-icon-set/",
  },
];
