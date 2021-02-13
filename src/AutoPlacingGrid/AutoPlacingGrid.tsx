import React, { ReactNode } from 'react'
import useJSS from './style'
import CSS from 'csstype'

function AutoPlacingGrid({ 
  direction, minWidth, minHeight, children, 
  className, style, numRows, numCols, 
  gap, placeItems, justifyItems,
  justifyContent, alignItems, alignContent
}: {
  direction?: 'row' | 'column' | 'row dense' | 'column dense'
  minWidth?: string
  minHeight?: string
  children?: ReactNode
  className?: string
  style?: CSS.Properties
  numRows?: number | string
  numCols?: number | string
  autoRows?: string
  autoCols?: string
  gap?: string
  placeItems?: 'start' | 'end' | 'center' | 'stretch'
  alignItems?: 'start' | 'end' | 'center' | 'stretch'
  justifyItems?: 'start' | 'end' | 'center' | 'stretch'
  justifyContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'
  alignContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'
}) {
  const classes = useJSS({ 
    numRows, numCols, direction, 
    gap, minWidth, minHeight,
    placeItems, alignItems,
    justifyItems, justifyContent,
    alignContent
  })
  return (
    <div 
      className={className ? `${classes.AutoPlacingGrid} ${className}` : classes.AutoPlacingGrid}
      style={style}
    >
      {children}
    </div>
  )
}

export default AutoPlacingGrid