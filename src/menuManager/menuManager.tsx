import React from 'react'
import { Fragment, ReactNode } from "react"
import { makeUseCenterMenu } from "../hooks"
import Map from "../Map"
import { MenuManager, OpenMenu } from "./types"

function createMenuManager() {
  const menuManager: MenuManager = {
    menus: {},
    history: [], // save names to preserve order menus opened
    CenterMenus: [],
    ContextMenus: []
  } 

  function mmAddMenu(name: string, openMenu: OpenMenu) {
    menuManager.menus[name] = openMenu
  }

  function mmOpenMenu(name: string, save: boolean, ...args: any) {
    // returns the appropriate opening function
    menuManager.menus[name](...args)
    if (save) {
      menuManager.history = [...menuManager.history, {
        name,
        openMenu: () => menuManager.menus[name](...args)
      }]
    }
  }

  function mmQueueMenu(name: string, ...args: any) {
    menuManager.history = [ ...menuManager.history, {
      name,
      openMenu: () => menuManager.menus[name](...args)
    } ]
  }

  function mmCloseMenu() {
    if (menuManager.history.length > 1) {
      menuManager.history[menuManager.history.length - 2].openMenu()
    }
    menuManager.history = menuManager.history.slice(0, menuManager.history.length - 1)
  }

  function addCenterMenus(CenterMenus: ReactNode[]) {
    Object.assign(menuManager, { CenterMenus })
  }

  function addContextMenus(ContextMenus: ReactNode[]) {
    Object.assign(menuManager, { ContextMenus })
  }

  function Menus() {
    return (
      <Fragment>
        {menuManager.CenterMenus}
        {menuManager.ContextMenus}
      </Fragment>
    )
  }

  return {
    mmAddMenu,
    mmOpenMenu,
    mmQueueMenu,
    mmCloseMenu,
    useCenterMenu: makeUseCenterMenu(mmAddMenu, mmCloseMenu),
    addCenterMenus,
    addContextMenus,
    Menus
  }
}

export default createMenuManager