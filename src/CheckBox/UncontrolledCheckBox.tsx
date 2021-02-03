import React, { MouseEvent, useState } from 'react'
import useJSS from './style'
import CSS from 'csstype'
import SVGIcon from '../SVGIcon/SVGIcon'
import { colors } from '../theme'

function UncontrolledCheckBox({ checked, onClick, style, className }: {
  checked: boolean
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  style?: CSS.Properties
  className?: string
}) {
  const classes = useJSS()
  const [mouseOver, setMouseOver] = useState(false)
  return (
    <div className={className ? `${className} ${classes.CheckBoxBounder}` : classes.CheckBoxBounder}>
      <div className={classes.CheckBox}
        style={style}
        onPointerEnter={() => { setMouseOver(true) }}
        onPointerLeave={() => { setMouseOver(false) }}
        onClick={onClick}
      />
      <SVGIcon className={classes.Check}
        src='./svg/check.svg' alt='check'
        style={{ opacity: checked ? 1 : 0 }}
      />
      <svg className={classes.Highlight} xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: mouseOver ? 1 : 0 }}
      >
        <defs>
          <radialGradient id="highlight">
            <stop offset="20%" stopColor={colors.checkBoxHighlightCenter} />
            <stop offset="95%" stopColor={colors.checkBoxHighlightEdge} />
          </radialGradient>
        </defs>
        <circle cx='50%' cy='50%' r='50%' fill="url('#highlight')" />
      </svg>
    </div>
  )
}

export default UncontrolledCheckBox