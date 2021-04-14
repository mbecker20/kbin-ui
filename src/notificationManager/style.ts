import { createUseStyles } from 'react-jss'
import { sizes } from '../theme'

function getYLocation(yLoc: string) {
  switch(yLoc) {
    case 'top': return '1vh'
    case 'center': return '50vh'
    case 'bottom': return '90vh'
    default: return '5vh'
  }
}

function getXLocation(xLoc: string) {
  switch (xLoc) {
    case 'left': return '3vw'
    case 'center': return '50vw'
    case 'right': return '80vw'
    default: return '50vw'
  }
}

function getTransform(xLocation: string) {
  return `translate(${
    xLocation === 'center' ? '-50%' : '0%'
  }, 0%)`
}

const useJSS = createUseStyles({
  Notification: {
    position: 'fixed',
    top: ({ yLocation }) => getYLocation(yLocation),
    left: ({ xLocation }) => getXLocation(xLocation),
    transform: ({ xLocation }) => getTransform(xLocation),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2vmin',
    margin: '1vmin',
    borderRadius: '4vmin',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    zIndex: 1000,
    fontSize: sizes.text.small,
    backgroundColor: ({ color }) => color,
  }
})

export default useJSS