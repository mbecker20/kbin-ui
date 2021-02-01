import { createUseStyles } from 'react-jss'

const useJSS = createUseStyles({
  AutoPlacingGrid: {
    display: 'grid',
    gridTemplateRows: ({ numRows, minHeight }) => numRows ? 
      `repeat(${numRows}, ${minHeight})` : null,
    gridTemplateColumns: ({ numCols, minWidth }) => numCols ? 
      `repeat(${numCols}, ${minWidth})` : 
      `repeat(auto-fill, minmax(${minWidth}, 1fr))`,
    gridAutoFlow: ({ direction }) => direction,
    gridAutoRows: ({ numRows }) => numRows ? null : 'auto',
    gridAutoColumns: ({ numCols }) => numCols ? null : 'auto',
    gap: ({ gap }) => gap,
    placeItems: ({ placeItems }) => placeItems ? placeItems : 'center',
    justifyContent: ({ justifyContent }) => justifyContent,
    alignItems: ({ alignItems }) => alignItems,
  },
})

export default useJSS