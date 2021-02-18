import React, { ReactNode } from 'react'
import useJSS from './style'
import CSS from 'csstype'

function Grid(props: {
  className?: string
  gridTemplateRows?: string,
  gridTemplateColumns?: string,
  gridTemplateAreas?: string,
  gap?: string
  rowGap?: string
  columnGap?: string
  justifyItems?: 'start' | 'end' | 'center' | 'stretch'
  alignItems?: 'start' | 'end' | 'center' | 'stretch'
  placeItems?: 'start' | 'end' | 'center' | 'stretch'
  justifyContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'
  alignContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'
  placeContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'
  gridAutoRows?: string
  gridAutoColumns?: string
  gridAutoFlow?: 'row' | 'column' | 'row dense' | 'column dense'
  children: ReactNode
  width?: string
  height?: string
  minWidth?: string
  minHeight?: string
  maxWidth?: string
  maxHeight?: string
  style?: CSS.Properties
  backgroundColor?: string
}) {
  const classes = useJSS(props)
  return (
    <div 
      className={props.className ? `${classes.Grid} ${props.className}` : classes.Grid}
      style={props.style}
    >
      {props.children}
    </div>
  )
}

export default Grid