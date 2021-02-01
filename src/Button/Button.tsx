import React, { RefObject, KeyboardEvent, MouseEvent } from 'react'
import useJSS from './style'
import CSS from 'csstype'
import { animated } from 'react-spring';

interface Props {
  className?: string
  children?: React.ReactNode
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  style?: CSS.Properties
  onPointerDown?: (e: React.PointerEvent<HTMLDivElement>) => void
  buttonRef?: RefObject<HTMLDivElement>
  onKeyDown?: (e: KeyboardEvent<HTMLDivElement>) => void
  onContextMenu?: (e: MouseEvent<HTMLDivElement>) => void
  fontSize?: string
  notClickable?: boolean
  onPointerEnter?: (e: MouseEvent<HTMLDivElement>) => void
  onPointerLeave?: (e: MouseEvent<HTMLDivElement>) => void
  onDoubleClick?: (e:MouseEvent<HTMLDivElement>) => void
  isRed?: boolean
  margin?: string
  padding?: string
}

function Button({ 
  className, onClick, children, style, onPointerDown, 
  buttonRef, onKeyDown, onContextMenu, fontSize, notClickable,
  onPointerEnter, onPointerLeave, onDoubleClick,
  isRed, margin, padding
}: Props) {
  const classes = useJSS({ fontSize, notClickable, isRed, margin, padding })
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