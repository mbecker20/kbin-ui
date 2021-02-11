import { createUseStyles } from 'react-jss'
import { colors, sizes } from '../theme';

const useJSS = createUseStyles({
  Switch: {
    borderRadius: ({ borderRadius }) => borderRadius ? borderRadius : sizes.switch.borderRadius,
    boxShadow: colors.boxShadow,
    '&:hover': {
      cursor: 'pointer'
    },
  },

  SwitchSVG: {
    marginLeft: ({ svgMarginLeft }) => svgMarginLeft,
    '&:hover': {
      cursor: 'pointer'
    },
  },
})

export default useJSS;