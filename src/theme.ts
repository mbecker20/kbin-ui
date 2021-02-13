import { createUseStyles } from "react-jss"

export const colors = {
  contextMenuBackground: '#030917',
  contextMenuItemBorder: 'rgba(.3, .3, .3, .8)',

  defaultButton: '#0a2154',
  redButton: '#7b0303d9',
  buttonBorder: 'rgba(.3, .3, .3, .8)',

  text: '#bac4ce',
  selectedText: '#2461e8',

  loadingScreenBG: '#000000',
  dashboardBG: '#000000',

  pageHeaderBG: '',

  centerMenuBackground: 'rgba(0, 0, 0, .5)', // this covers 100vw 100vh
  centerMenu: '#030917',
  centerMenuBorder: 'transparent',

  inputBG: 'rgba(0,0,0,.7)',
  inputText: '#bac4ce',
  focussedInput: '#0a2154',
  focussedInputBorder: '#1343b1',
  unfocussedInput: '#252626',
  unfocussedInputLabel: '#bac4ce',
  angryInput: '#5e0000',
  angryInputBorder: '#970000',
  happyInput: '#003e12',
  happyInputBorder: '#007d25',

  notificationSuccess: '#046727c7',
  notificationFailure: '#9e0505c7',
  
  checkBoxBorder: '#b7c0c8',
  checkBoxHighlightCenter: '#0a2154ef',
  checkBoxHighlightEdge: '#0a21549b',

  scrollbarBackground: '#2323246f',
  scrollbarThumb: '#0a2154',

  navbarBackground: '#030917',

  dataTableEvenRow: '#252626',
  dataTableOddRow: 'transparent',

  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

  switchLine: 'black',
  switchOn: '#046727',
  switchOff: '#9e0505'
}

export function setCustomColors(customColors: Partial<typeof colors>) {
  Object.assign(colors, customColors)
}

export const sizes = {
  text: {
    large: 'calc(25px + 2.8vmin)',
    medium: 'calc(18px + 1.8vmin)',
    small: 'calc(12px + 1.2vmin)',
    xsmall: 'calc(8px + 1vmin)',
    xxsmall: 'calc(7px + .8vmin)',
  },
  contextMenu: {
    maxHeight: '90vh',
    maxWidth: '90vw'
  },
  button: {
    margin: '.2em',
    padding: '.3em',
  },
  switch: {
    diameter: 3, // in vmin
    textPadding: '.5em',
    borderRadius: '.5em',
    switchMargin: '0em .7em 0em 0em'
  },
  checkBox: {
    size: 1.2, // in em
    checkDif: 0,
    highlightDif: 1.5,
  },
  labelledItems: {
    itemsPadding: '.2em .4em',
    labelPadding: '.2em',
    margin: '.3em',
    padding: '.2em',
    borderRadius: '.3em'
  },
  dataTable: {
    colGap: '1em',
    rowGap: '.2em',
    itemMargin: '.2em 0em',
    rowBGMargin: '.5em'
  },
  label: {
    titleMargin: '.1em .2em',
    searchMargin: '.2em',
    searchMinWidth: '25%',
    searchMaxWidth: '5em',
  },
  centerMenu: {
    maxWidth: '80vw',
    minWidth: '0vw',
    maxHeight: '85vh',
    minHeight: '0vh'
  },
  grid: {
    itemMinWidth: '1em'
  }
}

type CustomSizes = {
  text?: Partial<typeof sizes.text>
  contextMenu?: Partial<typeof sizes.contextMenu>
  button?: Partial<typeof sizes.button>
  switch?: Partial<typeof sizes.switch>
  checkBox?: Partial<typeof sizes.checkBox>
  labelledItems?: Partial<typeof sizes.labelledItems>
  dataTable?: Partial<typeof sizes.dataTable>
  label?: Partial<typeof sizes.label>
  centerMenu?: Partial<typeof sizes.centerMenu>
  grid?: Partial<typeof sizes.grid>
}

export function setCustomSizes(customSizes: CustomSizes) {
  if (customSizes.text) {
    Object.assign(sizes.text, customSizes.text)
  }
  if (customSizes.contextMenu) {
    Object.assign(sizes.contextMenu, customSizes.contextMenu)
  }
  if (customSizes.button) {
    Object.assign(sizes.button, customSizes.button)
  }
  if (customSizes.switch) {
    Object.assign(sizes.switch, customSizes.switch)
  }
  if (customSizes.checkBox) {
    Object.assign(sizes.checkBox, customSizes.checkBox)
  }
  if (customSizes.labelledItems) {
    Object.assign(sizes.labelledItems, customSizes.labelledItems)
  }
  if (customSizes.dataTable) {
    Object.assign(sizes.dataTable, customSizes.dataTable)
  }
  if (customSizes.label) {
    Object.assign(sizes.label, customSizes.label)
  }
  if (customSizes.centerMenu) {
    Object.assign(sizes.centerMenu, customSizes.centerMenu)
  }
  if (customSizes.grid) {
    Object.assign(sizes.grid, customSizes.grid)
  }
}

