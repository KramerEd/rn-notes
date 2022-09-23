import React, { FC } from 'react'
import { Box, Text } from '@/atoms'
import { Note } from '@/types/modelsTypes'

interface ListItemProps extends Note {}

const NoteListItem: FC<ListItemProps> = props => {
  return (
    <Box bg={'$background'}>
      <Box bg={'$background'} px={'lg'} py={'sm'}>
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
      </Box>
    </Box>
  )
}

export default NoteListItem
