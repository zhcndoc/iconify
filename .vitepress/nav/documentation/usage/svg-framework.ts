import type { SidebarItem } from '../../sidebar-item'
import { commonAPIFunctions, commonComponentAttributes, commonIconFunctions, commonInternalFunctions } from './common'

const root = '/docs/icon-components/svg-framework/'

export const SVGFrameworkSidebar: SidebarItem[] = [
  {
    text: 'IconifyIconName 类型',
    link: `${root}icon-name`,
    hidden: true,
  },
  // Attributes
  ...commonComponentAttributes(root),
  {
    text: '函数',
    link: `${root}functions`,
    items: [
      // Internal
      ...commonInternalFunctions(root),
      // Getting/adding icons
      ...commonIconFunctions(root),
      // Rendering icons
      {
        text: 'renderSVG()',
        link: `${root}render-svg`,
      },
      {
        text: 'renderHTML()',
        link: `${root}render-html`,
      },
      {
        text: 'renderIcon()',
        link: `${root}render-icon`,
      },
      {
        text: 'buildIcon()',
        link: `${root}build-icon`,
      },
      {
        text: 'replaceIDs()',
        link: `${root}replace-ids`,
      },
      // Observer
      {
        text: 'scan()',
        link: `${root}scan`,
      },
      {
        text: 'observe()',
        link: `${root}observe`,
      },
      {
        text: 'stopObserving()',
        link: `${root}stop-observing`,
      },
      {
        text: 'pauseObserver()',
        link: `${root}pause-observer`,
      },
      {
        text: 'resumeObserver()',
        link: `${root}resume-observer`,
      },
      // API
      ...commonAPIFunctions(root),
    ],
  },
  {
    text: '优化',
    link: `${root}optimizations`,
  },
]
