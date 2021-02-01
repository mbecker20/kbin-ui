export type MenuManager = {
  menus: ManagedMenus,
  history: MenuHistory[]
}

export type OpenMenu = (...args: any) => void

export interface ManagedMenus {
  [index: string]: OpenMenu
}

export type MenuHistory = {
  name: string
  openMenu: () => void
}

export type AddMenu = (name: string, openMenu: OpenMenu) => void

export type CloseMenu = () => void

export type MMOpenMenu = (name: string, save: boolean) => void