import React, { Fragment, ReactNode } from 'react'
import CSS from 'csstype'
import Map from '../Map'
import { rowJSS } from './style'

function DataRow({ dataset, row, style, margin }: {
  dataset: { [index: string]: ReactNode }
  row: number
  style?: CSS.Properties
  margin?: string
}) {
  const classes = rowJSS({ row, margin })
  return (
    <Fragment>
      <div
        className={classes.DataTableRowBG}
      />
      <Map
        array={Object.keys(dataset)}
        map={key => (
          <div
            className={classes.RowItem}
            key={key}
            style={Object.assign({
              gridColumn: `${key.replace(' ', '-')} / span 1`,
            }, style)}
          >
            {dataset[key]}
          </div>
        )}
      />
    </Fragment>
  )
}

export default DataRow