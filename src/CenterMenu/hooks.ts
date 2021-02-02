import { useState } from "react";
import { AddMenu, CloseMenu, OpenMenu } from "../menuManager/types";

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