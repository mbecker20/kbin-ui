import React, { useState } from 'react'
import useJSS from './style'
import CSS from 'csstype'
import NavBarItem from './NavBarItem'
import { useLocalStorage } from '../hooks'
import Conditional from '../Conditional'
import SVGIcon from '../SVGIcon/SVGIcon'
import Map from '../Map'
import FlexCol from '../Flex/FlexCol'

/**
 * routes is an object with keys set as the routes and entries as urls to the image src for the route icon
 * also needs the app logo src url and menu icon src url
 * @param params 
 */
function NavBar({ 
  localStorage, storageKey, initOpen, routes, onRouteClick, bottomRoutes,
  titleIconSrc, menuIconSrc, titleIconStyle, titleIconHeight, titleIconWidth
}: {
  routes: { [route: string]: string } // route => iconSrc
  onRouteClick: (route: string) => void
  titleIconSrc: string
  menuIconSrc: string
  bottomRoutes?: { [route: string]: string }
  titleIconStyle?: CSS.Properties
  titleIconHeight?: string
  titleIconWidth?: string
  onTitleClick?: () => void
  localStorage?: boolean
  storageKey?: string
  initOpen?: boolean
}) {
  const _localStorage = localStorage ? localStorage : true
  const _storageKey = storageKey ? storageKey : 'NavBar'
  const _initOpen = initOpen ? initOpen : true
  const [open, setOpen] = _localStorage ? useLocalStorage(_initOpen, _storageKey) : useState(_initOpen)
  const classes = useJSS(open)
  const routeKeys = Object.keys(routes)
  return (
    <FlexCol className={classes.NavBar}>
      <div className={classes.NavBarGrid}>
        <Conditional showIf={open}>
          <SVGIcon
            src={titleIconSrc}
            alt='menu'
            style={Object.assign({ gridColumn: 'text / span 1' }, titleIconStyle)}
            onClick={() => setOpen(!open)}
            width={titleIconWidth}
            height={titleIconHeight}
            padding='.4em 1em'
            pointer
          />
        </Conditional>
        <SVGIcon
          src={menuIconSrc}
          alt='menu'
          style={{ gridColumn: 'icon / span 1' }}
          onClick={() => setOpen(!open)}
          margin='.1em'
          pointer
        />
      </div>
      <div className={classes.Divider} />
      <div className={classes.Routes}>
        <div className={classes.NavBarGrid}>
          <Map
            array={routeKeys}
            map={(route, index) => (
              <NavBarItem
                open={open}
                iconSRC={routes[route]}
                key={index}
                text={route}
                onClick={() => onRouteClick(route)}
              />
            )}
          />
        </div>
      </div>
      <Conditional showIf={typeof bottomRoutes !== 'undefined'}>
        <div className={classes.Divider} />
        <div className={classes.NavBarGrid}>
          <Map 
            array={Object.keys(bottomRoutes as {})}
            map={(route, index) => (
              <NavBarItem
                open={open}
                iconSRC={routes[route]}
                key={index}
                text={route}
                onClick={() => onRouteClick(route)}
              />
            )}
          />
        </div>
      </Conditional>
    </FlexCol>
  )
}

export default NavBar