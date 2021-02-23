import React, { MouseEvent, ReactNode } from 'react'
import CSS from 'csstype'
import Grid from './Grid/Grid'
import { sizes } from './theme'

function AutoGrid({ 
  direction, minWidth, minHeight, children, 
  className, style, numRows, numCols, autoCols,
  gap, rowGap, colGap, placeItems, justifyItems, 
  autoRows, justifyContent, alignItems, alignContent,
  width, height, margin, maxWidth, padding, onClick,
  maxHeight, itemMinWidth, itemMinHeight, itemMaxWidth,
  borderRadius
}: {
  direction?: 'row' | 'column' | 'row dense' | 'column dense'
  minWidth?: string
  maxWidth?: string
  minHeight?: string
  maxHeight?: string
  itemMinWidth?: string
  itemMinHeight?: string
  itemMaxWidth?: string
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
  width?: string
  height?: string
  margin?: string
  padding?: string
  borderRadius?: string
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}) {
  return (
    <Grid
      className={className}
      gridAutoFlow={direction}
      gridTemplateRows={
        numRows ?
          `repeat(${numRows}, ${itemMinHeight ? itemMinHeight : 'auto'})` :
          undefined
      }
      gridTemplateColumns={
        numCols ?
          `repeat(${numCols}, ${itemMinWidth ? itemMinWidth : sizes.grid.itemMinWidth})` :
          `repeat(auto-fill, minmax(${itemMinWidth ? itemMinWidth : sizes.grid.itemMinWidth}, ${itemMaxWidth ? itemMaxWidth : '1fr'}))`
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
      alignContent={alignContent} style={style} width={width} 
      height={height} margin={margin} padding={padding}
      onClick={onClick} minWidth={minWidth} maxWidth={maxWidth}
      minHeight={minHeight} maxHeight={maxHeight} borderRadius={borderRadius}
    >
      {children}
    </Grid>
  )
}

export default AutoGrid