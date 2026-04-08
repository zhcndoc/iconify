import type { SidebarItem } from '../../sidebar-item'

const root = '/docs/libraries/utils/'

export const UtilsSidebar: SidebarItem[] = [
  {
    text: '图标集',
    collapsed: true,
    items: [{
      text: 'validateIconSet()',
      link: `${root}validate-icon-set`,
    }, {
      text: 'quicklyValidateIconSet()',
      link: `${root}quickly-validate-icon-set`,
    }, {
      text: 'getIcons()',
      link: `${root}get-icons`,
    }, {
      text: 'getIconData()',
      link: `${root}get-icon-data`,
    }, {
      text: 'minifyIconSet()',
      link: `${root}minify-icon-set`,
    }, {
      text: 'expandIconSet()',
      link: `${root}expand-icon-set`,
    }, {
      text: 'convertIconSetInfo()',
      link: `${root}convert-info`,
    }, {
      text: 'parseIconSet()',
      link: `${root}parse-icon-set`,
    }],
  },
  {
    text: '图标',
    collapsed: true,
    items: [{
      text: 'mergeIconData()',
      link: `${root}merge-icon-data`,
    }, {
      text: 'defaultIconProps',
      link: `${root}default-icon-props`,
    }, {
      text: 'FullIconifyIcon',
      link: `${root}full-iconify-icon`,
      hidden: true,
    }],
  },
  {
    text: '图标自定义',
    collapsed: true,
    items: [{
      text: 'mergeCustomisations()',
      link: `${root}merge-customisations`,
    }, {
      text: 'defaultIconCustomisations',
      link: `${root}default-icon-customisations`,
    }, {
      text: 'toBoolean()',
      link: `${root}to-boolean`,
    }, {
      text: 'rotateFromString()',
      link: `${root}rotate-from-string`,
    }, {
      text: 'flipFromString()',
      link: `${root}flip-from-string`,
    }, {
      text: 'IconifyIconCustomisations',
      link: `${root}icon-customisations`,
      hidden: true,
    }],
  },
  {
    text: '构建 SVG',
    collapsed: true,
    items: [{
      text: 'iconToSVG()',
      link: `${root}icon-to-svg`,
    }, {
      text: 'iconToHTML()',
      link: `${root}icon-to-html`,
    }, {
      text: 'calculateSize()',
      link: `${root}calculate-size`,
    }, {
      text: 'replaceIDs()',
      link: `${root}replace-ids`,
    }],
  },
  {
    text: '解析 SVG',
    collapsed: true,
    items: [{
      text: 'parseSVGContent()',
      link: `${root}parse-svg-content`,
    }, {
      text: 'buildParsedSVG()',
      link: `${root}build-parsed-svg`,
    }, {
      text: 'convertParsedSVG()',
      link: `${root}convert-parsed-svg`,
    }, {
      text: 'getSVGViewBox()',
      link: `${root}get-svg-viewbox`,
    }, {
      text: 'splitSVGDefs()',
      link: `${root}split-svg-defs`,
    }, {
      text: 'mergeDefsAndContent()',
      link: `${root}merge-defs-and-content`,
    }, {
      text: 'wrapSVGContent()',
      link: `${root}wrap-svg-content`,
    }],
  },
  {
    text: 'CSS',
    collapsed: true,
    items: [{
      text: 'getIconCSS()',
      link: `${root}get-icon-css`,
    }, {
      text: 'getIconsCSS()',
      link: `${root}get-icons-css`,
    }, {
      text: 'getIconContentCSS()',
      link: `${root}get-icon-content-css`,
    }, {
      text: 'getIconsContentCSS()',
      link: `${root}get-icons-content-css`,
    }],
  },
  {
    text: '图标名称',
    collapsed: true,
    items: [{
      text: 'matchName',
      link: `${root}match-name`,
    }, {
      text: 'stringToIcon()',
      link: `${root}string-to-icon`,
    }, {
      text: 'validateIconName()',
      link: `${root}validate-icon`,
    }, {
      text: 'IconName 类型',
      link: `${root}icon-name`,
      hidden: true,
    }],
  },
  {
    text: '颜色',
    collapsed: true,
    items: [{
      text: 'stringToColor()',
      link: `${root}string-to-color`,
    }, {
      text: 'compareColors()',
      link: `${root}compare-colors`,
    }, {
      text: 'colorToString()',
      link: `${root}color-to-string`,
    }, {
      text: 'Color type',
      link: `${root}color`,
    }],
  },
  {
    text: '示例',
    collapsed: true,
    link: `${root}examples/`,
    items: [{
      text: '图标集转 SVG',
      link: `${root}examples/export-svgs-from-icon-set`,
    }, {
      text: '导出 SVG',
      items: [{
        text: '从图标集',
        link: `${root}examples/export-svg-from-icon-set`,
      }, {
        text: '从数据',
        link: `${root}examples/export-svg-from-data`,
      }],
    }, {
      text: '导出 CSS',
      link: `${root}examples/generate-css`,
    }],
  },
]
