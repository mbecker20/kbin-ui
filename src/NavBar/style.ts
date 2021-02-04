import { createUseStyles } from 'react-jss'
import { colors, scrollbarJSS } from '../theme'

const useJSS = createUseStyles({
  NavBar: {
    height: '100vh',
    paddingRight: '.7em',
    backgroundColor: colors.navbarBackground,
    gridColumn: 'navbar / span 1',
    ...scrollbarJSS.thin
  },

  NavBarGrid: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '[text] 1fr [icon] auto',
    gap: '.5em',
    alignItems: 'center',
    margin: '1em'
  },

  Routes: {
    overflowY: 'auto',
    ...scrollbarJSS.none
  },

  Divider: {
    width: '95%',
    height: '.2em',
    margin: '.4em 0em',
    backgroundColor: colors.text
  }
})

export default useJSS