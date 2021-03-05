import React, { ReactNode } from 'react'
import CSS from 'csstype'
import FlexCol from '../Flex/FlexCol'
import FlexRow from '../Flex/FlexRow'
import { sizes } from '../theme'

function FlexPage({ 
  children, margin, style, bounderStyle 
}: {
  style?: CSS.Properties
  bounderStyle?: CSS.Properties
  children: ReactNode
  margin?: string
}) {
  return (
    <FlexCol 
      width='100%' 
      height='100%' 
      gridArea='content'
      style={bounderStyle}
      scroller
    >
      <FlexRow
        flexWrap='wrap'
        justifyContent='space-evenly'
        alignItems='space-evenly'
        margin={margin ? margin : sizes.page.flexPageMargin}
        style={style}
      >
        {children}
      </FlexRow>
    </FlexCol>
  )
}

export default FlexPage