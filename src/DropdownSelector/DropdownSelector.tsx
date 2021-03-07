import React, { Fragment, useRef, useState } from 'react'
import useJSS from './style'
import CSS from 'csstype'
import Conditional from '../Conditional'
import FlexRow from '../Flex/FlexRow'
import Text from '../Text/Text'
import Map from '../Map'
import FlexCol from '../Flex/FlexCol'

function DropdownSelector(props: {
  selection: string
  selections: string[]
  onSelect?: (selection: string) => void
  selectionToOption?: (selection: string) => string
  className?: string
  style?: CSS.Properties
  optionStyle?: CSS.Properties
  margin?: string
  padding?: string
  alignSelf?: string
  width?: string
  maxWidth?: string
  minWidth?: string
  height?: string
  maxHeight?: string
  minHeight?: string
  alignItems?: string
}) {
  const classes = useJSS({})
  const {
    selection, selections, selectionToOption, onSelect, optionStyle
  } = props
  return (
    <FlexCol
      {...props}
    >
      <select value={selectionToOption ? selectionToOption(selection) : selection}>
        <Map
          array={selections}
          map={_selection => (
            <option 
              style={optionStyle} 
              onClick={e => {if (onSelect) onSelect(_selection)}}
            >
              {selectionToOption ? selectionToOption(_selection) : _selection}
            </option>
          )}
        />
      </select>
    </FlexCol>
  )
}

export default DropdownSelector