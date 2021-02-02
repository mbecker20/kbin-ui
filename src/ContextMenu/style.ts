import { createUseStyles } from 'react-jss'
import { colors, sizes, zIndex, scrollbarJSS } from '../theme'

const useJSS = createUseStyles({
  ContextMenuBounder: {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'transparent',
    position: 'fixed',
    overflow: 'hidden',
    top: 0,
    left: 0,
    zIndex: zIndex.contextMenu,
    opacity: 1,
    visibility: ({ isOpen }) => isOpen ? 'visible' : 'hidden'
  },

  ContextMenu: {
    maxHeight: sizes.contextMenu.maxHeight,
    maxWidth: sizes.contextMenu.maxWidth,
    backgroundColor: colors.contextMenuBackground,
    padding: '.2em',
    borderRadius: '.2em',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: -1000,
    left: -1000,
    userSelect: 'none',
    ...scrollbarJSS.thin
  },

  MenuItem: {
    borderStyle: 'solid',
    borderColor: 'transparent',
    '&:hover': {
      borderColor: colors.contextMenuItemBorder
    }
  }
})

export default useJSS