import React, { ReactNode } from 'react'
import { objFrom2Arrays } from 'kbin-state'
import DataRow from './DataRow'
import useJSS from './style'
import CSS from 'csstype'
import Text from '../Text/Text'
import Map from '../Map'

function DataTable({ 
  primaryKey, data, width, height, color, style, rowStyle, headersStyle,
  margin, padding, rowGap, colGap
}: {
  primaryKey: string
  data: { [index: string]: ReactNode }[]
  width?: string
  height?: string
  color?: string
  style?: CSS.Properties
  rowStyle?: CSS.Properties
  headersStyle?: CSS.Properties
  margin?: string
  padding?: string
  rowGap?: string
  colGap?: string
}) {
  const keys = data.length > 0 ? Object.keys(data[0]) : []
  const classes = useJSS({ 
    primaryKey: primaryKey.replace(' ', '-'), 
    columns: keys.filter(key => key !== primaryKey).map(key => key.replace(' ', '-')), 
    width, height, color, margin, padding, rowGap, colGap
  })
  return (
    <div className={classes.DataTable} style={style}>
      <DataRow
        row={1}
        style={headersStyle ? headersStyle : rowStyle}
        dataset={objFrom2Arrays(keys, keys.map(key => (
          <Text text={key} bold={key === primaryKey} />
        )))}
      />
      <Map
        array={data}
        map={(dataset, index) => (
          <DataRow 
            dataset={dataset} 
            row={index + 2} 
            key={index} 
            style={rowStyle} 
          />
        )}
      />
    </div>
  )
}

export default DataTable