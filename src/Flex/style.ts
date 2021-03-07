import { createUseStyles } from 'react-jss'
import { scrollbarJSS } from '../theme'

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
    backgroundColor: ({ backgroundColor }) => backgroundColor,
    maxHeight: ({ maxHeight }) => maxHeight,
    minHeight: ({ minHeight }) => minHeight,
    maxWidth: ({ maxWidth }) => maxWidth,
    minWidth: ({ minWidth }) => minWidth,
    gridArea: ({ gridArea }) => gridArea,
    borderRadius: ({ borderRadius }) => borderRadius,
    justifySelf: ({ justifySelf }) => justifySelf,
    alignSelf: ({ alignSelf }) => alignSelf,
    boxShadow: ({ boxShadow }) => boxShadow,
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
    backgroundColor: ({ backgroundColor }) => backgroundColor,
    maxHeight: ({ maxHeight }) => maxHeight,
    minHeight: ({ minHeight }) => minHeight,
    maxWidth: ({ maxWidth }) => maxWidth,
    minWidth: ({ minWidth }) => minWidth,
    gridArea: ({ gridArea }) => gridArea,
    borderRadius: ({ borderRadius }) => borderRadius,
    boxShadow: ({ boxShadow }) => boxShadow,
    alignSelf: ({ alignSelf }) => alignSelf,
    overflow: ({ scroller, xScroller, overflow }) => 
      (scroller && xScroller) ? 'auto' : 
      scroller ? 'hidden auto' : 
      xScroller ? 'auto hidden' : overflow,
    ...scrollbarJSS.thin
  }
})

export default useJSS