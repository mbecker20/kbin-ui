import React from 'react'
import useJSS from './style'
import CSS from 'csstype'
import Conditional from '../Conditional'
import Text from '../Text/Text'
import { sizes } from '../theme'
import SVGIcon from '../SVGIcon/SVGIcon'

export type CenterMenuControlData = boolean

function CenterMenu({ 
  exists, className, style, headerClassName, 
  headerStyle, children, header, onClose, 
  bounderStyle 
}: {
  exists: boolean
  onClose: () => void
  className?: string
  style?: CSS.Properties
  headerClassName?: string
  headerStyle?: CSS.Properties
  children: React.ReactNode
  header?: string
  bounderStyle?: CSS.Properties
}) {
  const classes = useJSS()
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
          <SVGIcon src='/svg/close-x.svg' alt='x'
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