import React from 'react'
import useJSS from './style'
import CSS from 'csstype'
import Conditional from '../Conditional'
import Text from '../Text/Text'
import { sizes } from '../../../theme'
import SVGIcon from '../SVGIcon/SVGIcon'

export type CenterMenuControlData = boolean

interface Props {
  cmControlData: CenterMenuControlData
  onClose: () => void
  className?: string
  style?: CSS.Properties
  headerClassName?: string
  headerStyle?: CSS.Properties
  children: React.ReactNode
  header?: string
  bounderStyle?: CSS.Properties
}

function CenterMenu({ 
  cmControlData, className, style, headerClassName, 
  headerStyle, children, header, onClose, 
  bounderStyle 
}: Props) {
  const exists = cmControlData
  const classes = useJSS()
  /* const springStyle = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? 
      'translate(-50%, -50%) scale(1)' : 
      'translate(-50%, -50%) scale(0.9)',
    onRest: () => { if (!visible) setExistFalse() },
    config: springConfig.fast
  }) */
  return (
    <Conditional showIf={exists}>
      <div className={classes.CenterMenuBounder}
        onPointerDown={e => {
          e.stopPropagation()
          onClose()
        }}
        style={bounderStyle}
      >
        <div className={className ? `${classes.CenterMenu} ${className}` : classes.CenterMenu}
          onPointerDown={(e) => {e.stopPropagation()}}
          style={style}
        >
          <SVGIcon src='./svg/close-x.svg' alt='x'
            className={classes.CloseIcon} onClick={onClose}
            pointer
          />
          {!header ? null : 
          <Text text={header} className={headerClassName ? `${classes.Header} ${headerClassName}` : classes.Header}
            style={headerStyle} fontSize={sizes.text.large}
          />}
          {children}
        </div>
      </div>
    </Conditional>
  )
}

export default CenterMenu