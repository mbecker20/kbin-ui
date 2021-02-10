import React, { ReactNode } from 'react'
import FlexCol from './Flex/FlexCol'
import FlexRow from './Flex/FlexRow'
import IfElse from './IfElse'
import Text from './Text/Text'
import TextInputOnly from './TextInput/TextInputOnly'
import { sizes } from './theme'

function Label({ 
  title, TitleComponent, ToTitleRight, search, setSearch,
  titleSize
}: {
  title?: string
  TitleComponent?: ReactNode
  ToTitleRight?: ReactNode
  search?: string
  setSearch?: (search: string) => void
  titleSize?: string
}) {
  return (
    <FlexCol>
      <FlexRow>
        <IfElse
          showIf={TitleComponent ? true : false}
          show={TitleComponent}
          showElse={
            <Text
              text={title ? title : 'repos'}
              fontSize={titleSize ? titleSize : sizes.text.medium}
              margin='.1em .2em'
            />
          }
        />
        {ToTitleRight}
      </FlexRow>
      <TextInputOnly
        value={search}
        onChange={_search => {
          if (setSearch) setSearch(_search)
        }}
        style={{ alignSelf: 'flex-end', margin: '.2em', minWidth: '25%', maxWidth: '5em' }}
        placeholder='search'
      />
    </FlexCol>
  )
}

export default Label