import { createUseStyles } from 'react-jss'
import { colors, scrollbarJSS } from '../theme'

const useJSS = createUseStyles({
  NavBarBounder: {
    height: '100vh',
    overflowY: 'auto',
    paddingRight: '1em',
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
})

export default useJSS