import React, { useState } from 'react'
import UncontrolledDualButtons from './UncontrolledDualButtons'

interface Props {
  leftText: string
  rightText: string
  startRight?: boolean // false | undefined: left, true: right
  onLeft?: () => void
  onRight?: () => void
}

function DualButtons({ leftText, rightText, startRight, onLeft, onRight }: Props) {
  const [isRight, setRight] = useState(startRight ? true : false)
  return (
    <UncontrolledDualButtons
      isRight={isRight}
      leftText={leftText}
      rightText={rightText}
      onLeft={() => {
        setRight(false)
        if (onLeft) onLeft()
      }}
      onRight={() => {
        setRight(true)
        if (onRight) onRight()
      }}
    />
  )
}

export default DualButtons