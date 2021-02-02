export const colors = {
  contextMenuBackground: '#030917',
  contextMenuItemBorder: 'rgba(.3, .3, .3, .8)',

  defaultButton: '#0a2154',
  redButton: '#7b0303d9',
  buttonBorder: 'rgba(.3, .3, .3, .8)',

  text: '#bac4ce',

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

  dashboardBG: '',
  
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
  switchDiameter: 3, // in vmin
  checkBox: 1.2, // in em
  checkBoxCheckDif: 0,
  checkBoxHighlightDif: 1.5,
}

export function setCustomSizes(customSizes: Partial<typeof sizes>) {
  Object.assign(sizes, customSizes)
}

export const zIndex = {
  contextMenu: 60,
  topbar: 10,
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

export function setCustomSpringConfig(customSpringConfig: Partial<typeof springConfig>) {
  Object.assign(springConfig, customSpringConfig)
}