import type { SidebarItem } from "../sidebar-item";

const root = "/docs/articles/";

export const ArticlesSidebar: SidebarItem[] = [
  // Articles
  {
    text: "文章",
    link: `${root}index.md`,
    collapsed: true,
    items: [
      {
        text: "清理 SVG",
        collapsed: true,
        link: `${root}cleaning-up-icons/`,
        items: [
          {
            text: "示例",
          },
          {
            text: "错误图标示例",
            link: `${root}cleaning-up-icons/cleanup`,
          },
          {
            text: "校验 SVG",
            link: `${root}cleaning-up-icons/validate`,
          },
          {
            text: "修改图标调色板",
            link: `${root}cleaning-up-icons/palette`,
          },
          {
            text: "优化图标",
            link: `${root}cleaning-up-icons/optimise`,
          },
        ],
      },
      {
        text: "SVG 动画",
        link: `${root}svg-animation-issues/`,
      },
      {
        text: "供应商锁定",
        link: `${root}vendor-lock-in`,
        hidden: true,
      },
    ],
  },
  // Migration guides
  {
    text: "迁移指南",
    link: `${root}migration/index.md`,
    collapsed: true,
    items: [
      {
        text: "组件 2025",
        link: `${root}migration/icon-v3.md`,
      },
      {
        text: "Figma 2024",
        link: "/docs/design/figma/update-2024.md",
      },
    ],
  },
];
