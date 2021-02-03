import React from 'react'
import { useSpring, animated } from 'react-spring'
import { springConfig } from '../theme'
import Conditional from '../Conditional'
import { AnimatedText } from '../Text/Text'
import useJSS from './style'

type ErrorReportControlData = {
  exists: boolean
  visible: boolean
  setExistFalse: () => void
  errorString: string
}

function ErrorReport({ erControlData }: {
  erControlData: ErrorReportControlData
}) {
  const classes = useJSS()
  const { exists, visible, setExistFalse, errorString } = erControlData
  const springStyle = useSpring({
    opacity: visible ? 1 : 0,
    onRest: () => { if (!visible) setExistFalse() },
    config: springConfig.fast
  })
  return (
    <Conditional showIf={exists} >
      <AnimatedText className={classes.ErrorReport} 
        text={errorString} style={springStyle}
      />
    </Conditional>
  )
}

export default ErrorReport