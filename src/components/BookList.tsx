import React, { FC, useCallback } from 'react'
import { Theme } from '@/themes'
import { ColorProps, createBox } from '@shopify/restyle'
import { FlatList, FlatListProps } from 'react-native'
import { Book } from '@/types/modelsTypes'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import BOOKS from '@/fixtures/books'
import BookListItem from '@/components/bookListItem'

const StyledFlatList = createBox<Theme, FlatListProps<Book>>(FlatList)
const StyledBottomSheetFlatList = createBox<Theme, FlatListProps<Book>>(
  BottomSheetFlatList
)
type BookListProps = {
  inBottomSheet?: boolean
  onPressItem: (bookId: string) => void
  headerComponent?: React.FC<any>
} & ColorProps<Theme>

const BookList: FC<BookListProps> = ({
  onPressItem,
  headerComponent,
  inBottomSheet,
  color
}) => {
  const renderItem = useCallback(({ item }) => {
    return <BookListItem {...item} onPress={onPressItem} color={color} />
  }, [])
  const ListComponent = inBottomSheet
    ? StyledBottomSheetFlatList
    : StyledFlatList

  return (
    <ListComponent
      data={BOOKS}
      renderItem={renderItem}
      contentInsetAdjustmentBehavior={'automatic'}
      scrollEventThrottle={6}
      keyExtractor={item => item.id}
      width={'100%'}
      ListHeaderComponent={headerComponent}
    />
  )
}

export default BookList
