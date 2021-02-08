import { createUseStyles } from 'react-jss'
import { colors } from '../theme'

const useJSS = createUseStyles({
  ListItem: {
    backgroundColor: ({ isSelected }) => isSelected ? colors.dataTableEvenRow : colors.dataTableOddRow,
    padding: ({ padding }) => padding ? padding : '.2em',
    margin: ({ margin }) => margin ? margin : '.2em'
  }
})

export default useJSS