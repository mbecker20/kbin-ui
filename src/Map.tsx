import React, { Fragment, ReactNode } from 'react'

interface Props<T> {
  array: T[],
  map: (val: T, index: number) => ReactNode
}

function Map<T>({ array, map }: Props<T>) {
  return (
    <Fragment>
      {array.map(map)}
    </Fragment>
  )
}

export default Map