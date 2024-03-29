import { createUseStyles } from 'react-jss'

const useJSS = createUseStyles({
  Grid: {
    display: 'grid',
    gridTemplateRows: ({ gridTemplateRows, numRows }) => numRows ? `repeat(${numRows}, 1fr)` : gridTemplateRows,
    gridTemplateColumns: ({ gridTemplateColumns, numCols }) => numCols ? `repeat(${numCols}, 1fr)` : gridTemplateColumns,
    gridTemplateAreas: ({ gridTemplateAreas }) => gridTemplateAreas,
    gap: ({ gap }) => gap,
    rowGap: ({ rowGap }) => rowGap,
    columnGap: ({ columnGap }) => columnGap,
    justifyItems: ({ justifyItems }) => justifyItems,
    alignItems: ({ alignItems }) => alignItems,
    placeItems: ({ placeItems }) => placeItems,
    justifyContent: ({ justifyContent }) => justifyContent,
    alignContent: ({ alignContent }) => alignContent,
    placeContent: ({ placeContent }) => placeContent,
    gridAutoColumns: ({ gridAutoColumns }) => gridAutoColumns,
    gridAutoRows: ({ gridAutoRows }) => gridAutoRows,
    gridAutoFlow: ({ gridAutoFlow }) => gridAutoFlow,
    width: ({ width }) => width,
    height: ({ height }) => height,
    minWidth: ({ minWidth }) => minWidth,
    minHeight: ({ minHeight }) => minHeight,
    maxWidth: ({ maxWidth }) => maxWidth,
    maxHeight: ({ maxHeight }) => maxHeight,
    backgroundColor: ({ backgroundColor }) => backgroundColor,
    gridArea: ({ gridArea }) => gridArea,
    margin: ({ margin }) => margin,
    padding: ({ padding }) => padding,
    '&:hover': {
      cursor: ({ pointer }) => pointer ? 'pointer' : 'default'
    },
    boxShadow: ({ boxShadow }) => boxShadow,
    borderRadius: ({ borderRadius }) => borderRadius
  },
})

export default useJSS