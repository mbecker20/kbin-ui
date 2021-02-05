import React, { useState } from 'react'
import useJSS from './style'
import CSS from 'csstype'
import NavBarItem from './NavBarItem'
import { useLocalStorage } from '../hooks'
import FlexCol from '../Flex/FlexCol'
import IfElse from '../IfElse'
import FlexRow from '../Flex/FlexRow'
import SVGIcon from '../SVGIcon/SVGIcon'
import Map from '../Map'
import Conditional from '../Conditional'

/**
 * routes is an object with keys set as the routes and entries as urls to the image src for the route icon
 * also needs the app logo src url and menu icon src url
 * @param params 
 */
function NavBar({ 
  localStorage, storageKey, initOpen, routes, onRouteClick, bottomRoutes,
  titleIconSrc, menuIconSrc, titleIconStyle, titleIconHeight, titleIconWidth,
  iconWidth, iconHeight
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
  iconWidth?: string
  iconHeight?: string
}) {
  const _localStorage = localStorage ? localStorage : true
  const _storageKey = storageKey ? storageKey : 'NavBar'
  const _initOpen = initOpen ? initOpen : true
  const [open, setOpen] = _localStorage ? useLocalStorage(_initOpen, _storageKey) : useState(_initOpen)
  const classes = useJSS(open)
  return (
    <FlexCol className={classes.NavBar}>
      <IfElse
        showIf={open}
        show={
          <FlexRow
            justifyContent='space-between' 
            alignItems='center'
            margin='.4em 1em'
          >
            <SVGIcon
              src={titleIconSrc}
              alt='menu'
              style={titleIconStyle}
              onClick={() => setOpen(!open)}
              width={titleIconWidth}
              height={titleIconHeight}
              pointer
            />
            <SVGIcon
              src={menuIconSrc}
              alt='menu'
              onClick={() => setOpen(!open)}
              margin='.1em'
              width={iconWidth}
              height={iconHeight}
              pointer
            />
          </FlexRow>
        }
        showElse={
          <SVGIcon
            src={menuIconSrc}
            alt='menu'
            onClick={() => setOpen(!open)}
            width={iconWidth}
            height={iconHeight}
            margin='.5em 1.1em'
            pointer
          />
        }
      />
      <div className={classes.Divider} />
      <div className={classes.Routes}>
        <FlexCol>
          <Map
            array={Object.keys(routes)}
            map={(route, index) => (
              <NavBarItem
                open={open}
                iconSRC={routes[route]}
                key={index}
                text={route}
                iconWidth={iconWidth}
                iconHeight={iconHeight}
                onClick={() => onRouteClick(route)}
              />
            )}
          />
        </FlexCol>
      </div>
      <Conditional showIf={bottomRoutes ? true : false}>
        <div className={classes.Divider}/>
        <FlexCol>
          <Map 
            array={bottomRoutes ? Object.keys(bottomRoutes as any) : []}
            map={(route, index) => (
              <NavBarItem
                open={open}
                iconSRC={(bottomRoutes as any)[route]}
                key={index}
                text={route}
                iconWidth={iconWidth}
                iconHeight={iconHeight}
                onClick={() => onRouteClick(route)}
              />
            )}
          />
        </FlexCol>
      </Conditional>
    </FlexCol>
  )
}

export default NavBar