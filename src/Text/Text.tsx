import React, { ForwardedRef, forwardRef, MouseEvent, RefObject } from 'react'
import useJSS from './style'
import CSS from 'csstype'
import { animated } from 'react-spring'

function _Text(props: {
  text?: string
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
  bold?: boolean
  userSelect?: boolean
  gridArea?: string
  alignSelf?: string
  justifySelf?: string
  placeSelf?: string
  boxShadow?: string
  backgroundColor?: string
  width?: string
  height?: string
  maxWidth?: string
  maxHeight?: string
  minWidth?: string
  minHeight?: string
  borderRadius?: string
  children?: string
}, ref: ForwardedRef<HTMLDivElement>) {
  const classes = useJSS(props)
  const { className, style, text, onClick, children } = props
  return (
    <div className={className ? `${classes.Text} ${className}` : classes.Text}
      style={style} ref={ref}
      onClick={onClick}
    >
      {text}
      {children}
    </div>
  )
}

const Text = forwardRef(_Text) as typeof _Text

export const AnimatedText = animated(Text) as typeof _Text

export default Text