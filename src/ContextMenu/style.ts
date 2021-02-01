import { createUseStyles } from 'react-jss'
import { colors, sizes, zIndex } from '../theme'

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
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '0em',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'white',
    },
    userSelect: 'none',
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