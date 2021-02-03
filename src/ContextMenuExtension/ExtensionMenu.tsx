import React, { Fragment, ReactNode, useEffect, useRef, useState } from 'react'
import Button from '../Button/Button'
import Conditional from '../Conditional'
import { getEMLocation } from './helpers'
import useJSS from './style'
import CSS from 'csstype'

const timeout = 1000

function ExtensionMenu({ text, children, buttonStyle, fontSize }: {
  children: ReactNode
  text: string
  buttonStyle?: CSS.Properties
  fontSize?: string
}) {
  const [isOpen, setOpen] = useState(false)
  const [timeoutID, setTimeoutID] = useState(-1)
  const classes = useJSS()
  const buttonRef = useRef<HTMLDivElement>(null)
  const emRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (emRef.current) {
      // this is only run if div is rendered, ie when isOpen is true
      const { top, left } = getEMLocation(buttonRef, emRef)
      emRef.current.style.top = `${top}px`
      emRef.current.style.left = `${left}px`
    }
  })
  return (
    <Fragment>
      <Button 
        buttonRef={buttonRef}
        style={buttonStyle}
        fontSize={fontSize}
        onPointerEnter={() => {
          window.clearTimeout(timeoutID)
          setOpen(true)
        }}
        onPointerLeave={() => {
          const newID = window.setTimeout(() => {
            setOpen(false)
          }, timeout)
          setTimeoutID(newID)
        }}
      >
        { text }
      </Button>
      <Conditional showIf={isOpen}>
        <div className={classes.ExtensionMenu}
          ref={emRef}
          onPointerEnter={() => {
            window.clearTimeout(timeoutID)
          }}
          onPointerLeave={() => {
            const newID = window.setTimeout(() => {
              setOpen(false)
            }, timeout)
            setTimeoutID(newID)
          }}
        >
          { children }
        </div>
      </Conditional>
    </Fragment>
  )
}

export default ExtensionMenu