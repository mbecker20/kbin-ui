import { createUseStyles } from 'react-jss'
import { colors } from '../theme'

const useJSS = createUseStyles({
  Header: {
    gridArea: 'header',
    backgroundColor: ({ headerBG }) => headerBG ? headerBG : colors.pageHeaderBG,
  },

  Content: {
    gridArea: 'content'
  }
})

export default useJSS