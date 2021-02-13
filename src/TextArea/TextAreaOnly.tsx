import React, { ChangeEvent, FocusEvent, KeyboardEvent, RefObject } from 'react'
import useJSS from './style'
import CSS from 'csstype'

function TextAreaOnly({
  className, style, placeholder, onChange, 
  onFocus, onBlur, onKeyDown, fontSize,
  textAreaRef, autoFocus, onEnter,
  onEscape, defaultValue, value, bold,
  rows, cols
}: {
  className?: string
  style?: CSS.Properties
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
  bold?: boolean
  rows?: number
  cols?: number
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
      placeholder={placeholder} 
      onChange={e => {
        if (onChange) onChange(e.target.value, e)
      }}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={e => {
        switch (e.key) {
          case 'Enter': if (onEnter) onEnter(); break;
          case 'Escape': if (onEscape) onEscape(); break;
        }
        if (onKeyDown) onKeyDown(e.key, e)
      }}
      ref={textAreaRef}
      autoFocus={autoFocus}
      defaultValue={defaultValue}
      value={value}
      rows={rows}
      cols={cols}
    />
  )
}

export default TextAreaOnly