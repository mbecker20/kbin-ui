import { createUseStyles } from 'react-jss'
import { colors, scrollbarJSS } from '../theme'

const useJSS = createUseStyles({
  NavBar: {
    height: '100vh',
    backgroundColor: colors.navbarBackground,
    gridColumn: 'navbar / span 1',
    display: 'grid',
    gridTemplateRows: '[top] auto [topdiv] auto [routes] 1fr [bottomdiv] auto [bottom] auto'
  }, 

  Routes: {
    overflowY: 'auto',
    ...scrollbarJSS.none
  },

  Divider: {
    height: '.2em',
    margin: '.4em 0em',
    backgroundColor: colors.text,
  }
})

export default useJSS