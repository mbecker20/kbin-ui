import { createUseStyles } from 'react-jss'
import { sizes } from '../theme'

const useJSS = createUseStyles({
  LabelSearch: {
    alignSelf: 'flex-end',
    margin: ({ searchMargin }) => searchMargin ? searchMargin : sizes.label.searchMargin,
    minWidth: ({ searchMinWidth }) => searchMinWidth ? searchMinWidth : sizes.label.searchMinWidth,
    maxWidth: ({ searchMaxWidth }) => searchMaxWidth ? searchMaxWidth : sizes.label.searchMaxWidth
  },
})

export default useJSS