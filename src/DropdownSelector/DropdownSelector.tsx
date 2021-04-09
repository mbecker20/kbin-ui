import React, { Fragment, useRef, useState } from 'react'
import useJSS from './style'
import CSS from 'csstype'
import Conditional from '../Conditional'
import Text from '../Text/Text'
import Map from '../Map'
import FlexCol from '../Flex/FlexCol'
import { useListener, useReRenderOnResize } from '../hooks'
import { colors } from '../theme'

function getLeft(rect: DOMRect, alignment?: 'center' | 'right' | 'left') {
  switch (alignment) {
    case 'center': return (rect.right + rect.left) / 2
    case 'right': return rect.right
    case 'left': return rect.left
    default: return (rect.right + rect.left) / 2
  }
}

function DropdownSelector({
  selection, onSelect, selections, selectionToText, margin, padding, width, height,
  backgroundColor, menuPadding, menuStyle, textStyle, menuBorderRadius,
  alignment, alignItems, selectionMargin, selectionPadding, selectionStyle,
  highlightColor, selectedToText
}: {
  selection: string
  selections: string[]
  onSelect?: (selection: string) => void
  selectionToText?: (selection: string) => string
  selectedToText?: (selection: string) => string
  margin?: string
  padding?: string
  width?: string
  height?: string
  backgroundColor?: string
  borderRadius?: string
  boxShadow?: string
  menuPadding?: string
  menuStyle?: CSS.Properties
  textStyle?: CSS.Properties
  menuBorderRadius?: string
  alignment?: 'center' | 'right' | 'left'
  alignItems?: string
  selectionMargin?: string
  selectionPadding?: string
  selectionStyle?: CSS.Properties
  highlightColor?: string
}) {
  const [open, setOpen] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)
  const boundingRect = textRef.current ? textRef.current.getBoundingClientRect() : undefined
  const classes = useJSS({
    top: textRef.current && boundingRect ? textRef.current.offsetTop + boundingRect.bottom - boundingRect.top : 0,
    left: boundingRect ? getLeft(boundingRect, alignment) : 0,
    alignment, highlightColor
  })
  const menuRef = useRef<HTMLDivElement>(null)
  useReRenderOnResize()
  useListener('click', (e: MouseEvent) => {
    if (open && menuRef.current) {
      const boundingRect = menuRef.current.getBoundingClientRect()
      if (
        e.clientX < boundingRect.left ||
        e.clientX > boundingRect.right ||
        e.clientY < boundingRect.top ||
        e.clientY > boundingRect.bottom
      ) {
        setOpen(false)
      }
    }
  })
  return (
    <Fragment>
      <Text
        margin={margin}
        padding={padding}
        width={width}
        height={height}
        style={textStyle}
        onClick={() => setOpen(!open)}
        ref={textRef}
        pointer
      >
        {selectedToText ? selectedToText(selection) : selectionToText ? selectionToText(selection) : selection}
      </Text>
      <Conditional showIf={open}>
        <FlexCol
          className={classes.DropdownSelector}
          backgroundColor={backgroundColor ? backgroundColor : colors.dropdownBG}
          padding={menuPadding}
          boxShadow={colors.boxShadow}
          style={menuStyle}
          borderRadius={menuBorderRadius}
          alignItems={alignItems}
          ref={menuRef}
        >
          <Map
            array={selections}
            map={(selection, i) => (
              <Text
                key={i}
                className={classes.Selection}
                onClick={() => {
                  if (onSelect) onSelect(selection)
                  setOpen(false)
                }}
                margin={selectionMargin}
                padding={selectionPadding}
                style={selectionStyle}
                pointer
              >
                {selectionToText ? selectionToText(selection) : selection}
              </Text>
            )}
          />
        </FlexCol>
      </Conditional>
    </Fragment>
  )
}

export default DropdownSelector