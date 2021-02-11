import React, { ForwardedRef, forwardRef, MouseEvent, PointerEvent, RefObject, WheelEvent } from 'react'
import CSS from 'csstype'
import useJSS from './style'
import { animated } from 'react-spring'

function _FlexRow({ 
  className, children, style, 
  justifyContent, alignItems, flexWrap,
  onContextMenu, onClick, pointer, onWheel,
  width, height, onPointerEnter, onPointerLeave,
  margin, padding, backgroundColor,
  maxHeight, minHeight, maxWidth, minWidth
}: {
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
}, ref: ForwardedRef<HTMLDivElement>) {
  const classes = useJSS({ 
    justifyContent, alignItems, flexWrap, 
    pointer, width, height, margin,
    padding, backgroundColor,
    maxHeight, minHeight, maxWidth, minWidth
  })
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