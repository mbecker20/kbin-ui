import React, { RefObject, KeyboardEvent, MouseEvent } from 'react'
import useJSS from './style'
import CSS from 'csstype'
import { animated } from 'react-spring';

function Button({ 
  className, onClick, children, style, onPointerDown, 
  buttonRef, onKeyDown, onContextMenu, fontSize, notClickable,
  onPointerEnter, onPointerLeave, onDoubleClick,
  isRed, margin, padding, width, height, maxHeight, maxWidth,
  minHeight, minWidth, gridArea
}: {
  className?: string
  children?: React.ReactNode
  style?: CSS.Properties
  buttonRef?: RefObject<HTMLDivElement>
  fontSize?: string
  notClickable?: boolean
  isRed?: boolean
  margin?: string
  padding?: string
  width?: string
  height?: string
  maxWidth?: string
  maxHeight?: string
  minWidth?: string
  minHeight?: string
  gridArea?: string
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  onKeyDown?: (e: KeyboardEvent<HTMLDivElement>) => void
  onContextMenu?: (e: MouseEvent<HTMLDivElement>) => void
  onPointerEnter?: (e: MouseEvent<HTMLDivElement>) => void
  onPointerLeave?: (e: MouseEvent<HTMLDivElement>) => void
  onDoubleClick?: (e: MouseEvent<HTMLDivElement>) => void
  onPointerDown?: (e: React.PointerEvent<HTMLDivElement>) => void
}) {
  const classes = useJSS({ 
    fontSize, notClickable, isRed, margin, padding,
    width, height, maxHeight, maxWidth, minHeight, minWidth,
    gridArea
  })
  return (
    <div 
      className={className ? `${classes.Button} ${className}` : classes.Button}
      onClick={onClick}
      onPointerDown={onPointerDown}
      style={style}
      ref={buttonRef}
      onKeyDown={onKeyDown}
      onContextMenu={onContextMenu}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onDoubleClick={onDoubleClick}
    >
      {children}
    </div>
  );
}

export const AnimatedButton = animated(Button)

export default Button