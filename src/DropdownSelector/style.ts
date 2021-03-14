import { createUseStyles } from 'react-jss'
import { colors } from '../theme'

function getAlignment(alignment?: 'center' | 'right' | 'left') {
  switch (alignment) {
    case 'center': return '-50%'
    case 'right': return '-100%'
    case 'left': return '0%'
    default: return '-50%'
  }
}

const useJSS = createUseStyles({
  DropdownSelector: {
    position: 'fixed',
    top: ({ top }) => top,
    left: ({ left }) => left,
    transform: ({ alignment }) => `translate(${getAlignment(alignment)}, 0%)`
  },

  Selection: {
    '&::hover': {
      cursor: 'pointer',
      color: ({ highlightColor }) => highlightColor ? highlightColor : colors.circleStroke
    }
  }
})

export default useJSS