import { createUseStyles } from 'react-jss'
import { colors } from '../theme'

const useJSS = createUseStyles({
  Dashboard: {
    width: '100vw',
    height: '100vh',
    backgroundColor: colors.dashboardBG,
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: 'auto 1fr',
    gridTemplateAreas: `
      "navbar header"
      "navbar content"
    `,
  }
})

export default useJSS