import React, { Fragment, ReactNode } from 'react'

interface Props {
  showIf: boolean
  show: ReactNode
  showElse: ReactNode
}

function IfElse({ showIf, show, showElse }: Props) {
  return (
    <Fragment>
      {showIf ? show : showElse}
    </Fragment>
  )
}

export default IfElse