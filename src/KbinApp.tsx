import React, { Fragment, ReactElement, ReactNode } from 'react'
import Conditional from './Conditional'
import Dashboard from './Dashboard/Dashboard'
import IfElse from './IfElse'
import LoadingScreen from './LoadingScreen/LoadingScreen'

function KbinApp({
  initialized,
  loggedIn,
  Login,
  NavBar,
  Router,
  Menus,
  Notification,
  LoadingIcon,
  children,
}: {
  initialized: boolean
  loggedIn: boolean
  Login: ReactElement
  NavBar?: ReactElement
  Router?: ReactElement
  Menus?: ReactElement
  Notification?: ReactElement
  LoadingIcon?: ReactElement
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
            <Dashboard navbar={NavBar}>
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