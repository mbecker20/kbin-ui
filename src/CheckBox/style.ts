import { createUseStyles } from 'react-jss'
import { colors, sizes } from '../theme'

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
    width: `${sizes.checkBox.size}em`,
    height: `${sizes.checkBox.size}em`,
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
    width: `${sizes.checkBox.size + sizes.checkBox.checkDif}em`,
    height: `${sizes.checkBox.size + sizes.checkBox.checkDif}em`,
    '&:hover': {
      cursor: 'pointer'
    },
  },

  Highlight: {
    gridRow: 1,
    gridColumn: 1,
    width: `${sizes.checkBox.size + sizes.checkBox.highlightDif}em`,
    height: `${sizes.checkBox.size + sizes.checkBox.highlightDif}em`,
    zIndex: -1
  }
})

export default useJSS