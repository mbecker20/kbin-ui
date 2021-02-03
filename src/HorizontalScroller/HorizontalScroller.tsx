import React, { ReactNode, useRef } from 'react'
import CSS from 'csstype'
import FlexRow from '../Flex/FlexRow'
import useJSS from './style'

const baseStyle = {
  //overflowY: 'hidden',
  overflow: 'auto',
  display: 'flex',
  scrollBehavior: 'contain'
}

function HorizontalScroller({ 
  children, className, style, width, height, alignItems
}: {
  children: ReactNode
  className?: string
  style?: CSS.Properties
  width?: string
  height?: string
  alignItems?: string
}) {
  const { HorizontalScroller } = useJSS()
  const ref = useRef<HTMLDivElement>(null)
  return (
    <FlexRow 
      className={className ? `${HorizontalScroller} ${className}` : HorizontalScroller}
      width={width}
      height={height}
      alignItems={alignItems}
      ref={ref}  
      style={Object.assign({}, baseStyle, style)} 
      onWheel={e => {
        window.requestAnimationFrame(() => {
          if (ref && ref.current) {
            ref.current.scrollLeft += e.deltaY
          }
        })
      }}
      onPointerEnter={() => {
        console.log('adding')
        document.body.setAttribute('style', 'overflow:hidden')
      }}
      onPointerLeave={() => {
        console.log('removing')
        document.body.setAttribute('style', 'overflow:auto')
      }}
    >
      {children}
    </FlexRow>
  )
}

export default HorizontalScroller