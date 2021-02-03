import React from 'react'
import { sizes } from '../theme'
import FlexCol from '../Flex/FlexCol'
import Text from '../Text/Text'
import useJSS from './style'
import CSS from 'csstype'

function LabelledMultiText({ label, text, labelSize, textSize, style, textStyle, labelStyle }: {
  label: string
  text: string[]
  labelSize?: string
  textSize?: string
  style?: CSS.Properties
  textStyle?: CSS.Properties
  labelStyle?: CSS.Properties
}) {
  const classes = useJSS()
  return (
    <FlexCol className={classes.LabelledText} style={style}>
      <Text text={label} className={classes.Label}
        fontSize={labelSize ? labelSize : sizes.text.xsmall}
        style={labelStyle}
      />
      {text.map((t, i) => {
        return (
          <Text text={t} key={i} className={classes.Text}
            fontSize={textSize ? textSize : sizes.text.small}
            style={textStyle}
          />
        )
      })}
    </FlexCol>
  )
}

export default LabelledMultiText