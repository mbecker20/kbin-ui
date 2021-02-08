import React, { ReactNode } from 'react'
import FlexCol from '../Flex/FlexCol'
import IfElse from '../IfElse'
import LabelledItems from '../LabelledItems/LabelledItems'
import Map from '../Map'
import ListItem from './ListItem'
import CSS from 'csstype'
import Conditional from '../Conditional'
import Text from '../Text/Text'

function List<T>({ array, map, noItemsText, selectedIndex, label, style, itemStyle }: {
  array: T[]
  map: (t: T, i: number) => ReactNode
  noItemsText: string
  selectedIndex?: number
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
          <Conditional showIf={array.length === 0}>
            <Text text={noItemsText} style={{ alignSelf: 'center' }} />
          </Conditional>
          <FlexCol alignItems='stretch' style={style}>
            <Map
              array={array}
              map={(t, i) => (
                <ListItem 
                  isSelected={selectedIndex ? i === selectedIndex : i % 2 === 0} 
                  style={itemStyle}
                >
                  {map(t, i)}
                </ListItem>
              )}
            />
          </FlexCol>
        </LabelledItems>
      }
      showElse={
        <FlexCol alignItems='stretch'>
          <Map
            array={array}
            map={(t, i) => (
              <ListItem 
                isSelected={selectedIndex ? i === selectedIndex : i % 2 === 0} 
                style={itemStyle}
              >
                {map(t, i)}
              </ListItem>
            )}
          />
        </FlexCol>
      }
    />
  )
}

export default List