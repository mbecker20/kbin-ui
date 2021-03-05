import React, { ReactNode } from 'react'
import CSS from 'csstype'
import { animated, useSpring } from 'react-spring'
import FlexPage from './FlexPage'
import { sizes } from '../theme'
 
const AnimFlexPage = animated(FlexPage)

function AnimatedFlexPage({ 
  children, margin, style, bounderStyle
}: {
  style?: CSS.Properties
  bounderStyle?: CSS.Properties
  children: ReactNode
  margin?: string
}) {
  const loadSpring = useSpring({
    from: {
      transform: `translate(0px, ${sizes.page.animationHeight}px)`,
      opacity: 0
    },
    to: {
      transform: 'translate(0px, 0px)',
      opacity: 1
    }
  })
  return (
    <AnimFlexPage
      style={Object.assign(loadSpring, style)}
      margin={margin}
      bounderStyle={bounderStyle}
    >
      {children}
    </AnimFlexPage>
  )
}

export default AnimatedFlexPage