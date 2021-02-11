import { createUseStyles } from 'react-jss'
import { colors } from '../theme';

const useJSS = createUseStyles({
  Switch: {
    borderRadius: ({ borderRadius }) => borderRadius ? borderRadius : '1em',
    boxShadow: colors.boxShadow,
    '&:hover': {
      cursor: 'pointer'
    },
  },

  SwitchSVG: {
    marginLeft: ({ svgMarginLeft }) => svgMarginLeft ? svgMarginLeft : '1em',
    '&:hover': {
      cursor: 'pointer'
    },
  },
})

export default useJSS;