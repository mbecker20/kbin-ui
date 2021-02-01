import { createUseStyles } from 'react-jss'
import { colors } from '../theme'

const useJSS = createUseStyles({
  LabelledItems: {
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

  Items: {
    backgroundColor: colors.inputBG,
    padding: '.2em .4em',
    width: 'inherit'
  }
})

export default useJSS