import type { SidebarItem } from "../../sidebar-item";

const modernComponentRoots = new Set([
  "/docs/iconify-icon/",
  "/docs/icon-components/react/",
  "/docs/icon-components/vue/",
  "/docs/icon-components/svelte/",
]);

export function commonComponentAttributes(root: string): SidebarItem[] {
  return [
    {
      text: "图标颜色",
      link: `${root}color`,
    },
    {
      text: "图标尺寸",
      link: `${root}dimensions`,
    },
    {
      text: "变换",
      link: `${root}transform`,
    },
    {
      text: "垂直对齐",
      link: `${root}inline`,
    },
  ];
}

export function commonInternalFunctions(root: string): SidebarItem[] {
  return [
    {
      text: "addAPIProvider()",
      link: `${root}add-api-provider`,
      hidden: true,
    },
    {
      text: "setFetch()",
      link: `${root}set-fetch`,
      hidden: true,
    },
  ];
}

export function commonIconFunctions(root: string): SidebarItem[] {
  return [
    // Getting icons
    {
      text: "iconLoaded()",
      link: `${root}icon-exists`,
    },
    {
      text: "listIcons()",
      link: `${root}list-icons`,
    },
    {
      text: "getIcon()",
      link: `${root}get-icon`,
    },
    // Adding icons
    {
      text: "addIcon()",
      link: `${root}add-icon`,
    },
    {
      text: "addCollection()",
      link: `${root}add-collection`,
    },
  ];
}

export function commonAPIFunctions(root: string): SidebarItem[] {
  // Custom loader, available only in modern components
  const customLoader: SidebarItem[] = [];
  if (modernComponentRoots.has(root)) {
    customLoader.push({
      text: "setCustomIconLoader()",
      link: `${root}custom-loaders`,
    });
  }

  return [
    // Load icon(s)
    {
      text: "loadIcons()",
      link: `${root}load-icons`,
    },
    {
      text: "loadIcon()",
      link: `${root}load-icon`,
    },
    // Custom loader
    ...customLoader,
    // Cache management
    /*
    {
      text: "enableCache()",
      link: `${root}enable-cache`,
    },
    {
      text: "disableCache()",
      link: `${root}disable-cache`,
    },
    */
  ];
}
