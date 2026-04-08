import type { DefaultTheme } from "vitepress";

const DocumentationNav: DefaultTheme.NavItemWithLink[] = [
  { text: "文档", link: "/docs/" },
  {
    text: "图标与图标集",
    link: "/docs/icons/",
    activeMatch: "^/docs/icons/",
  },
  {
    text: "如何使用图标",
    link: "/docs/usage/",
    activeMatch: "^/docs/(usage|design|iconify-icon|icon-components)/",
  },
  {
    text: "开发者库",
    link: "/docs/libraries/",
    activeMatch: "^/docs/(libraries|types)/",
  },
  { text: "Iconify API", link: "/docs/api/", activeMatch: "^/docs/api/" },
];

const AboutNav: DefaultTheme.NavItemWithLink[] = [
  { text: "关于 Iconify", link: "/about/" },
  { text: "支持", link: "/support/" },
  { text: "历史", link: "/about/history" },
  { text: "隐私", link: "/privacy/" },
];

export const Nav: DefaultTheme.NavItem[] = [
  {
    text: "新闻",
    link: "/news/",
    activeMatch: "^/news/",
  },
  {
    text: "图标集",
    link: "https://icon-sets.iconify.design/",
    target: "_blank",
  },
  {
    text: "文档",
    items: DocumentationNav,
    activeMatch: "^/docs/",
  },
  {
    text: "博客",
    link: "/docs/articles/",
    activeMatch: "^/docs/articles/",
  },
  {
    text: "赞助",
    link: "/sponsors/",
  },
  {
    text: "关于",
    items: AboutNav,
    activeMatch: "^/(about|support|privacy)/",
  },
  {
    text: "简中文档",
    link: "https://www.zhcndoc.com",
    target: "_blank",
  }
];
