import { makeUseCenterMenu } from "../hooks"
import { MenuManager, OpenMenu } from "./types"

function createMenuManager() {
  const menuManager: MenuManager = {
    menus: {},
    history: [], // save names to preserve order menus opened
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

  return {
    mmAddMenu,
    mmOpenMenu,
    mmQueueMenu,
    mmCloseMenu,
    useCenterMenu: makeUseCenterMenu(mmAddMenu, mmCloseMenu)
  }
}

export default createMenuManager