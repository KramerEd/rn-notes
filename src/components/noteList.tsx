import React, { FC, useCallback } from 'react'
import { createBox } from '@shopify/restyle'
import { Theme } from '@/themes'
import {
  FlatListProps,
  NativeScrollEvent,
  NativeSyntheticEvent
} from 'react-native'
import { Note } from '@/types/modelsTypes'
import NoteListItem from '@/components/noteListItem'
import NOTES from '@/fixtures/notes'
import Animated, { AnimateProps } from 'react-native-reanimated'
import { Box } from '@/atoms'

const StyledFlatList = createBox<Theme, AnimateProps<FlatListProps<Note>>>(
  Animated.FlatList
)

interface NoteListProps {
  contentInsetTop: number
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
}

const NoteList: FC<NoteListProps> = ({ onScroll, contentInsetTop }) => {
  const renderItem = useCallback(({ item }) => <NoteListItem {...item} />, [])

  return (
    <StyledFlatList
      contentInsetAdjustmentBehavior={'automatic'}
      data={NOTES}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      width={'100%'}
      onScroll={onScroll}
      scrollEventThrottle={16}
      ListHeaderComponent={<Box width={'100%'} height={contentInsetTop}></Box>}
    />
  )
}
export default NoteList
