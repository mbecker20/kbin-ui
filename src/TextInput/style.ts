import { createUseStyles } from 'react-jss'
import { colors, sizes } from '../theme'

const useJSS = createUseStyles({
  InputBounder: {
    margin: '.3em',
    borderStyle: 'solid',
    borderWidth: '.3em',
    borderRadius: ({ bounderBorderRadius }) => bounderBorderRadius ? bounderBorderRadius : '.3em'
  },

  Label: {
    padding: '.2em .5em',
    fontSize: ({ labelFontSize }) => labelFontSize ? labelFontSize : sizes.text.xsmall
  },

  TextInput: {
    backgroundColor: colors.inputBG,
    width: ({ width }) => width,
    outline: 'none',
    fontSize: ({ fontSize }) => fontSize ? fontSize : sizes.text.small,
    borderStyle: 'none',
    color: colors.inputText,
    fontWeight: ({ bold }) => bold ? 'bold' : 'normal',
    margin: ({ margin }) => margin,
    padding: ({ padding }) => padding ? padding : '.2em .4em',
    borderRadius: ({ borderRadius }) => borderRadius
  },
})

export default useJSS