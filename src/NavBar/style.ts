import { createUseStyles } from 'react-jss'

const useJSS = createUseStyles({
  NavBarBounder: {
    height: '100vh',
    overflowY: 'auto'
  },

  NavBar: {
    display: 'grid',
    gridTemplateColumns: '[text] 1fr [icon] auto',
    gridTemplateRows: 'auto',
    gridColumn: 'navbar / span 1',
    gap: '.5em',
    alignItems: 'center',
    gridAutoRows: 'auto',
    margin: '1em'
  },
})

export default useJSS