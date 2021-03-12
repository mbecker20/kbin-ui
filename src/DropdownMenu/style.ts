import { createUseStyles } from 'react-jss'

const useJSS = createUseStyles({
  DropdownMenu: {
    position: 'sticky',
    top: ({ top }) => top,
    left: ({ left }) => left,
    transform: 'translate(-50%, 0%)'
  },
})

export default useJSS