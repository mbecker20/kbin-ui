import React, { useState } from 'react'
import useJSS from './style'
import { useSpring, animated } from 'react-spring'
import { sizes, colors, springConfig } from '../theme'

interface Props {
  text: string,
  onSwitch: (newState: boolean) => void,
  initState: boolean,
  style?: object,
  fontSize?: string
}

const heightDif = 1

const fullWidth = 2 * sizes.switch.diameter
const fullHeight = sizes.switch.diameter + heightDif

const rectWidth = 1.5 * sizes.switch.diameter
const rectHeight = sizes.switch.diameter - heightDif
const rectX = sizes.switch.diameter / 4
const rectY = heightDif

const circleCY = (sizes.switch.diameter + heightDif) / 2


function Switch({ text, onSwitch, initState, style, fontSize }: Props) {
  const [isSwitched, setSwitched] = useState(initState)
  const classes = useJSS({ fontSize })
  const spring = useSpring({
    cx: isSwitched ? `${fullWidth - sizes.switch.diameter / 2}vmin` : `${sizes.switch.diameter / 2}vmin`,
    fill: isSwitched ? colors.notificationSuccess : colors.notificationFailure,
    config: springConfig.medium,
  })
  return (
    <div className={classes.Bounder} style={style}>
      <div className={classes.Text}
        onClick={() => { onSwitch(!isSwitched); setSwitched(!isSwitched) }}
      >
        {text}
      </div>
      <svg className={classes.SwitchSVG}
        width={`${fullWidth}vmin`}
        height={`${fullHeight}vmin`}
        onClick={() => {
          onSwitch(!isSwitched); setSwitched(!isSwitched)
        }}
      >
        <rect width={`${rectWidth}vmin`} height={`${rectHeight}vmin`} x={`${rectX}vmin`} y={`${rectY}vmin`} rx='10' ry='10' fill={colors.centerMenu}/>
        <animated.circle cx={spring.cx as any} cy={`${circleCY}vmin`} r={`${sizes.switch.diameter / 2}vmin`} fill={spring.fill}/>
      </svg>
    </div>
  )
}

export default Switch