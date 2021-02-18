import React, { ReactNode } from 'react'
import CSS from 'csstype'
import Grid from './Grid/Grid'
import { sizes } from './theme'

function AutoGrid({ 
  direction, minWidth, minHeight, children, 
  className, style, numRows, numCols, autoCols,
  gap, rowGap, colGap, placeItems, justifyItems, 
  autoRows, justifyContent, alignItems, alignContent,
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
  rowGap?: string
  colGap?: string
  placeItems?: 'start' | 'end' | 'center' | 'stretch'
  alignItems?: 'start' | 'end' | 'center' | 'stretch'
  justifyItems?: 'start' | 'end' | 'center' | 'stretch'
  justifyContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'
  alignContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'
}) {
  return (
    <Grid
      className={className}
      gridAutoFlow={direction}
      gridTemplateRows={
        numRows ?
          `repeat(${numRows}, ${minHeight ? minHeight : 'auto'})` :
          undefined
      }
      gridTemplateColumns={
        numCols ?
          `repeat(${numCols}, ${minWidth ? minWidth : sizes.grid.itemMinWidth})` :
          `repeat(auto-fill, minmax(${minWidth ? minWidth : sizes.grid.itemMinWidth}, 1fr))`
      }
      gridAutoRows={
        numRows ? undefined : autoRows ? autoRows : 'auto'
      }
      gridAutoColumns={
        numCols ? undefined : autoCols ? autoCols : 'auto'
      }
      gap={gap} rowGap={rowGap} columnGap={colGap}
      placeItems={placeItems} alignItems={alignItems}
      justifyItems={justifyItems} justifyContent={justifyContent}
      alignContent={alignContent}
      style={style}
    >
      {children}
    </Grid>
  )
}

export default AutoGrid