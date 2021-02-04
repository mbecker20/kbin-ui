import React, { ReactElement, useState } from 'react'
import { useSpring } from 'react-spring'
import Conditional from '../Conditional'
import { AnimatedFlexCol } from '../Flex/FlexCol'
import { springConfig } from '../theme'
import useJSS from './style'

function LoadingScreen({ initialized, children }: {
  initialized?: boolean
  children?: ReactElement
}) {
  const [exists, setExists] = useState(false)
  const loadedStyle = useSpring({
    top: initialized ? '0vh' : '-100vh',
    opacity: initialized ? 0 : 1,
    onRest: () => { if (initialized) setExists(false) },
    config: springConfig.xslow
  })
  const classes = useJSS()
  return (
    <Conditional showIf={exists}>
      <AnimatedFlexCol
        className={classes.LoadingScreen}
        alignItems='center'
        justifyContent='center'
        style={loadedStyle as any}
      >
        {children}
      </AnimatedFlexCol>
    </Conditional>
  )
}

export default LoadingScreen