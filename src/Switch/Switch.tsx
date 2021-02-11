import React, { useState } from 'react'
import useJSS from './style'
import { useSpring, animated } from 'react-spring'
import { sizes, colors, springConfig } from '../theme'
import FlexRow from '../Flex/FlexRow'
import Text from '../Text/Text'
import CSS from 'csstype'

const heightDif = 1

const fullWidth = 2 * sizes.switch.diameter
const fullHeight = sizes.switch.diameter + heightDif

const rectWidth = 1.5 * sizes.switch.diameter
const rectHeight = sizes.switch.diameter - heightDif
const rectX = sizes.switch.diameter / 4
const rectY = heightDif

const circleCY = (sizes.switch.diameter + heightDif) / 2


function Switch({ 
  text, onSwitch, initState, style, fontSize, padding, margin, borderRadius, textStyle,
  backgroundColor, userSelect, svgMarginLeft, textMargin, textPadding
}: {
  text: string,
  onSwitch: (newState: boolean) => void,
  initState: boolean,
  style?: CSS.Properties
  fontSize?: string
  textStyle?: CSS.Properties
  padding?: string
  margin?: string
  textMargin?: string
  textPadding?: string
  borderRadius?: string
  backgroundColor?: string
  userSelect?: boolean
  svgMarginLeft?: string
}) {
  const [isSwitched, setSwitched] = useState(initState)
  const classes = useJSS({ borderRadius, svgMarginLeft })
  const spring = useSpring({
    cx: isSwitched ? `${fullWidth - sizes.switch.diameter / 2}vmin` : `${sizes.switch.diameter / 2}vmin`,
    fill: isSwitched ? colors.notificationSuccess : colors.notificationFailure,
    config: springConfig.medium,
  })
  function onClick() {
    onSwitch(!isSwitched)
    setSwitched(!isSwitched)
  }
  return (
    <FlexRow
      className={classes.Switch}
      alignItems='center'
      justifyContent='space-between'
      style={style}
      padding={padding}
      margin={margin}
      onClick={onClick}
      backgroundColor={backgroundColor}
    >
      <Text 
        text={text} 
        fontSize={fontSize} 
        style={textStyle}
        onClick={onClick}
        userSelect={userSelect}
        margin={textMargin}
        padding={textPadding ? textPadding : sizes.switch.textPadding}
        pointer
      />
      <svg
        className={classes.SwitchSVG}
        width={`${fullWidth}vmin`}
        height={`${fullHeight}vmin`}
        onClick={onClick}
      >
        <rect width={`${rectWidth}vmin`} height={`${rectHeight}vmin`} x={`${rectX}vmin`} y={`${rectY}vmin`} rx='10' ry='10' fill={colors.switchLine} />
        <animated.circle cx={spring.cx as any} cy={`${circleCY}vmin`} r={`${sizes.switch.diameter / 2}vmin`} fill={spring.fill} />
      </svg>
    </FlexRow>      
  )
}

export default Switch