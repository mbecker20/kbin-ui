import { createUseStyles } from 'react-jss'
import { colors, sizes } from '../theme'

const useJSS = createUseStyles({
  Text: {
    color: ({ color }) => color ? color : colors.text,
    fontSize: ({ fontSize }) => fontSize ? fontSize : sizes.text.small,
    '&:hover': {
      cursor: ({ pointer, textCursor }) => pointer ? 'pointer' : textCursor ? 'text' : 'default'
    },
    padding: ({ padding }) => padding,
    margin: ({ margin }) => margin,
    overflowWrap: ({ wrap }) => wrap ? 'anywhere' : null,
    textAlign: ({ textAlign }) => textAlign,
    borderBottomStyle: ({ underline }) => underline ? 'solid' : 'none',
    fontWeight: ({ bold }) => bold ? 'bold' : 'normal',
    userSelect: ({ userSelect }) => userSelect ? 'text' : 'none',
    gridArea: ({ gridArea }) => gridArea,
    alignSelf: ({ alignSelf }) => alignSelf,
    justifySelf: ({ justifySelf }) => justifySelf,
    placeSelf: ({ placeSelf }) => placeSelf,
    boxShadow: ({ boxShadow }) => boxShadow,
    backgroundColor: ({ backgroundColor }) => backgroundColor,
    width: ({ width }) => width ? width : 'fit-content',
    height: ({ height }) => height,
    maxHeight: ({ maxHeight }) => maxHeight,
    maxWidth: ({ maxWidth }) => maxWidth,
    minWidth: ({ minWidth }) => minWidth,
    minHeight: ({ minHeight }) => minHeight,
    borderRadius: ({ borderRadius }) => borderRadius,
    whiteSpace: ({ whitespaceWrap }) => whitespaceWrap ? 'pre-wrap' : undefined
  },
})

export default useJSS