import { createUseStyles } from 'react-jss'

const useJSS = createUseStyles({
  FlexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: ({ justifyContent }) => justifyContent,
    alignItems: ({ alignItems }) => alignItems,
    flexWrap: ({ flexWrap }) => flexWrap,
    '&:hover': {
      cursor: ({ pointer }) => pointer ? 'pointer' : 'default'
    },
    width: ({ width }) => width,
    height: ({ height }) => height,
    margin: ({ margin }) => margin,
    padding: ({ padding }) => padding,
    backgroundColor: ({ backgroundColor }) => backgroundColor
  },

  FlexCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: ({ justifyContent }) => justifyContent,
    alignItems: ({ alignItems }) => alignItems,
    '&:hover': {
      cursor: ({ pointer }) => pointer ? 'pointer' : 'default'
    },
    width: ({ width }) => width,
    height: ({ height }) => height,
    margin: ({ margin }) => margin,
    padding: ({ padding }) => padding,
    backgroundColor: ({ backgroundColor }) => backgroundColor
  }
})

export default useJSS