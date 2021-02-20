import React, { ForwardedRef, forwardRef, MouseEvent, PointerEvent, RefObject, WheelEvent } from 'react'
import CSS from 'csstype'
import useJSS from './style'
import { animated } from 'react-spring'

function _FlexRow(props: {
  className?: string
  style?: CSS.Properties
  children?: React.ReactNode
  justifyContent?: string
  alignItems?: string
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse',
  onContextMenu?: (e: MouseEvent<HTMLDivElement>) => void
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  pointer?: boolean
  onWheel?: (e: WheelEvent<HTMLDivElement>) => void
  width?: string
  height?: string
  onPointerEnter?: (e: PointerEvent<HTMLDivElement>) => void
  onPointerLeave?: (e: PointerEvent<HTMLDivElement>) => void
  margin?: string
  padding?: string
  backgroundColor?: string
  ref?: RefObject<HTMLDivElement>
  maxHeight?: string
  minHeight?: string
  maxWidth?: string
  minWidth?: string
  gridArea?: string
  borderRadius?: string
  justifySelf?: string
  alignSelf?: string
  boxShadow?: string
}, ref: ForwardedRef<HTMLDivElement>) {
  const classes = useJSS(props)
  const {
    className, children, style,
    onContextMenu, onClick, onWheel,
    onPointerEnter, onPointerLeave,
  } = props
  return (
    <div 
      className={className ? `${classes.FlexRow} ${className}` : classes.FlexRow}
      style={style} ref={ref} 
      onContextMenu={onContextMenu}
      onClick={onClick}
      onWheel={onWheel}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      { children }
    </div>
  )
}

const FlexRow = forwardRef(_FlexRow) as typeof _FlexRow

export const AnimatedFlexRow = animated(FlexRow) as typeof _FlexRow

export default FlexRow