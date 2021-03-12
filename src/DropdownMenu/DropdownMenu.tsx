import React, { Fragment, ReactNode, useEffect, useRef, useState } from 'react'
import Conditional from '../Conditional'
import FlexCol from '../Flex/FlexCol'
import SVGIcon from '../SVGIcon/SVGIcon'
import { colors } from '../theme'
import useJSS from './style'
import CSS from 'csstype'

function DropdownMenu({ 
  children, alt, title, margin ,padding, width, height,
  backgroundColor, menuPadding, menuStyle, svgStyle
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
}) {
  const [open, setOpen] = useState(false)
  const svgRef = useRef<HTMLImageElement>(null)
  const boundingRect = svgRef.current ? svgRef.current.getBoundingClientRect() : undefined
  const classes = useJSS({
    top: boundingRect?.bottom,
    left: boundingRect ? (boundingRect.right + boundingRect.left) / 2 : 0
  })
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
        >
          {children}
        </FlexCol>
      </Conditional>
    </Fragment>
  )
}

export default DropdownMenu