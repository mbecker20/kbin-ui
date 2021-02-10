import React, { ChangeEvent, FocusEvent, KeyboardEvent, RefObject, useState } from 'react'
import useJSS from './style'
import CSS from 'csstype'
import { AnimatedFlexRow } from '../Flex/FlexRow'
import { AnimatedText } from '../Text/Text'
import TextInputOnly from './TextInputOnly'
import { useSpring } from 'react-spring'
import { colors, springConfig } from '../theme'
import { AnimatedFlexCol } from '../Flex/FlexCol'

function TextInput({ 
  inputClassName, style, label, labelStyle, bounderClassName,
  placeholder, onChange, onFocus, onBlur, onKeyDown, fontSize,
  inputRef, autoFocus, onEnter, onEscape, layout, defaultValue,
  labelFontSize, value, password, angry, happy
}: {
  layout?: 'row' | 'column'
  inputClassName?: string
  bounderClassName?: string
  style?: CSS.Properties
  label?: string // this is to the top or left of the input
  labelStyle?: CSS.Properties
  labelFontSize?: string
  placeholder?: string
  onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  onKeyDown?: (key: string, e: KeyboardEvent<HTMLInputElement>) => void
  onEnter?: () => void
  onEscape?: () => void
  fontSize?: string
  inputRef?: RefObject<HTMLInputElement>
  autoFocus?: boolean
  defaultValue?: string
  value?: string
  password?: boolean
  angry?: boolean
  happy?: boolean
}) {
  const classes = useJSS({ fontSize, labelFontSize })
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
    <Flex alignItems='stretch' 
      className={
        bounderClassName ? 
        `${classes.InputBounder} ${bounderClassName}` :
        classes.InputBounder
      }
      style={springStyle}
    > 
      {label ? <AnimatedText className={classes.Label} text={label}
        style={Object.assign(labelSpring, labelStyle)}
      /> : null}
      <TextInputOnly
        className={inputClassName}
        style={style} placeholder={placeholder} 
        onChange={onChange} onKeyDown={onKeyDown}
        onFocus={e => {
          setFocussed(true)
          if (onFocus) onFocus(e)
        }}
        onBlur={e => {
          setFocussed(false)
          if (onBlur) onBlur(e)
        }}
        inputRef={inputRef}
        autoFocus={autoFocus}
        onEnter={onEnter}
        onEscape={onEscape}
        defaultValue={defaultValue}
        value={value}
        password={password}
      />
    </Flex>
  )
}

export default TextInput