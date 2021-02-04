import { createUseStyles } from 'react-jss'
import { colors, zIndex } from '../theme'

const useJSS = createUseStyles({
  LoadingScreen: {
    position: 'fixed',
    width: '100vw',
    height: '300vh',
    backgroundColor: colors.loadingScreenBG,
    zIndex: zIndex.loadingScreen
  },
})

export default useJSS