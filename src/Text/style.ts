import { createUseStyles } from 'react-jss'
import { colors, sizes } from '../theme'

const useJSS = createUseStyles({
  Text: {
    color: ({ color }) => color ? color : colors.text,
    fontSize: ({ fontSize }) => fontSize ? fontSize : sizes.text.small,
    width: 'fit-content',
    '&:hover': {
      cursor: ({ pointer, textCursor }) => pointer ? 'pointer' : textCursor ? 'text' : 'default'
    },
    padding: ({ padding }) => padding,
    margin: ({ margin }) => margin,
    overflowWrap: ({ wrap }) => wrap ? 'anywhere' : null,
    textAlign: ({ textAlign }) => textAlign,
    borderBottomStyle: ({ underline }) => underline ? 'solid' : 'none',
    fontWeight: ({ bold }) => bold ? 'bold' : 'normal',
    userSelect: ({ userSelect }) => userSelect ? userSelect : 'none'
  },
})

export default useJSS