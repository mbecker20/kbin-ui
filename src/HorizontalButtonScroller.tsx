import React, { ReactNode, WheelEvent } from 'react'
import Button from './Button/Button'
import FlexRow from './Flex/FlexRow'
import CSS from 'csstype'

interface Props {
  children: ReactNode
  onLeft: () => void
  onRight: () => void
  className?: string
  style?: CSS.Properties
  buttonClassName?: string
  buttonStyle?: CSS.Properties
  onWheel?: (e: WheelEvent<HTMLDivElement>) => void
  useOnWheel?: boolean
}

let timeout = false
const timeoutTime = 700
const minDelta = 1

function HorizontalButtonScroller({ 
  children, onLeft, onRight, className, style, buttonClassName, buttonStyle, useOnWheel
}: Props) {
  return (
    <FlexRow
      className={className} 
      alignItems='stretch' 
      justifyContent='space-between'
      style={style}
      onWheel={useOnWheel ? e => {
        e.preventDefault()
        if (!timeout && Math.abs(e.deltaX) > minDelta) {
          if (e.deltaX > 0) {
            onRight()
          } else {
            onLeft()
          }
          timeout = true
          window.setTimeout(() => { timeout = false }, timeoutTime)
        }
      } : () => {}}
    >
      <Button className={buttonClassName}
        onClick={onLeft} style={buttonStyle}
      >
        {'<'}
      </Button>
      {children}
      <Button className={buttonClassName}
        onClick={onRight} style={buttonStyle}
      >
        {'>'}
      </Button>
    </FlexRow>
  )
}

export default HorizontalButtonScroller