import React, { Fragment, ReactElement, ReactNode } from 'react'
import Dashboard from './Dashboard'
import IfElse from './IfElse'
import LoadingScreen from './LoadingScreen/LoadingScreen'
import CSS from 'csstype'

function KbinApp({
  initialized,
  loggedIn,
  Login,
  NavBar,
  TopBar,
  fullNavBar,
  Router,
  Menus,
  Notification,
  LoadingIcon,
  dashboardStyle,
  children,
}: {
  initialized: boolean
  loggedIn: boolean
  Login?: ReactElement
  NavBar?: ReactElement
  TopBar?: ReactElement
  fullNavBar?: boolean
  Router?: ReactElement
  Menus?: ReactElement
  Notification?: ReactElement
  LoadingIcon?: ReactElement
  dashboardStyle?: CSS.Properties
  children?: ReactNode
}) {
  return (
    <Fragment>
      <LoadingScreen initialized={initialized}>
        {LoadingIcon}
      </LoadingScreen>
      <IfElse
        showIf={initialized && loggedIn}
        show={
          <Fragment>
            <Dashboard 
              NavBar={NavBar} 
              TopBar={TopBar}
              fullNavBar={fullNavBar}
              style={dashboardStyle}
            >
              {Router}
              {children}
            </Dashboard>
            {Menus}
          </Fragment>
        }
        showElse={Login}
      />
      {Notification}
    </Fragment>
  )
}

export default KbinApp