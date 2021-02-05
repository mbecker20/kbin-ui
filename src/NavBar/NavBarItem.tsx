import React from 'react'
import FlexRow from '../Flex/FlexRow'
import IfElse from '../IfElse'
import SVGIcon from '../SVGIcon/SVGIcon'
import Text from '../Text/Text'

function NavBarItem({ 
  open, selected, iconSRC, text, textSize, iconWidth, 
  iconHeight, iconSize, onClick
}: {
  iconSRC: string
  text: string
  open: boolean
  textSize?: string
  iconWidth?: string
  iconHeight?: string
  iconSize?: string
  selected?: boolean
  onClick?: () => void
}) {
  return (
    <IfElse
      showIf={open}
      show={
        <FlexRow justifyContent='space-between' alignItems='center' margin='.4em 1em'>
          <Text text={text} fontSize={textSize}
            onClick={onClick}
            bold={selected}
            pointer
          />
          <SVGIcon
            src={iconSRC}
            alt={text}
            size={iconSize}
            width={iconWidth}
            height={iconHeight}
            onClick={onClick}
            margin='.1em'
            pointer
          />
        </FlexRow>
      }
      showElse={
        <SVGIcon 
          src={iconSRC}
          alt={text}
          size={iconSize}
          width={iconWidth}
          height={iconHeight}
          onClick={onClick}
          margin='.5em 1.1em'
          pointer
        />
      }
    />
  )
}

export default NavBarItem