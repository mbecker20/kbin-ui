import React, { ReactNode } from 'react'
import FlexCol from '../Flex/FlexCol'
import IfElse from '../IfElse'
import LabelledItems from '../LabelledItems/LabelledItems'
import Map from '../Map'
import ListItem from './ListItem'
import CSS from 'csstype'

function List({ children, selectedIndex, label, style, itemStyle }: {
  children: ReactNode[],
  selectedIndex?: number,
  label?: ReactNode
  style?: CSS.Properties
  itemStyle?: CSS.Properties
}) {
  return (
    <IfElse
      showIf={label ? true : false}
      show={
        <LabelledItems
          label={label}
        >
          <FlexCol alignItems='stretch' style={style}>
            <Map
              array={children}
              map={(child, i) => (
                <ListItem 
                  isSelected={selectedIndex ? i === selectedIndex : i % 2 === 0} 
                  style={itemStyle}
                >
                  {child}
                </ListItem>
              )}
            />
          </FlexCol>
        </LabelledItems>
      }
      showElse={
        <FlexCol alignItems='stretch'>
          <Map
            array={children}
            map={(child, i) => (
              <ListItem 
                isSelected={selectedIndex ? i === selectedIndex : i % 2 === 0} 
                style={itemStyle}
              >
                {child}
              </ListItem>
            )}
          />
        </FlexCol>
      }
    />
  )
}

export default List