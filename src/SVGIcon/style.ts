import { createUseStyles } from 'react-jss'

const useJSS = createUseStyles({
  SVGIcon: {
    width: ({ width, size }) => width ? width : size,
    height: ({ height, size }) => height ? height : size,
    '&:hover': {
      cursor: ({ pointer }) => pointer ? 'pointer' : 'default'
    },
    transform: ({ scale }) => `scale(${scale})`,
    margin: ({ margin }) => margin,
    padding: ({ padding }) => padding,
    gridArea: ({ gridArea }) => gridArea,
    borderRadius: ({ borderRadius }) => borderRadius,
    boxShadow: ({ boxShadow }) => boxShadow,
    backgroundColor: ({ backgroundColor }) => backgroundColor,
    alignSelf: ({ alignSelf }) => alignSelf,
    justifySelf: ({ justifySelf }) => justifySelf,
    placeSelf: ({ placeSelf }) => placeSelf,
  },
})

export default useJSS