import { createUseStyles } from 'react-jss'
import { colors, scrollbarJSS } from '../theme'

const useJSS = createUseStyles({
  NavBarBounder: {
    height: '100vh',
    overflowY: 'auto',
    paddingRight: '.7em',
    backgroundColor: colors.navbarBackground,
    ...scrollbarJSS.thin
  },

  NavBar: {
    display: 'grid',
    gridTemplateColumns: '[text] 1fr [icon] auto',
    gridTemplateRows: 'auto',
    gridColumn: 'navbar / span 1',
    gap: '.5em',
    alignItems: 'center',
    gridAutoRows: 'auto',
    margin: '1em'
  },

  Divider: {
    gridColumn: open => open ? 'text / span 2' : 'icon / span 1',
    height: '.2em',
    margin: '.4em 0em',
    backgroundColor: colors.text
  }
})

export default useJSS