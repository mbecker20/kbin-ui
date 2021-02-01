import React, { ChangeEvent, FocusEvent, KeyboardEvent, RefObject, useState } from 'react'
import useJSS from './style'
import CSS from 'csstype'
import { AnimatedFlexRow } from '../Flex/FlexRow'
import { AnimatedText } from '../Text/Text'
import TextAreaOnly from './TextAreaOnly'
import { useSpring } from 'react-spring'
import { colors, springConfig } from '../../../theme'
import { AnimatedFlexCol } from '../Flex/FlexCol'

interface Props {
  layout?: 'row' | 'column'
  inputClassName?: string
  bounderClassName?: string
  style?: CSS.Properties
  label?: string // this is to the left of the input
  labelStyle?: CSS.Properties
  labelFontSize?: string
  placeholder?: string
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onFocus?: (e: FocusEvent<HTMLTextAreaElement>) => void
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void
  onKeyDown?: (e: KeyboardEvent<HTMLTextAreaElement>) => void
  fontSize?: string
  textAreaRef?: RefObject<HTMLTextAreaElement>
  autoFocus?: boolean
  onEnter?: () => void
  onEscape?: () => void
  defaultValue?: string
  value?: string
}

function TextArea({
  inputClassName, style, label, labelStyle, bounderClassName,
  placeholder, onChange, onFocus, onBlur, onKeyDown, fontSize,
  textAreaRef, autoFocus, onEnter, onEscape, layout, defaultValue,
  labelFontSize, value
}: Props) {
  const classes = useJSS({ fontSize, labelFontSize })
  const [focussed, setFocussed] = useState(autoFocus ? true : false)
  const springStyle = useSpring({
    borderColor: focussed ? colors.focussedInputBorder : colors.unfocussedInput,
    backgroundColor: focussed ? colors.focussedInput : colors.unfocussedInput,
    config: springConfig.medium
  })
  const labelSpring = useSpring({
    backgroundColor: focussed ? colors.focussedInput : colors.unfocussedInput,
    config: springConfig.medium
  })
  const Flex = layout === 'row' ? AnimatedFlexRow : AnimatedFlexCol
  return (
    <Flex alignItems='stretch'
      className={
        bounderClassName ?
          `${classes.TextAreaBounder} ${bounderClassName}` :
          classes.TextAreaBounder
      }
      style={springStyle}
    >
      {label ? <AnimatedText className={classes.Label} text={label}
        style={Object.assign(labelSpring, labelStyle)}
      /> : null}
      <TextAreaOnly
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
        textAreaRef={textAreaRef}
        autoFocus={autoFocus}
        onEnter={onEnter}
        onEscape={onEscape}
        defaultValue={defaultValue}
        value={value}
      />
    </Flex>
  )
}

export default TextArea