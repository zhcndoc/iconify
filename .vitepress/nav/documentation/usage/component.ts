import type { SidebarItem } from '../../sidebar-item'
import { commonAPIFunctions, commonComponentAttributes, commonIconFunctions, commonInternalFunctions } from './common'

export function iconComponentSidebar(root: string): SidebarItem[] {
  return [
    {
      text: 'IconifyIconName 类型',
      link: `${root}icon-name`,
      hidden: true,
    },
    // Attributes
    ...commonComponentAttributes(root),
    {
      text: '函数',
      items: [
      // Internal
        ...commonInternalFunctions(root),
        // Getting/adding icons
        ...commonIconFunctions(root),
        // API
        ...commonAPIFunctions(root),
        // Rendering icons
        {
          text: 'buildIcon()',
          link: `${root}build-icon`,
        }, {
          text: 'replaceIDs()',
          link: `${root}replace-ids`,
        }],
    },
  ]
}
