import React, { ReactNode } from 'react'
import FlexCol from '../Flex/FlexCol'
import Text from '../Text/Text'
import useJSS from './style'
import CSS from 'csstype'
import { sizes } from '../theme'
import IfElse from '../IfElse'

function LabelledItems({ children, label, labelSize, style, labelStyle, itemsStyle }: {
  children: ReactNode
  label: ReactNode
  labelSize?: string
  style?: CSS.Properties
  labelStyle?: CSS.Properties
  itemsStyle?: CSS.Properties
}) {
  const classes = useJSS()
  return (
    <FlexCol className={classes.LabelledItems} style={style}>
      <IfElse 
        showIf={typeof (label) === 'string'}
        show={
          <Text text={label as string} className={classes.Label}
            fontSize={labelSize ? labelSize : sizes.text.xsmall}
            style={labelStyle}
          />
        }
        showElse={label}
      />
      <FlexCol className={classes.Items} style={itemsStyle}>
        { children }
      </FlexCol>
    </FlexCol>
  )
}

export default LabelledItems