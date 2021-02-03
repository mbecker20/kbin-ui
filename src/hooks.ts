import { MouseEvent, useEffect, useState } from "react"
import { AddMenu, CloseMenu, OpenMenu } from "./menuManager/types"

export function useListener<Event>(listenerID: string, listener: (e: Event) => void, dependencies: any[] = []) {
  useEffect(() => {
    window.addEventListener(listenerID, listener as any)
    return () => {
      window.removeEventListener(listenerID, listener as any)
    }
  }, dependencies)
}

export function useEscapeToClose(closeMenu: () => void, dependencies: any[] = []) {
  useListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeMenu()
    }
  }, dependencies)
}

export function useDisableBodyScroll() {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])
}

type Return<Data> = [
  Data,
  (arg: Data) => void,
  {
    open: boolean,
    event: MouseEvent<HTMLDivElement> | null,
    setOpen: (arg: boolean) => void,
    setEvent: (arg: MouseEvent<HTMLDivElement>) => void
  }
]

export function useContextMenu<Data>(idata: Data): Return<Data> {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState(idata)
  const [event, setEvent] = useState<MouseEvent<HTMLDivElement> | null>(null)
  return [
    data,
    setData,
    {
      open, event,
      setOpen, setEvent
    }
  ]
}

export function makeUseCenterMenu(mmAddMenu: AddMenu, mmCloseMenu: CloseMenu) {
  return function useCenterMenu(name: string, onOpen?: OpenMenu, save = true, onClose?: () => void) {
    const [exists, setExists] = useState(false)
    mmAddMenu(name, (...args: any) => {
      if (onOpen) onOpen(...args)
      setExists(true)
    })
    return {
      cmControlData: exists,
      closeMenu: () => {
        setExists(false)
        if (onClose) onClose()
        if (save) mmCloseMenu()
      },
      softClose: () => {
        setExists(false)
        if (onClose) onClose()
      }
    }
  }
}

export function useErrorReport() {
  const [visible, setVisible] = useState(false)
  const [exists, setExists] = useState(false)
  const [errorString, setErrorString] = useState('')
  return {
    erControlData: {
      visible,
      exists,
      errorString,
      setExistFalse: () => {
        setExists(false)
      }
    },
    openErrorReport: (error: string) => {
      setErrorString(error)
      setVisible(true)
      setExists(true)
    },
    closeErrorReport: () => {
      setVisible(false)
    },
  }
}