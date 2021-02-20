import React, { ReactNode } from 'react'
import FlexCol from '../Flex/FlexCol'
import Text from '../Text/Text'
import useJSS from './style'
import CSS from 'csstype'
import { colors, sizes } from '../theme'
import IfElse from '../IfElse'

function LabelledItems({ 
  children, label, labelSize, style, labelStyle, 
  width, height, itemsMargin,
  itemsMaxHeight, minWidth, minHeight, maxWidth,
  margin, maxHeight, scroller
}: {
  children: ReactNode
  label: ReactNode
  labelSize?: string
  style?: CSS.Properties
  width?: string
  height?: string
  minWidth?: string
  maxWidth?: string
  minHeight?: string
  maxHeight?: string
  itemsWidth?: string
  itemsHeight?: string
  labelStyle?: CSS.Properties
  itemsMargin?: string
  justifyContent?: string
  alignItems?: string
  itemsMaxHeight?: string
  margin?: string
  scroller?: boolean
}) {
  const classes = useJSS()
  return (
    <FlexCol 
      className={classes.LabelledItems} 
      style={style} 
      width={width} 
      height={height}
      minWidth={minWidth}
      minHeight={minHeight}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      margin={margin}
      boxShadow={colors.boxShadow}
    >
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
      <FlexCol 
        maxHeight={itemsMaxHeight}
        backgroundColor={colors.labelledItemsItems}
        height='100%'
        margin={itemsMargin}
        scroller={typeof scroller === 'boolean' ? scroller : true}
      >
        {children}
      </FlexCol>
    </FlexCol>
  )
}

export default LabelledItems