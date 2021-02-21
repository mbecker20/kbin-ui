import React, { ReactNode } from 'react'
import LabelledItems from './LabelledItems'
import CSS from 'csstype'
import AutoGrid from '../AutoGrid'

function LabelledItemsGrid(props: {
  children: ReactNode
  label: ReactNode
  labelSize?: string
  style?: CSS.Properties
  width?: string
  height?: string
  minWidth?: string
  maxWidth?: string
  minHeight?: string
  maxHeight?: string
  itemsWidth?: string
  itemsHeight?: string
  labelStyle?: CSS.Properties
  itemsStyle?: CSS.Properties
  itemsMargin?: string
  justifyContent?: string
  alignItems?: string
  gap?: string
  itemsMaxHeight?: string
  itemMinWidth?: string
  margin?: string
}) {
  return (
    <LabelledItems 
      {...props}
    >
      <AutoGrid
        style={props.itemsStyle}
        gap={props.gap}
        padding={props.gap}
        itemMinWidth={props.itemMinWidth}
        placeItems='stretch'
      >
        {props.children}
      </AutoGrid>
    </LabelledItems>
  )
}

export default LabelledItemsGrid