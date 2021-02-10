import React, { ReactNode } from 'react'
import FlexCol from '../Flex/FlexCol'
import FlexRow from '../Flex/FlexRow'
import IfElse from '../IfElse'
import Text from '../Text/Text'
import TextInputOnly from '../TextInput/TextInputOnly'
import { sizes } from '../theme'
import useJSS from './style'

function Label({ 
  title, TitleComponent, ToTitleRight, search, setSearch,
  titleSize, titleMargin, searchMinWidth, searchMaxWidth, 
  searchMargin
}: {
  title?: string
  TitleComponent?: ReactNode
  ToTitleRight?: ReactNode
  search?: string
  setSearch?: (search: string) => void
  titleSize?: string
  titleMargin?: string
  searchMinWidth?: string
  searchMaxWidth?: string
  searchMargin?: string
}) {
  const classes = useJSS({ searchMinWidth, searchMaxWidth, searchMargin })
  return (
    <FlexCol>
      <FlexRow>
        <IfElse
          showIf={TitleComponent ? true : false}
          show={TitleComponent}
          showElse={
            <Text
              text={title ? title : 'label'}
              fontSize={titleSize ? titleSize : sizes.text.medium}
              margin={titleMargin ? titleMargin : sizes.label.titleMargin}
            />
          }
        />
        {ToTitleRight}
      </FlexRow>
      <TextInputOnly
        className={classes.LabelSearch}
        value={search}
        onChange={_search => {
          if (setSearch) setSearch(_search)
        }}
        placeholder='search'
      />
    </FlexCol>
  )
}

export default Label