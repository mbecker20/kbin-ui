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
    padding: ({ padding }) => padding
  },
})

export default useJSS