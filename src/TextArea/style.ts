import { createUseStyles } from 'react-jss'
import { colors, sizes } from '../theme'

const useJSS = createUseStyles({
  TextAreaBounder: {
    margin: '.3em',
    borderStyle: 'solid',
    borderWidth: '.3em',
    borderRadius: ({ bounderBorderRadius }) => bounderBorderRadius ? bounderBorderRadius : '.3em'
  },

  Label: {
    padding: '.2em',
    fontSize: ({ labelFontSize }) => labelFontSize ? labelFontSize : sizes.text.xsmall
  },

  TextArea: {
    backgroundColor: colors.inputBG,
    width: ({ width }) => width ? width : 'inherit',
    outline: 'none',
    borderStyle: 'none',
    fontSize: ({ fontSize }) => fontSize ? fontSize : sizes.text.small,
    fontFamily: 'inherit',
    color: colors.inputText,
    resize: 'vertical',
    fontWeight: ({ bold }) => bold ? 'bold' : 'normal',
    gridArea: ({ gridArea }) => gridArea,
    borderRadius: ({ borderRadius }) => borderRadius,
    height: ({ height }) => height,
    maxWidth: ({ maxWidth }) => maxWidth,
    minWidth: ({ minWidth }) => minWidth,
    maxHeight: ({ maxHeight }) => maxHeight,
    minHeight: ({ minHeight }) => minHeight,
    margin: ({ margin }) => margin,
    padding: ({ padding }) => padding ? padding : '.2em .4em',
    alignSelf: ({ alignSelf }) => alignSelf
  },
})

export default useJSS