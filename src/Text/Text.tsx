import React, { ForwardedRef, forwardRef, MouseEvent } from 'react'
import useJSS from './style'
import CSS from 'csstype'
import { animated } from 'react-spring'

function _Text({ 
  className, style, text, fontSize, color, onClick, pointer, padding, margin, textCursor,
  wrap, textAlign
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
}, ref: ForwardedRef<HTMLDivElement>) {
  const classes = useJSS({ 
    fontSize, color, pointer, padding, 
    margin, textCursor, wrap, textAlign
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

const Text = forwardRef(_Text)

export const AnimatedText = animated(Text)

export default Text