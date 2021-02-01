import { createUseStyles } from 'react-jss'
import { colors, sizes } from '../../../theme'

const useJSS = createUseStyles({
  CheckBoxBounder: {
    display: 'grid',
    gridTemplateRows: 'auto',
    gridTemplateColuns: 'auto',
    placeItems: 'center',
  },

  CheckBox: {
    gridRow: 1,
    gridColumn: 1,
    width: `${sizes.checkBox}em`,
    height: `${sizes.checkBox}em`,
    borderStyle: 'solid',
    borderColor: colors.checkBoxBorder,
    borderWidth: '.1em',
    '&:hover': {
      cursor: 'pointer'
    },
    zIndex: 1
  },

  Check: {
    gridRow: 1,
    gridColumn: 1,
    width: `${sizes.checkBox + sizes.checkBoxCheckDif}em`,
    height: `${sizes.checkBox + sizes.checkBoxCheckDif}em`,
    '&:hover': {
      cursor: 'pointer'
    },
  },

  Highlight: {
    gridRow: 1,
    gridColumn: 1,
    width: `${sizes.checkBox + sizes.checkBoxHighlightDif}em`,
    height: `${sizes.checkBox + sizes.checkBoxHighlightDif}em`,
    zIndex: -1
  }
})

export default useJSS