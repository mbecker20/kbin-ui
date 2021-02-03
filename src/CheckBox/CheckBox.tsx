import React, { useState } from 'react'
import UncontrolledCheckBox from './UncontrolledCheckBox'
import CSS from 'csstype'

function CheckBox({ onChecked, onUnChecked, style }: {
  onChecked?: () => void
  onUnChecked?: () => void
  style?: CSS.Properties
}) {
  const [checked, setChecked] = useState(false)
  return (
    <UncontrolledCheckBox 
      checked={checked}
      onClick={() => {
        if (checked) {
          if (onUnChecked) onUnChecked()
        } else {
          if (onChecked) onChecked()
        }
        setChecked(!checked)
      }}
      style={style}
    />
  )
}

export default CheckBox