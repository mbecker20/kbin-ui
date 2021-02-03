import React, { MouseEvent, PointerEvent, RefObject } from 'react'
import CSS from 'csstype'
import useJSS from './style'

function SVGIcon({ 
  className, style, size, src, 
  alt, width, height, onClick,
  onPointerDown, pointer, scale,
  margin, imageRef, padding
}: {
  src: string
  alt: string
  className?: string
  style?: CSS.Properties
  size?: string
  width?: string
  height?: string
  onClick?: (e: MouseEvent<HTMLImageElement>) => void
  onPointerDown?: (e: PointerEvent<HTMLImageElement>) => void
  pointer?: boolean
  scale?: number
  margin?: string
  padding?: string
  imageRef?: RefObject<HTMLImageElement>
}) {
  const classes = useJSS({ size, width, height, pointer, scale, margin, padding })
  return (
    <img 
      className={
        className ? 
        `${classes.SVGIcon} ${className}` : 
        classes.SVGIcon
      } 
      style={style}
      src={src} alt={alt}
      ref={imageRef}
      onClick={onClick}
      onPointerDown={onPointerDown}
    />
  )
}

export default SVGIcon