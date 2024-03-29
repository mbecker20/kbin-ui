import React, { ChangeEvent, FocusEvent, KeyboardEvent, RefObject } from 'react'
import useJSS from './style'
import CSS from 'csstype'

function TextInputOnly(props: {
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
  borderRadius?: string
  padding?: string
  inputBackgroundColor?: string
  size?: number
  maxLength?: number
  minLength?: number
  number?: boolean
}) {
  const classes = useJSS(props)
  const {
    className, style, placeholder, onChange, onFocus,
    onBlur, onKeyDown, inputRef, autoFocus, size,
    onEnter, onEscape, defaultValue, value, password,
    maxLength, minLength, number
  } = props
  return (
    <input
      className={
        className ?
          `${classes.TextInput} ${className}` :
          classes.TextInput
      }
      type={password ? 'password' : number ? 'number' : 'text'}
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
      size={size}
      maxLength={maxLength}
      minLength={minLength}
      value={value}
    />
  )
}


export default TextInputOnly