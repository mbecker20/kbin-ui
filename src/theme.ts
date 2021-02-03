import { createUseStyles } from "react-jss"

export const colors = {
  contextMenuBackground: '#030917',
  contextMenuItemBorder: 'rgba(.3, .3, .3, .8)',

  defaultButton: '#0a2154',
  redButton: '#7b0303d9',
  buttonBorder: 'rgba(.3, .3, .3, .8)',

  text: '#bac4ce',
  selectedText: '#2461e8',

  centerMenuBackground: 'rgba(0, 0, 0, .5)', // this covers 100vw 100vh
  centerMenu: '#030917',
  centerMenuBorder: 'transparent',

  inputBG: 'rgba(0,0,0,.7)',
  inputText: '#bac4ce',
  focussedInput: '#0a2154',
  focussedInputBorder: '#1343b1',
  unfocussedInput: '#252626',
  unfocussedInputLabel: '#bac4ce',

  notificationSuccess: '#046727c7',
  notificationFailure: '#9e0505c7',
  
  checkBoxBorder: '#b7c0c8',
  checkBoxHighlightCenter: '#0a2154ef',
  checkBoxHighlightEdge: '#0a21549b',
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
  file: {
    width: 10, // in em
    height: 12, // in em
  },
  button: {
    margin: '.2em',
    padding: '.3em',
  },
  switch: {
    diameter: 3, // in vmin
  },
  checkBox: {
    size: 1.2, // in em
    checkDif: 0,
    highlightDif: 1.5,
  }
}

type CustomSizes = {
  text?: Partial<typeof sizes.text>
  contextMenu?: Partial<typeof sizes.contextMenu>
  file?: Partial<typeof sizes.file>
  button?: Partial<typeof sizes.button>
  switch?: Partial<typeof sizes.switch>
  checkBox?: Partial<typeof sizes.checkBox>
}

export function setCustomSizes(customSizes: CustomSizes) {
  if (customSizes.text) {
    Object.assign(sizes.text, customSizes.text)
  }
  if (customSizes.contextMenu) {
    Object.assign(sizes.contextMenu, customSizes.contextMenu)
  }
  if (customSizes.file) {
    Object.assign(sizes.file, customSizes.file)
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
}

export const zIndex = {
  contextMenu: 60,
  centerMenu: 50,
  notification: 100
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
      background: '#2323246f',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#0a2154',
      borderRadius: '1.5em'
    },
    scrollbarWidth: 'auto',
    scrollbarColor: '#000000 #0a2154',
  },
  thin: {
    '&::-webkit-scrollbar': {
      width: '.5em',
    },
    '&::-webkit-scrollbar-track': {
      background: '#2323246f',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#0a2154',
      borderRadius: '1.5em'
    },
    scrollbarWidth: 'thin',
    scrollbarColor: '#000000 #0a2154',
  },
  none: {
    '&::-webkit-scrollbar': {
      width: '0px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#2323246f',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#0a2154',
      borderRadius: '1.5em'
    },
    scrollbarWidth: 'none',
    scrollbarColor: '#000000 #0a2154',
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