export const zIndex = {
  contextMenu: 60,
  centerMenu: 50,
  notification: 100,
  loadingScreen: 100
}

export function setCustomZIndices(customZIndices: Partial<typeof zIndex>) {
  Object.assign(zIndex, customZIndices)
}

export const springConfig = {
  fast: {
    tension: 370,
    friction: 30,
  },
  medium: {
    tension: 330,
    velocity: 5,
    friction: 40,
  },
  xslow: {
    tension: 100,
    friction: 20,
    mass: 50,
    clamp: true
  }
}

type CustomSpringConfig = {
  fast?: Partial<typeof springConfig.fast>
  medium?: Partial<typeof springConfig.medium>
  xslow?: Partial<typeof springConfig.xslow>
}

export function setCustomSpringConfig(customSpringConfig: CustomSpringConfig) {
  if (customSpringConfig.fast) {
    Object.assign(springConfig.fast, customSpringConfig.fast)
  }
  if (customSpringConfig.medium) {
    Object.assign(springConfig.medium, customSpringConfig.medium)
  }
  if (customSpringConfig.xslow) {
    Object.assign(springConfig.xslow, customSpringConfig.xslow)
  }
}

export const scrollbarJSS = {
  regular: {
    '&::-webkit-scrollbar': {
      width: '.8em',
    },
    '&::-webkit-scrollbar-track': {
      background: colors.scrollbarBackground,
    },
    '&::-webkit-scrollbar-thumb': {
      background: colors.scrollbarThumb,
      borderRadius: '1.5em'
    },
    scrollbarWidth: 'auto',
    scrollbarColor: `${colors.scrollbarThumb} ${colors.scrollbarBackground}`,
  },
  thin: {
    '&::-webkit-scrollbar': {
      width: '.5em',
    },
    '&::-webkit-scrollbar-track': {
      background: colors.scrollbarBackground,
    },
    '&::-webkit-scrollbar-thumb': {
      background: colors.scrollbarThumb,
      borderRadius: '1.5em'
    },
    scrollbarWidth: 'thin',
    scrollbarColor: `${colors.scrollbarThumb} ${colors.scrollbarBackground}`,
  },
  none: {
    '&::-webkit-scrollbar': {
      width: '0px',
    },
    '&::-webkit-scrollbar-track': {
      background: colors.scrollbarBackground,
    },
    '&::-webkit-scrollbar-thumb': {
      background: colors.scrollbarThumb,
      borderRadius: '1.5em'
    },
    scrollbarWidth: 'none',
    scrollbarColor: `${colors.scrollbarThumb} ${colors.scrollbarBackground}`,
  }
}

type CustomScrollbarJSS = {
  regular?: Partial<typeof scrollbarJSS.regular>
  thin?: Partial<typeof scrollbarJSS.thin>
  none?: Partial<typeof scrollbarJSS.none>
}

export function setCustomScrollbarJSS(customJSS: CustomScrollbarJSS) {
  if (customJSS.regular) {
    Object.assign(scrollbarJSS.regular, customJSS.regular)
  }
  if (customJSS.thin) {
    Object.assign(scrollbarJSS.thin, customJSS.thin)
  }
  if (customJSS.none) {
    Object.assign(scrollbarJSS.none, customJSS.none)
  }
}

export const useScrollbarJSS = createUseStyles({
  Scroller: {
    '&::-webkit-scrollbar': {
      width: type => scrollbarJSS[type]['&::-webkit-scrollbar'].width,
    },
    '&::-webkit-scrollbar-track': {
      background: type => scrollbarJSS[type]['&::-webkit-scrollbar-track'].background,
    },
    '&::-webkit-scrollbar-thumb': {
      background: type => scrollbarJSS[type]['&::-webkit-scrollbar-thumb'].background,
      borderRadius: type => scrollbarJSS[type]['&::-webkit-scrollbar-thumb'].borderRadius,
    },
    scrollbarWidth: type => scrollbarJSS[type].scrollbarWidth,
    scrollbarColor: type => scrollbarJSS[type].scrollbarColor,
  }
})