import React, { ChangeEvent, FocusEvent, KeyboardEvent, RefObject } from 'react'
import useJSS from './style'
import CSS from 'csstype'

function TextInputOnly({
  className, style, placeholder, onChange, onFocus, 
  onBlur, onKeyDown, fontSize, inputRef, autoFocus,
  onEnter, onEscape, defaultValue, value, password,
  bold, gridArea, margin, width
}: {
  className?: string
  style?: CSS.Properties
  placeholder?: string
  onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  onKeyDown?: (key: string, e: KeyboardEvent<HTMLInputElement>) => void
  fontSize?: string
  inputRef?: RefObject<HTMLInputElement>
  autoFocus?: boolean
  onEnter?: () => void
  onEscape?: () => void
  defaultValue?: string
  value?: string
  password?: boolean
  bold?: boolean
  gridArea?: string
  margin?: string
  width?: string
}) {
  const classes = useJSS({ fontSize, bold, gridArea, margin, width })
  return (
    <input
      className={
        className ?
          `${classes.TextInput} ${className}` :
          classes.TextInput
      }
      type={password ? 'password' : 'text'}
      style={style}
      placeholder={placeholder}
      onChange={e => {
        if (onChange) onChange(e.target.value, e)
      }}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={e => {
        switch (e.key) {
          case 'Escape': if (onEscape) onEscape(); break;
          case 'Enter': if (onEnter) onEnter(); break;
        }
        if (onKeyDown) onKeyDown(e.key, e)
      }}
      ref={inputRef}
      autoFocus={autoFocus}
      defaultValue={defaultValue}
      value={value}
    />
  )
}


export default TextInputOnly