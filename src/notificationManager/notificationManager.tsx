import { genUpdateID } from 'kbin-state'
import React, { useState } from 'react'
import { useSpring } from 'react-spring'
import { AnimatedText } from '../Text/Text'
import { colors, zIndex } from '../theme'
import useJSS from './style'

const TIMEOUT = 3000

const DEFAULT = {
  xLocation: 'right',
  yLocation: 'top'
}

function createNotificationManager(options?: {
  xLocation?: 'left' | 'center' | 'right',
  yLocation?: 'top' | 'center' | 'bottom'
}) {
  const { xLocation, yLocation } = Object.assign({}, DEFAULT, options)
  const manager: {
    success: boolean
    message: string
    open: () => void
    close: () => void
    timeoutID: number
  } = {
    success: false,
    message: '',
    open: () => {},
    close: () => {},
    timeoutID: -1
  }

  function flashNotification(success: boolean, message: string) {
    window.clearTimeout(manager.timeoutID)
    Object.assign(manager, { success, message })
    manager.open()
    manager.timeoutID = window.setTimeout(manager.close, TIMEOUT)
  }

  function Notification() {
    const [{ exists, visible }, setState] = useState({ exists: false, visible: true, id: genUpdateID(0) })
    manager.open = () => {
      setState({ exists: true, visible: true, id: genUpdateID(0) })
    }
    manager.close = () => {
      setState({ exists: true, visible: false, id: genUpdateID(0) })
    }
    const springStyle = useSpring({
      opacity: visible ? 1 : 0,
      config: { clamp: true },
      onRest: () => {
        if (!visible) {
          setState({ exists: false, visible: false, id: genUpdateID(0) })
        }
      }
    })
    const classes = useJSS({ color: manager.success ? colors.notificationSuccess : colors.notificationFailure, yLocation, xLocation })
    return (
      <AnimatedText className={classes.Notification}
        style={Object.assign({ zIndex: exists ? zIndex.notification : -10 }, springStyle)} text={manager.message}
      />
    )
  }

  return {
    flashNotification, Notification
  }
}

export default createNotificationManager