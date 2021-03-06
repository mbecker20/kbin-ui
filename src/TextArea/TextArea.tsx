import React, { ChangeEvent, FocusEvent, KeyboardEvent, RefObject, useState } from 'react'
import useJSS from './style'
import CSS from 'csstype'
import { AnimatedFlexRow } from '../Flex/FlexRow'
import { AnimatedText } from '../Text/Text'
import TextAreaOnly from './TextAreaOnly'
import { useSpring } from 'react-spring'
import { colors, springConfig } from '../theme'
import { AnimatedFlexCol } from '../Flex/FlexCol'

function TextArea({
  inputClassName, style, label, labelStyle, bounderClassName,
  placeholder, onChange, onFocus, onBlur, onKeyDown, fontSize,
  textAreaRef, autoFocus, onEnter, onEscape, layout, defaultValue,
  labelFontSize, value, angry, happy, width, rows, cols, gridArea,
  bounderBorderRadius, borderRadius, height, inputWidth, inputHeight,
  maxHeight, maxWidth, minHeight, minWidth, alignSelf, inputMargin,
  inputPadding, margin, padding, inputMaxHeight, inputMaxWidth, inputMinHeight,
  inputMinWidth
}: {
  layout?: 'row' | 'column'
  inputClassName?: string
  bounderClassName?: string
  style?: CSS.Properties
  label?: string // this is to the left of the input
  labelStyle?: CSS.Properties
  labelFontSize?: string
  placeholder?: string
  onChange?: (value: string, e: ChangeEvent<HTMLTextAreaElement>) => void
  onFocus?: (e: FocusEvent<HTMLTextAreaElement>) => void
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void
  onKeyDown?: (key: string, e: KeyboardEvent<HTMLTextAreaElement>) => void
  fontSize?: string
  textAreaRef?: RefObject<HTMLTextAreaElement>
  autoFocus?: boolean
  onEnter?: () => void
  onEscape?: () => void
  defaultValue?: string
  value?: string
  angry?: boolean
  happy?: boolean
  width?: string
  height?: string
  rows?: number
  cols?: number
  gridArea?: string
  borderRadius?: string
  bounderBorderRadius?: string
  inputWidth?: string
  inputHeight?: string
  inputMaxWidth?: string
  inputMinWidth?: string
  inputMaxHeight?: string
  inputMinHeight?: string
  maxWidth?: string
  minWidth?: string
  maxHeight?: string
  minHeight?: string
  alignSelf?: string
  margin?: string
  padding?: string
  inputMargin?: string
  inputPadding?: string
}) {
  const classes = useJSS({ fontSize, labelFontSize, bounderBorderRadius })
  const [focussed, setFocussed] = useState(autoFocus ? true : false)
  const borderColor =
    happy ? colors.happyInputBorder :
    angry ? colors.angryInputBorder :
    focussed ? colors.focussedInputBorder :
    colors.unfocussedInput
  const backgroundColor =
    happy ? colors.happyInput :
    angry ? colors.angryInput :
    focussed ? colors.focussedInput :
    colors.unfocussedInput
  const springStyle = useSpring({
    borderColor,
    backgroundColor,
    config: springConfig.medium
  })
  const labelSpring = useSpring({
    backgroundColor,
    config: springConfig.medium
  })
  const Flex = layout === 'row' ? AnimatedFlexRow : AnimatedFlexCol
  return (
    <Flex 
      alignItems='stretch'
      className={
        bounderClassName ?
          `${classes.TextAreaBounder} ${bounderClassName}` :
          classes.TextAreaBounder
      }
      style={springStyle}
      width={width}
      height={height}
      gridArea={gridArea}
      margin={margin}
      padding={padding}
      maxWidth={maxWidth}
      minWidth={minWidth}
      maxHeight={maxHeight}
      minHeight={minHeight}
      alignSelf={alignSelf}
    >
      {label ? <AnimatedText className={classes.Label} text={label}
        style={Object.assign(labelSpring, labelStyle)}
      /> : null}
      <TextAreaOnly
        className={inputClassName}
        style={style} placeholder={placeholder}
        onChange={onChange} 
        onKeyDown={onKeyDown}
        onFocus={e => {
          setFocussed(true)
          if (onFocus) onFocus(e)
        }}
        onBlur={e => {
          setFocussed(false)
          if (onBlur) onBlur(e)
        }}
        textAreaRef={textAreaRef}
        autoFocus={autoFocus}
        onEnter={onEnter}
        onEscape={onEscape}
        defaultValue={defaultValue}
        value={value}
        rows={rows} cols={cols}
        borderRadius={borderRadius}
        width={inputWidth}
        height={inputHeight}
        maxHeight={inputMaxHeight}
        minHeight={inputMinHeight}
        maxWidth={inputMaxWidth}
        minWidth={inputMinWidth}
        margin={inputMargin}
        padding={inputPadding}
      />
    </Flex>
  )
}

export default TextArea