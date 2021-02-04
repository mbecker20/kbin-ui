import React, { ReactNode } from 'react'
import useJSS from './style'

function Dashboard({ children, navbar }: {
  children: ReactNode
  navbar: ReactNode
}) {
  const classes = useJSS()
  return (
    <div className={classes.DashboardBounder}>
      {navbar}
      <div className={classes.Dashboard}>
        {children}
      </div>
    </div>
  )
}

export default Dashboard