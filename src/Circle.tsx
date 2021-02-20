import React, { Children, cloneElement, ReactElement } from 'react'
import Grid from './Grid/Grid'
import { colors } from './theme'
import { createUseStyles } from 'react-jss'

function Circle({ size, fill, stroke, strokeWidth, circleR, children, gridArea, margin, padding, pointer }: {
  size: string
  fill?: string
  stroke?: string
  strokeWidth?: string
  circleR?: string
  children?: ReactElement
  gridArea?: string
  margin?: string
  padding?: string
  pointer?: boolean
}) {
  const classes = useJSS({ size })
  return (
    <Grid
      gridTemplateRows='auto'
      gridTemplateColumns='auto'
      gridTemplateAreas={`
        "circle"
      `}
      placeItems='center'
      width='fit-content'
      height='fit-content'
      gridArea={gridArea}
      margin={margin}
      padding={padding}
      pointer={pointer}
    >
      <svg 
        className={classes.Circle}
        width={size} height={size}
        fill={fill ? fill : colors.circleFill}
        stroke={stroke ? stroke : colors.circleStroke}
        strokeWidth={strokeWidth}
      >
        <circle cx='50%' cy='50%' r={circleR ? circleR : '45%'} />
      </svg>
      {children ? Children.map(children, child => cloneElement(child, { ...child.props, className: child.props.className ? `${child.props.className} ${classes.Circle}` : classes.Circle })) : null}
    </Grid>
  )
}

const useJSS = createUseStyles({
  Circle: {
    gridArea: 'circle'
  },
})

export default Circle