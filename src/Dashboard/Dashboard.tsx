import React, { ReactNode } from 'react'
import useJSS from './style'
import CSS from 'csstype'

function Dashboard({ children, navbar, style }: {
  children: ReactNode
  navbar: ReactNode
  style?: CSS.Properties
}) {
  const classes = useJSS()
  return (
    <div className={classes.Dashboard} style={style}>
      {navbar}
      {children}
    </div>
  )
}

export default Dashboard