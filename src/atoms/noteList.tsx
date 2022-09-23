import React, { FC, useCallback } from 'react'
import { createBox } from '@shopify/restyle'
import { Theme } from '@/themes'
import { Animated, FlatListProps } from 'react-native'
import { Note } from '@/types/modelsTypes'
import FlatList = Animated.FlatList
import NoteListItem from '@/components/noteListItem'
import NOTES from '@/fixtures/notes'

const StyledFlatList = createBox<Theme, FlatListProps<Note>>(FlatList)

interface NoteListProps {}

const NoteList: FC<NoteListProps> = () => {
  const renderItem = useCallback(({ item }) => <NoteListItem {...item} />, [])

  return (
    <StyledFlatList
      contentInsetAdjustmentBehavior={'automatic'}
      data={NOTES}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      width={'100%'}
    />
  )
}
export default NoteList
