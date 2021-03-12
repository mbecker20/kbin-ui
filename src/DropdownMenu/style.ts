import { createUseStyles } from 'react-jss'

const useJSS = createUseStyles({
  DropdownMenu: {
    position: 'fixed',
    top: ({ top }) => top,
    left: ({ left }) => left,
    transform: 'translate(-50%, 0%)'
  },
})

export default useJSS