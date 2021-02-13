import React, { Fragment, ReactNode } from 'react'
import FlexRow from '../Flex/FlexRow'
import useJSS from './style'
import CSS from 'csstype'
import AutoPlacingGrid from '../AutoPlacingGrid/AutoPlacingGrid'
import IfElse from '../IfElse'


function Page({ 
  Title, children, contentStyle, itemMinWidth, titleStyle, 
  titleMargin, titlePadding, alignTitle, justifyTitle,
  useGrid
}: {
  Title: ReactNode
  itemMinWidth?: string
  titleStyle?: CSS.Properties
  titleMargin?: string
  titlePadding?: string
  alignTitle?: string
  justifyTitle?: string
  contentStyle?: CSS.Properties
  useGrid?: boolean
  children: ReactNode
}) {
  const classes = useJSS()
  return (
    <Fragment>
      <FlexRow 
        className={classes.Header} 
        style={titleStyle}
        margin={titleMargin}
        padding={titlePadding}
        alignItems={alignTitle}
        justifyContent={justifyTitle}
      >
        {Title}
      </FlexRow>
      <IfElse
        showIf={useGrid ? true : false}
        show={
          <AutoPlacingGrid
            className={classes.Content}
            minWidth={itemMinWidth}
            style={contentStyle}
          >
            {children}
          </AutoPlacingGrid>
        }
        showElse={
          <div className={classes.Content}>
            {children}
          </div>
        }
      />
    </Fragment>
  )
}

export default Page