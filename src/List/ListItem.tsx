import React, { ReactNode } from 'react'
import useJSS from './style'
import CSS from 'csstype'

function ListItem({ isSelected, children, style, padding, margin }: {
  isSelected: boolean
  children: ReactNode
  style?: CSS.Properties
  padding?: string
  margin?: string
}) {
  const classes = useJSS({ isSelected, padding, margin })
  return (
    <div className={classes.ListItem} style={style}>
      {children}
    </div>
  )
}

export default ListItem