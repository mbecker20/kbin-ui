import React, { Fragment, ReactNode, useEffect, useRef, useState } from 'react'
import Conditional from '../Conditional'
import FlexCol from '../Flex/FlexCol'
import SVGIcon from '../SVGIcon/SVGIcon'
import { colors } from '../theme'
import useJSS from './style'
import CSS from 'csstype'
import { useReRenderOnResize } from '../hooks'

function getLeft(rect: DOMRect, alignment?: 'center' | 'right' | 'left') {
  switch (alignment) {
    case 'center': return (rect.right + rect.left) / 2
    case 'right': return rect.right
    case 'left': return rect.left
    default: return (rect.right + rect.left) / 2
  }
  return 
}

function DropdownMenu({ 
  children, alt, title, margin ,padding, width, height,
  backgroundColor, menuPadding, menuStyle, svgStyle, menuBorderRadius,
  alignment
}: {
  children: ReactNode
  alt: string
  margin?: string
  padding?: string
  width?: string
  height?: string
  title?: string
  backgroundColor?: string
  menuPadding?: string
  menuStyle?: CSS.Properties
  svgStyle?: CSS.Properties
  menuBorderRadius?: string
  alignment?: 'center' | 'right' | 'left'
}) {
  const [open, setOpen] = useState(false)
  const svgRef = useRef<HTMLImageElement>(null)
  const boundingRect = svgRef.current ? svgRef.current.getBoundingClientRect() : undefined
  const classes = useJSS({
    top: svgRef.current && boundingRect ? svgRef.current.offsetTop + boundingRect.bottom - boundingRect.top : 0,
    left: boundingRect ? getLeft(boundingRect, alignment) : 0,
    alignment
  })
  useReRenderOnResize()
  return (
    <Fragment>
      <SVGIcon
        src='/svg/dropdown.svg'
        alt={alt}
        title={title}
        onClick={() => setOpen(!open)}
        imageRef={svgRef}
        margin={margin}
        padding={padding}
        width={width}
        height={height}
        style={svgStyle}
        pointer
      />
      <Conditional showIf={open}>
        <FlexCol 
          className={classes.DropdownMenu}
          backgroundColor={backgroundColor ? backgroundColor : colors.dropdownBG}
          padding={menuPadding}
          boxShadow={colors.boxShadow}
          style={menuStyle}
          borderRadius={menuBorderRadius}
        >
          {children}
        </FlexCol>
      </Conditional>
    </Fragment>
  )
}

export default DropdownMenu