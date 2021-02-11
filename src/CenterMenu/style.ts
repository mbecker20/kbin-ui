import { createUseStyles } from 'react-jss'
import { colors, scrollbarJSS, zIndex } from '../theme'

const useJSS = createUseStyles({
  CenterMenuBounder: {
    backgroundColor: colors.centerMenuBackground,
    backdropFilter: 'blur(5px)',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: zIndex.centerMenu,
  },

  CenterMenu: {
    backgroundColor: colors.centerMenu,
    position: 'fixed',
    top: '50vh',
    left: '50vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '1.2vmin',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    padding: '1vmin 2vmin 2vmin 2vmin',
    border: `.1em solid ${colors.centerMenuBorder}`,
    userSelect: 'none',
    transform: 'translate(-50%, -50%)',
  },

  Header: {
    padding: '1vmin 2vmin',
    margin: '0vmin 0vmin 2vmin 0vmin',
    borderColor: 'white',
    borderStyle: 'none none solid none',
  },

  CloseIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '2em',
    height: '2em',
    transform: 'translate(40%, -40%)',
    '&:hover': {
      cursor: 'pointer'
    }
  },

  ErrorReport: {

  },
})

export default useJSS