import { useEffect, useState } from "react"

export function useListener<Event>(listenerID: string, listener: (e: Event) => void, dependencies: any[] = []) {
  useEffect(() => {
    window.addEventListener(listenerID, listener as any)
    return () => {
      window.removeEventListener(listenerID, listener as any)
    }
  }, dependencies)
}

export function conditionalUseState<T>(conditional: boolean, initState: T) {
  return conditional ? useState(initState) : [initState, () => {}]
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

export function useLocalStorage<T>(defaultStore: T, key: string): [T, (arg: T) => void] {
  const toStore = window.localStorage.getItem(key)
  const [stored, setStore] = useState(toStore ? JSON.parse(toStore) as T : defaultStore)
  return [
    stored,
    (newStore: T) => {
      setStore(newStore)
      window.localStorage.setItem(key, JSON.stringify(newStore))
    }
  ]
}

function genUpdateID(updates: number) {
  return `${updates}${Math.floor(Math.random() * 0xFFF).toString(16)}`
}

export function useReRender() {
  const [, toReRender] = useState('')
  let count = 0
  const reRender = () => {
    toReRender(genUpdateID(count))
    count++
  }
  return reRender
}

export function useReRenderOnResize() {
  const reRender = useReRender()
  useListener('resize', () => {
    window.requestAnimationFrame(reRender)
  })
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