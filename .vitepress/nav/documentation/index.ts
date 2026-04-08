import type { SidebarItem } from "../sidebar-item";
import { ArticlesSidebar } from "./articles";
import { IconsSidebar } from "./icons";
import { UsageSidebar } from "./usage";
import { LibrariesSidebar } from "./libraries";
import { APISidebar } from "./api";

export const DocumentationSidebar: SidebarItem[] = [
  { text: "用法", collapsed: true, items: UsageSidebar, link: "/docs/usage/" },
  { text: "图标", collapsed: true, items: IconsSidebar, link: "/docs/icons/" },
  {
    text: "Iconify 库",
    collapsed: true,
    items: LibrariesSidebar,
    link: "/docs/libraries/",
  },
  { text: "API", collapsed: true, items: APISidebar, link: "/docs/api/" },
  {
    text: "文章 / 博客",
    collapsed: true,
    items: ArticlesSidebar,
    link: "/docs/articles/",
  },
];
