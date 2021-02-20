import { createUseStyles } from 'react-jss'
import { colors, sizes } from '../theme'

const useJSS = createUseStyles({
  LabelledItems: {
    backgroundColor: colors.unfocussedInput,
    padding: sizes.labelledItems.padding,
    margin: sizes.labelledItems.margin,
    borderRadius: sizes.labelledItems.borderRadius,
  },

  Label: {
    backgroundColor: colors.unfocussedInput,
    //padding: sizes.labelledItems.labelPadding,
    color: colors.unfocussedInputLabel,
  },
})

export default useJSS