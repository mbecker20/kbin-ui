import React, { ReactNode } from 'react'
import FlexRow from '../Flex/FlexRow'
import Text from '../Text/Text'
import { colors } from '../theme'
import UncontrolledCheckBox from './UncontrolledCheckBox'
import CSS from 'csstype'
import IfElse from '../IfElse'

function LabelledCheckBox({ 
  borderRadius, label, checked, onClick, padding, backgroundColor,
  style, textMargin, checkboxStyle, alignItems
}: {
  borderRadius?: string
  label?: ReactNode
  onClick?: () => void
  checked?: boolean
  padding?: string
  backgroundColor?: string
  style?: CSS.Properties
  textMargin?: string
  checkboxStyle?: CSS.Properties
  alignItems?: string
}) {
  return (
    <FlexRow
      alignItems={alignItems ? alignItems : 'center'}
      backgroundColor={backgroundColor ? backgroundColor : colors.dashboardBG}
      padding={padding ? padding : '.5rem'}
      borderRadius={borderRadius}
      onClick={onClick}
      style={style}
      pointer
    >
      <IfElse
        showIf={typeof label === 'string'}
        show={
          <Text 
            text={label as string} 
            margin={textMargin ? textMargin : '.5rem 1rem'} 
            pointer 
          />
        }
        showElse={label}
      />
      <UncontrolledCheckBox
        checked={checked ? true : false}
        style={checkboxStyle}
      />
    </FlexRow>
  )
}

export default LabelledCheckBox