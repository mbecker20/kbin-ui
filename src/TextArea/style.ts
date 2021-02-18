import { createUseStyles } from 'react-jss'
import { colors, sizes } from '../theme'

const useJSS = createUseStyles({
  TextAreaBounder: {
    margin: '.3em',
    borderStyle: 'solid',
    borderRadius: '.3em',
    borderWidth: '.3em',
  },

  Label: {
    padding: '.2em',
    fontSize: ({ labelFontSize }) => labelFontSize ? labelFontSize : sizes.text.xsmall
  },

  TextArea: {
    backgroundColor: colors.inputBG,
    width: 'inherit',
    outline: 'none',
    padding: '.2em .4em',
    borderStyle: 'none',
    fontSize: ({ fontSize }) => fontSize ? fontSize : sizes.text.small,
    fontFamily: 'inherit',
    color: colors.inputText,
    resize: 'vertical',
    fontWeight: ({ bold }) => bold ? 'bold' : 'normal',
    gridArea: ({ gridArea }) => gridArea
  },
})

export default useJSS