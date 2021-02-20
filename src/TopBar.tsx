import React, { ReactElement, ReactNode } from 'react'
import Conditional from './Conditional'
import FlexRow from './Flex/FlexRow'
import Grid from './Grid/Grid'
import { colors } from './theme'


function TopBar({ 
  height, backgroundColor, Left, Center, Right, boxShadow, children 
}: {
  height?: string
  backgroundColor?: string
  children?: ReactNode
  Left?: ReactNode
  Center?: ReactNode
  Right?: ReactNode
  boxShadow?: string
}) {
  return (
    <Grid
      height={height}
      gridArea='topbar'
      backgroundColor={backgroundColor ? backgroundColor : colors.topbarBG}
      gridTemplateColumns='1fr 1fr 1fr'
      gridTemplateAreas={`
        "left center right"
      `}
      boxShadow={boxShadow ? boxShadow : colors.boxShadow}
    >
      <Conditional showIf={Left ? true : false}>
        <FlexRow gridArea='left' alignItems='center'>
          {Left}
        </FlexRow>
      </Conditional>
      <Conditional showIf={Center ? true : false}>
        <FlexRow justifyContent='center' alignItems='center' gridArea='center'>
          {Center}
        </FlexRow>
      </Conditional>
      <Conditional showIf={Right ? true : false}>
        <FlexRow justifyContent='flex-end' alignItems='center' gridArea='right' height='100%'>
          {Right}
        </FlexRow>
      </Conditional>
      {children}
    </Grid>
  )
}

export default TopBar