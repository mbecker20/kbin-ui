import React, { ForwardedRef, forwardRef, MouseEvent, RefObject } from 'react'
import useJSS from './style'
import CSS from 'csstype'
import { animated } from 'react-spring'

function _Text({ 
  className, style, text, fontSize, color, onClick, pointer, padding, margin, textCursor,
  wrap, textAlign, underline
}: {
  text: string
  className?: string
  style?: CSS.Properties
  fontSize?: string
  color?: string
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  pointer?: boolean
  padding?: string
  margin?: string
  textCursor?: boolean
  wrap?: boolean
  textAlign?: string
  ref?: RefObject<HTMLDivElement>
  underline?: boolean
}, ref: ForwardedRef<HTMLDivElement>) {
  const classes = useJSS({ 
    fontSize, color, pointer, padding, 
    margin, textCursor, wrap, textAlign,
    underline
  })
  return (
    <div className={className ? `${classes.Text} ${className}` : classes.Text}
      style={style} ref={ref}
      onClick={onClick}
    >
      {text}
    </div>
  )
}

const Text = forwardRef(_Text) as typeof _Text

export const AnimatedText = animated(Text) as typeof _Text

export default Text