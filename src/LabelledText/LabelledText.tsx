import React from 'react'
import { sizes } from '../../../theme'
import FlexCol from '../Flex/FlexCol'
import Text from '../Text/Text'
import useJSS from './style'
import CSS from 'csstype'

interface Props {
  label: string
  text: string
  labelSize?: string
  textSize?: string
  style?: CSS.Properties
  textStyle?: CSS.Properties
  labelStyle?: CSS.Properties
}

function LabelledText({ label, text, labelSize, textSize, style, textStyle, labelStyle }: Props) {
  const classes = useJSS()
  return (
    <FlexCol className={classes.LabelledText} style={style}>
      <Text text={label} className={classes.Label} 
        fontSize={labelSize ? labelSize : sizes.text.xsmall}
        style={labelStyle}
      />
      <Text text={text} className={classes.Text}
        fontSize={textSize ? textSize : sizes.text.small}
        style={textStyle}
      />
    </FlexCol>
  )
}

export default LabelledText