import { createUseStyles } from 'react-jss'
import { sizes } from '../theme'

const useJSS = createUseStyles({
  AutoPlacingGrid: {
    display: 'grid',
    gridTemplateRows: ({ numRows, minHeight }) => numRows ? 
      `repeat(${numRows}, ${minHeight ? minHeight : 'auto'})` : null,
    gridTemplateColumns: ({ numCols, minWidth }) => numCols ? 
      `repeat(${numCols}, ${minWidth ? minWidth : sizes.grid.itemMinWidth})` : 
      `repeat(auto-fill, minmax(${minWidth}, 1fr))`,
    gridAutoFlow: ({ direction }) => direction,
    gridAutoRows: ({ numRows, autoRows }) => numRows ? null : autoRows ? autoRows : 'auto',
    gridAutoColumns: ({ numCols, autoCols }) => numCols ? null : autoCols ? autoCols : 'auto',
    gap: ({ gap }) => gap,
    placeItems: ({ placeItems }) => placeItems,
    justifyContent: ({ justifyContent }) => justifyContent,
    alignItems: ({ alignItems }) => alignItems,
    justifyItems: ({ justifyItems }) => justifyItems,
    alignContent: ({ alignContent }) => alignContent,
  },
})

export default useJSS