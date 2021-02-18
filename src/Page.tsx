import React, { ReactNode } from 'react'
import CSS from 'csstype'
import AutoGrid from './AutoGrid'
import { createUseStyles } from 'react-jss'

function Page({ 
  children, contentStyle, itemMinWidth
}: {
  itemMinWidth?: string
  contentStyle?: CSS.Properties
  children: ReactNode
}) {
  const classes = useJSS()
  return (
    <AutoGrid
      className={classes.Content}
      minWidth={itemMinWidth}
      style={contentStyle}
    >
      {children}
    </AutoGrid>
  )
}

const useJSS = createUseStyles({
  Content: {
    gridArea: 'content',
    width: '100%'
  }
})

export default Page