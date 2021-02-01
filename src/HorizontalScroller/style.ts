import { createUseStyles } from 'react-jss'

const useJSS = createUseStyles({
  HorizontalScroller: {
    '&::-webkit-scrollbar': {
      backgroundColor: 'transparent'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'white',
    },
  },
})

export default useJSS