import { createUseStyles } from 'react-jss'
import { colors } from '../theme'

const useJSS = createUseStyles({
  LabelledText: {
    backgroundColor: colors.unfocussedInput,
    padding: '.2em',
    margin: '.3em',
    borderRadius: '.3em',
  },

  Label: {
    backgroundColor: colors.unfocussedInput,
    padding: '.2em',
    color: colors.unfocussedInputLabel,
  },

  Text: {
    backgroundColor: colors.inputBG,
    color: colors.inputText,
    padding: '.2em .4em',
    width: 'inherit'
  }
})

export default useJSS