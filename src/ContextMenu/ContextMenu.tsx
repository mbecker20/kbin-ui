import React, { ReactNode, useEffect, useRef } from 'react'
import useJSS from './style'
import CSS from 'csstype'
import { getCMLocation } from './helpers'
import Conditional from '../Conditional'

function ContextMenu({ children, onClose, bounderStyle, style, event, isOpen }: {
  children: ReactNode
  onClose: () => void
  bounderStyle?: CSS.Properties
  style?: CSS.Properties
  event: React.MouseEvent<HTMLDivElement> | MouseEvent
  isOpen: boolean
}) {
  const classes = useJSS({ isOpen })
  const cmRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (cmRef.current) {
      if (event) {
        const { top, left } = getCMLocation(event, cmRef)
        cmRef.current.style.top = `${top}px`
        cmRef.current.style.left = `${left}px`
      } else {
        cmRef.current.style.top = '-1000px'
        cmRef.current.style.left = '-1000px'
      }
    }
  }, [event])
  return (
    <div className={classes.ContextMenuBounder}
      onPointerDown={() => {
        if (cmRef.current) {
          cmRef.current.style.top = '-1000px'
          cmRef.current.style.left = '-1000px'
        }
        onClose()
      }}
      style={bounderStyle}
    >
      <div className={classes.ContextMenu}
        style={style}
        ref={cmRef}
        onPointerDown={e => { e.stopPropagation() }}
      >
        <Conditional showIf={isOpen}>
          { children }
        </Conditional>
      </div>
    </div>
  )
}

export default ContextMenu