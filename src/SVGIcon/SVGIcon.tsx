import React, { MouseEvent, PointerEvent, RefObject } from 'react'
import CSS from 'csstype'
import useJSS from './style'

function SVGIcon(props: {
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
  title?: string
  gridArea?: string
}) {
  const classes = useJSS(props)
  const {
    className, style, src, alt, onClick,
    onPointerDown, imageRef, title
  } = props
  return (
    <img 
      className={
        className ? 
        `${classes.SVGIcon} ${className}` : 
        classes.SVGIcon
      }
      title={title}
      style={style}
      src={src} alt={alt}
      ref={imageRef}
      onClick={onClick}
      onPointerDown={onPointerDown}
    />
  )
}

export default SVGIcon