import React, { ChangeEvent, FocusEvent, KeyboardEvent, RefObject } from 'react'
import useJSS from './style'
import CSS from 'csstype'

function TextAreaOnly({
  className, style, placeholder, onChange, 
  onFocus, onBlur, onKeyDown, fontSize,
  textAreaRef, autoFocus, onEnter,
  onEscape, defaultValue, value, bold
}: {
  className?: string
  style?: CSS.Properties
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
  bold?: boolean
}) {
  const classes = useJSS({ fontSize, bold })
  return (
    <textarea
      className={
        className ?
          `${classes.TextArea} ${className}` :
          classes.TextArea
      }
      style={style}
      placeholder={placeholder} onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={e => {
        switch (e.key) {
          case 'Enter': if (onEnter) onEnter(); break;
          case 'Escape': if (onEscape) onEscape(); break;
        }
        if (onKeyDown) onKeyDown(e)
      }}
      ref={textAreaRef}
      autoFocus={autoFocus}
      defaultValue={defaultValue}
      value={value}
    />
  )
}

export default TextAreaOnly