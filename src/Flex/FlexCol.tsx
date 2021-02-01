import React, { DragEvent, ForwardedRef, forwardRef, MouseEvent, PointerEvent, WheelEvent } from 'react'
import CSS from 'csstype'
import useJSS from './style'
import { animated } from 'react-spring'

interface Props {
  className?: string
  style?: CSS.Properties
  children?: React.ReactNode
  onDrop?: (e: DragEvent<HTMLDivElement>) => void
  onDragOver?: (e: DragEvent<HTMLDivElement>) => void
  justifyContent?: string
  alignItems?: string
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
}

function _FlexCol({ 
  className, children, style, onDrop, 
  onDragOver, justifyContent, alignItems,
  onContextMenu, onClick, pointer, onWheel,
  width, height, onPointerEnter, onPointerLeave,
  margin, padding, backgroundColor
}: Props, ref: ForwardedRef<HTMLDivElement>) {
  const classes = useJSS({ 
    justifyContent, alignItems, pointer,
    width, height, margin, padding,
    backgroundColor
  })
  return (
    <div 
      className={className ? `${classes.FlexCol} ${className}` : classes.FlexCol}
      style={style}
      ref={ref}
      onDrop={onDrop}
      onDragOver={onDragOver}
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

const FlexCol = forwardRef(_FlexCol)

export const AnimatedFlexCol = animated(FlexCol)

export default FlexCol