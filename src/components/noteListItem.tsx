import React, { FC, useCallback } from 'react'
import { Box, Text, TouchableOpacity } from '@/atoms'
import { Note } from '@/types/modelsTypes'
import NoteListItemActionView from '@/components/noteListItemActionView'
import SwipeableView from '@/components/SwipeableView'

interface ListItemProps extends Note {
  onPress: (noteId: string) => void
  onSwipeLeft?: (noteId: string, done: () => void) => void
}

const NoteListItem: FC<ListItemProps> = props => {
  const { onPress, onSwipeLeft, id } = props

  const handlePress = useCallback(() => {
    onPress(id)
  }, [onPress, id])

  const handleSwipeLeft = useCallback(done => {
    onSwipeLeft && onSwipeLeft(id, done)
  }, [])

  const renderBackView = useCallback(
    ({ progress }) => <NoteListItemActionView progress={progress} />,
    []
  )

  return (
    <SwipeableView onSwipeLeft={handleSwipeLeft} backView={renderBackView}>
      <Box bg={'$background'}>
        <TouchableOpacity px={'lg'} py={'sm'} onPress={handlePress}>
          <Text
            ellipsizeMode={'tail'}
            numberOfLines={1}
            fontWeight={'bold'}
            mb={'xs'}
          >
            {props.title}
          </Text>
          <Text
            ellipsizeMode={'tail'}
            opacity={0.7}
            numberOfLines={2}
            fontSize={14}
          >
            {props.body}
          </Text>
        </TouchableOpacity>
      </Box>
    </SwipeableView>
  )
}

export default NoteListItem
