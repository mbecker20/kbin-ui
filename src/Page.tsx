import React, { ReactNode } from 'react'
import CSS from 'csstype'
import AutoGrid from './AutoGrid'
import { createUseStyles } from 'react-jss'
import FlexCol from './Flex/FlexCol'
import { sizes } from './theme'

function Page({ 
  children, contentStyle, itemMinWidth, placeItems, alignContent, 
  alignItems, justifyContent, justifyItems, gap, colGap, rowGap,
  margin, itemMaxWidth
}: {
  itemMinWidth?: string
  itemMaxWidth?: string
  contentStyle?: CSS.Properties
  placeItems?: 'start' | 'end' | 'center' | 'stretch'
  alignItems?: 'start' | 'end' | 'center' | 'stretch'
  justifyItems?: 'start' | 'end' | 'center' | 'stretch'
  justifyContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'
  alignContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'
  gap?: string
  colGap?: string
  rowGap?: string
  children: ReactNode
  margin?: string
}) {
  return (
    <FlexCol
      gridArea='content'
      margin={margin}
      scroller
    >
      <AutoGrid
        itemMinWidth={itemMinWidth ? itemMinWidth : sizes.page.itemMinWidth}
        itemMaxWidth={itemMaxWidth}
        style={contentStyle}
        placeItems={placeItems}
        alignContent={alignContent}
        alignItems={alignItems}
        justifyContent={justifyContent}
        justifyItems={justifyItems}
        gap={gap} colGap={colGap}
        rowGap={rowGap}
      >
        {children}
      </AutoGrid>
    </FlexCol>
  )
}

export default Page