import React, { useState } from 'react'
import useJSS from './style'
import { useSpring, animated } from 'react-spring'
import Conditional from '../Conditional'
import Text from '../Text/Text'
import { zIndex } from '../theme'

declare global {
  interface Window {
    flashNotification: (color: string, text: string) => void
  }
}

const notificationTime = 2500 //milliseconds
let timeoutID = 0

interface Props {
  yLocation?: 'top' | 'center' | 'bottom',
  xLocation?: 'left' | 'center' | 'right',
}

const AnimatedText = animated(Text)

function Notification({ yLocation, xLocation }: Props) {
  const [{ exists, visible, color, text }, setData] = useState({
    exists: false, visible: false, color: '', text: '',
  })
  const classes = useJSS({ color, yLocation, xLocation })
  window.flashNotification = (color, text) => {
    setData({
      exists: true, visible: true, color, text,
    })
    window.clearTimeout(timeoutID)
    timeoutID = window.setTimeout(() => {
      setData({ 
        visible: false, exists, color, text
      })
    }, notificationTime)
  }
  const springStyle = useSpring({
    opacity: visible ? 1 : 0,
    config: { clamp: true },
    onRest: () => { if (!visible) {
      setData({
        exists: false, visible: false, color: '', text: '',
      })
    }}
  })
  return (
    <AnimatedText className={classes.Notification}
      style={Object.assign({ zIndex: exists ? zIndex.notification : -10 }, springStyle)} text={text}
    />
  )
}

export default Notification