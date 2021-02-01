import React from 'react'
import { AnimatedButton } from '../Button/Button'
import FlexRow from '../Flex/FlexRow'
import useJSS from './style'
import { useSpring } from 'react-spring'
import CSS from 'csstype'
import { colors, springConfig } from '../../../theme'

interface Props {
  isRight: boolean
  leftText: string
  rightText: string
  onLeft: () => void
  onRight: () => void
  style?: CSS.Properties
}

function UncontrolledDualButtons({ isRight, leftText, rightText, onLeft, onRight, style }: Props) {
  const classes = useJSS()
  const leftSpring = useSpring({
    backgroundColor: isRight ? colors.unfocussedInput : colors.defaultButton,
    config: springConfig.medium
  })
  const rightSpring = useSpring({
    backgroundColor: isRight ? colors.defaultButton : colors.unfocussedInput,
    config: springConfig.medium
  })
  return (
    <FlexRow className={classes.DualButtons} style={style}>
      <AnimatedButton
        onClick={onLeft}
        style={leftSpring}
      >
        {leftText}
      </AnimatedButton>
      <AnimatedButton
        onClick={onRight}
        style={rightSpring}
      >
        {rightText}
      </AnimatedButton>
    </FlexRow>
  )
}

export default UncontrolledDualButtons