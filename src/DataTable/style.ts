import { createUseStyles } from 'react-jss'
import { colors, sizes } from '../theme'

function getGridTColsRec(columns: string[]): string {
  // assumes first exists
  const [first, ...rest] = columns
  if (rest.length === 0) {
    return `[${first}] auto`
  } else {
    return `[${first}] auto ` + getGridTColsRec(rest)
  }
}

function getGridTCols(primaryKey: string, columns: string[]) {
  return columns.length > 0 ? `[${primaryKey}] auto ${getGridTColsRec(columns)}` : `[${primaryKey}] auto`
}

const useJSS = createUseStyles({
  DataTable: {
    display: 'grid',
    gridTemplateColumns: ({ primaryKey, columns }) => getGridTCols(primaryKey, columns),
    width: ({ width }) => width,
    height: ({ height }) => height,
    color: ({ color }) => color ? color : colors.text,
    columnGap: ({ colGap }) => colGap ? colGap : sizes.dataTable.colGap, // move to theme
    rowGap: ({ rowGap }) => rowGap ? rowGap : sizes.dataTable.rowGap,
    margin: ({ margin }) => margin,
    padding: ({ padding }) => padding, 
  },
})

export default useJSS