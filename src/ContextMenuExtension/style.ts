import { createUseStyles } from 'react-jss'
import { colors, scrollbarJSS } from '../theme'

const maxWidth = '8em'
const maxHeight = '12em'

const useJSS = createUseStyles({
  ExtensionMenu: {
    maxHeight,
    maxWidth,
    backgroundColor: colors.contextMenuBackground,
    padding: '.2em',
    borderRadius: '.2em',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: -1000,
    left: -1000,
    ...scrollbarJSS.thin
  },
})

export default useJSS