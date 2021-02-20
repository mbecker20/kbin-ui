import { createUseStyles } from 'react-jss'
import { colors, sizes } from '../theme'

const useJSS = createUseStyles({
  InputBounder: {
    margin: '.3em',
    borderStyle: 'solid',
    borderRadius: '.3em',
    borderWidth: '.3em',
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
    padding: '.2em .4em',
    borderStyle: 'none',
    color: colors.inputText,
    fontWeight: ({ bold }) => bold ? 'bold' : 'normal',
    margin: ({ margin }) => margin,
  },
})

export default useJSS