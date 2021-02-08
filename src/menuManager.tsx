import { genUpdateID } from 'kbin-state'
import React, { Fragment, useState } from 'react'
import { ReactNode } from "react"
import CenterMenu_ from './CenterMenu/CenterMenu'
import ContextMenu_ from './ContextMenu/ContextMenu'
import CSS from 'csstype'

type CenterMenuProps = {
  className?: string
  style?: CSS.Properties
  headerClassName?: string
  headerStyle?: CSS.Properties
  bounderStyle?: CSS.Properties
}

type ContextMenuProps = {
  bounderStyle?: CSS.Properties
  style?: CSS.Properties
}

type MenuManager = {
  centerMenu: { header?: string, component: ReactNode }
  centerMenuProps: CenterMenuProps
  openCenter: () => void
  closeCenter: () => void
  contextMenu: ReactNode
  contextMenuProps: ContextMenuProps
  openContext: (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => void
  closeContext: () => void
}

function createMenuManager() {
  const menuManager: MenuManager = {
    centerMenu: { component: null },
    centerMenuProps: {},
    openCenter: () => {},
    closeCenter: () => {},
    contextMenu: null,
    contextMenuProps: {},
    openContext: () => {},
    closeContext: () => {}
  }

  function openCenterMenu(component: ReactNode, header?: string, props: CenterMenuProps = {}) {
    menuManager.centerMenu = { header, component }
    menuManager.centerMenuProps = props
    menuManager.openCenter()
  }

  function closeCenterMenu() {
    menuManager.closeCenter()
  }

  function CenterMenu(props: {
    className?: string
    style?: CSS.Properties
    headerClassName?: string
    headerStyle?: CSS.Properties
    bounderStyle?: CSS.Properties
  }) {
    // updateID is to ensure it always rerenders even when staying open
    const [{open}, setOpen] = useState({ open: false, id: genUpdateID(0) }) 
    menuManager.openCenter = () => setOpen({ open: true, id: genUpdateID(0) })
    menuManager.closeCenter = () => setOpen({ open: false, id: genUpdateID(0) })
    return (
      <CenterMenu_
        exists={open}
        header={menuManager.centerMenu.header}
        onClose={menuManager.closeCenter}
        {...Object.assign({}, props, menuManager.centerMenuProps)}
      >
        {menuManager.centerMenu.component}
      </CenterMenu_>
    )
  }

  function openContextMenu(e: React.MouseEvent<HTMLDivElement> | MouseEvent, component: ReactNode, props: ContextMenuProps = {}) {
    menuManager.contextMenu = component
    menuManager.contextMenuProps = {}
    menuManager.openContext(e)
  }

  function closeContextMenu() {
    menuManager.closeContext()
  }

  function ContextMenu(props: {
    bounderStyle?: CSS.Properties
    style?: CSS.Properties
  }) {
    const [{ open, event }, setOpen] = useState<{ open: boolean, event: React.MouseEvent<HTMLDivElement> | MouseEvent }>({ open: false, event: new MouseEvent('') })
    menuManager.openContext = event => setOpen({ open: true, event })
    menuManager.closeContext = () => setOpen({ open: false, event: new MouseEvent('') })
    return (
      <ContextMenu_
        isOpen={open}
        onClose={menuManager.closeContext}
        event={event}
        {...Object.assign({}, props, menuManager.contextMenuProps)}
      >
        {menuManager.contextMenu}
      </ContextMenu_>
    )
  }

  function Menus({ centerMenuProps, contextMenuProps }: {
    centerMenuProps: CenterMenuProps
    contextMenuProps: ContextMenuProps
  }) {
    return (
      <Fragment>
        <CenterMenu {...centerMenuProps} />
        <ContextMenu {...contextMenuProps} />
      </Fragment>
    )
  }

  return {
    openCenterMenu,
    closeCenterMenu,
    openContextMenu,
    closeContextMenu,
    Menus
  }
}

export default createMenuManager