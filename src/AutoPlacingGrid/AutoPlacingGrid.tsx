import React, { ReactNode } from 'react'
import useJSS from './style'
import CSS from 'csstype'

interface Props {
  direction: 'row' | 'column' | 'row dense' | 'column dense'
  minWidth: string
  minHeight: string
  children?: ReactNode
  className?: string
  style?: CSS.Properties
  numRows?: number | string
  numCols?: number | string
  gap?: string
  placeItems?: 'start' | 'end' | 'center' | 'stretch'
  alignItems?: 'start' | 'end' | 'center' | 'stretch'
  justifyContent?: 'start' | 'end' | 'center' | 'stretch'
}

function AutoPlacingGrid({ 
  direction, minWidth, minHeight, children, 
  className, style, numRows, numCols, 
  gap, placeItems,
  justifyContent, alignItems
}: Props) {
  const classes = useJSS({ 
    numRows, numCols, direction, 
    gap, minWidth, minHeight,
    placeItems, alignItems, justifyContent
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