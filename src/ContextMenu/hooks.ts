import { MouseEvent, useState } from "react";

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