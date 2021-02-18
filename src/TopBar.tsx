import React, { ReactNode } from 'react'
import Grid from './Grid/Grid'
import { colors, sizes } from './theme'


function TopBar({ height, backgroundColor, children }: {
  height?: string
  backgroundColor?: string
  children: ReactNode
}) {
  return (
    <Grid
      height={height}
      backgroundColor={backgroundColor ? backgroundColor : colors.topbarBG}
      gridTemplateColumns='1fr 1fr 1fr'
      gridTemplateAreas={`
        "left center right"
      `}
    >
      {children}
    </Grid>
  )
}

export default TopBar