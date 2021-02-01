import { createUseStyles } from 'react-jss'
import { colors, sizes } from '../theme'

const useJSS = createUseStyles({
  Button: {
    backgroundColor: ({ isRed }) => isRed ? colors.redButton : colors.defaultButton,
    color: colors.text,
    borderColor: 'transparent',
    borderRadius: '1vmin',
    borderStyle: 'solid',
    borderWidth: '.15em',
    '&:active': {
      borderColor: 'transparent',
    },
    '&:hover': {
      cursor: ({ notClickable }) => notClickable ? '' : 'pointer',
      borderColor: ({ notClickable }) => notClickable ? 'transparent' : colors.buttonBorder,
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: ({ padding }) => padding ? padding : sizes.button.padding,
    margin: ({ margin }) => margin ? margin : sizes.button.margin,
    textAlign: 'center',
    fontSize: ({ fontSize }) => fontSize ? fontSize : sizes.text.xsmall,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    userSelect: 'none',
  },
})

export default useJSS