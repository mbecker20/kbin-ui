import React, { ReactNode } from 'react'
import FlexCol from '../Flex/FlexCol'
import Text from '../Text/Text'
import CSS from 'csstype'
import { colors, sizes } from '../theme'
import IfElse from '../IfElse'

function LabelledItems({ 
  children, label, labelSize, style, labelStyle, 
  width, height, itemsMargin, borderRadius,
  itemsMaxHeight, minWidth, minHeight, maxWidth,
  margin, maxHeight, scroller, padding, itemsBorderRadius,
  itemsPadding, itemsStyle
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
  itemsPadding?: string
  itemsStyle?: CSS.Properties
  justifyContent?: string
  alignItems?: string
  itemsMaxHeight?: string
  margin?: string
  padding?: string
  scroller?: boolean
  borderRadius?: string
  itemsBorderRadius?: string
}) {
  return (
    <FlexCol 
      backgroundColor={colors.unfocussedInput}
      padding={padding ? padding : sizes.labelledItems.padding}
      style={style} 
      width={width} 
      height={height}
      minWidth={minWidth}
      minHeight={minHeight}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      margin={margin ? margin : sizes.labelledItems.margin}
      borderRadius={borderRadius ? borderRadius : sizes.labelledItems.borderRadius}
      boxShadow={colors.boxShadow}
    >
      <IfElse 
        showIf={typeof (label) === 'string'}
        show={
          <Text text={label as string}
            backgroundColor={colors.unfocussedInput}
            color={colors.unfocussedInputLabel}
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
        borderRadius={itemsBorderRadius}
        style={itemsStyle}
        padding={itemsPadding}
      >
        {children}
      </FlexCol>
    </FlexCol>
  )
}

export default LabelledItems