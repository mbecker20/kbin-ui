import React, { ReactNode } from 'react'
import CSS from 'csstype'
import Grid from './Grid/Grid'
import { colors } from './theme'

function Dashboard({ children, TopBar, NavBar, fullNavBar, backgroundColor, style }: {
  children: ReactNode
  TopBar?: ReactNode
  NavBar?: ReactNode
  fullNavBar?: boolean
  backgroundColor?: string
  style?: CSS.Properties
}) {
  const useTopBar = TopBar ? true : false
  const useNavBar = NavBar ? true : false
  return (
    <Grid
      width='100vw'
      height='100vh'
      backgroundColor={backgroundColor ? backgroundColor : colors.dashboardBG}
      gridTemplateColumns={useNavBar ? 'auto 1fr' : '1fr'}
      gridTemplateRows={useTopBar ? 'auto 1fr' : '1fr'}
      gridTemplateAreas={areas(useTopBar, useNavBar, fullNavBar)}
      style={style}
    >
      {TopBar}
      {NavBar}
      {children}
    </Grid>
  )
}

function areas(useTopBar: boolean, useNavBar: boolean, fullNavBar?: boolean) {
  if (useTopBar) {
    if (useNavBar) {
      if (fullNavBar) {
        return `
          "navbar topbar"
          "navbar content"  
        `
      } else {
        return `
          "topbar topbar"
          "navbar content"  
        `
      }
    } else {
      return `
        "topbar"
        "content"  
      `
    }
  } else if (useNavBar) {
    return `
      "navbar content"
    `
  } else {
    return `
      "content"
    `
  }
}

export default Dashboard