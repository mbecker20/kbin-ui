import React, { Fragment, ReactNode } from 'react'
import CSS from 'csstype'
import Map from '../Map'
import { colors, sizes } from '../theme'

function DataRow({ dataset, row, style }: {
  dataset: { [index: string]: ReactNode }
  row: number
  style?: CSS.Properties
}) {
  return (
    <Fragment>
      <div
        style={{
          gridColumn: `1 / -1`,
          gridRow: `${row} / span 1`,
          backgroundColor: row % 2 === 0 ? colors.dataTableEvenRow : colors.dataTableOddRow,
        }}
      />
      <Map
        array={Object.keys(dataset)}
        map={key => (
          <div
            key={key}
            style={Object.assign({
              gridColumn: `${key} / span 1`,
              gridRow: `${row} / span 1`,
              margin: sizes.dataTable.itemMargin
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