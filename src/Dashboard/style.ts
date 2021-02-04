import { createUseStyles } from 'react-jss'
import { colors, scrollbarJSS } from '../theme'

const useJSS = createUseStyles({
  DashboardBounder: {
    width: '100vw',
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '[navbar] auto [content] 1fr',
  },

  Dashboard: {
    padding: '.5em 0vw',
    backgroundColor: colors.dashboardBG,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gridColumn: 'content / span 1',
    height: '95vh',
    overflow: 'auto',
    ...scrollbarJSS.thin
  },
})

export default useJSS