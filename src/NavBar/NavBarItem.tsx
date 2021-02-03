import React, { Fragment } from 'react'
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
      showIf={open as boolean}
      show={
        <Fragment>
          <Text text={text} fontSize={textSize}
            style={{ gridColumn: 'text / span 1' }}
            onClick={onClick}
            pointer
          />
          <SVGIcon
            src={iconSRC}
            alt={text}
            size={iconSize}
            width={iconWidth}
            height={iconHeight}
            style={{ gridColumn: 'icon / span 1' }}
            onClick={onClick}
            pointer
          />
        </Fragment>
      }
      showElse={
        <SVGIcon 
          src={iconSRC}
          alt={text}
          size={iconSize}
          width={iconWidth}
          height={iconHeight}
          style={{ gridColumn: 'icon / span 1' }}
          pointer
        />
      }
    />
  )
}

export default NavBarItem