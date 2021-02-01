import React, { DragEvent, RefObject } from "react";

export type DivRef = RefObject<HTMLDivElement>

export function getCMLocation(e: React.MouseEvent<HTMLDivElement> | DragEvent<HTMLDivElement> | MouseEvent, ref: DivRef) {
  if (!ref.current) {
    return {
      top: -1000,
      left: -1000,
    }
  } else {
    return {
      top: (window.innerHeight - e.clientY) >= ref.current.offsetHeight ?
        e.clientY : window.innerHeight - ref.current.offsetHeight,
      left: (window.innerWidth - e.clientX) >= ref.current.offsetWidth ?
        e.clientX : window.innerWidth - ref.current.offsetWidth,
    }
  }
}