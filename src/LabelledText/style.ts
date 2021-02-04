import { createUseStyles } from 'react-jss'
import { colors, sizes } from '../theme'

const useJSS = createUseStyles({
  LabelledText: {
    backgroundColor: colors.unfocussedInput,
    padding: sizes.labelledItems.padding,
    margin: sizes.labelledItems.margin,
    borderRadius: sizes.labelledItems.borderRadius,
  },

  Label: {
    backgroundColor: colors.unfocussedInput,
    padding: sizes.labelledItems.labelPadding,
    color: colors.unfocussedInputLabel,
  },

  Text: {
    backgroundColor: colors.inputBG,
    color: colors.inputText,
    padding: sizes.labelledItems.itemsPadding,
    width: 'inherit'
  }
})

export default useJSS