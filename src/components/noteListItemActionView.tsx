import React, { FC } from 'react'
import { SharedValue, useAnimatedStyle } from 'react-native-reanimated'
import { AnimatedBox, Box } from '@/atoms'
import FeatherIcon from './icon'

interface NoteListItemActionViewProps {
  progress: Readonly<SharedValue<number>>
}

const NoteListItemActionView: FC<NoteListItemActionViewProps> = ({
  progress
}) => {
  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ scale: progress.value }]
  }))
  return (
    <Box
      flex={1}
      bg={'$primary'}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'flex-end'}
      pr={'xl'}
    >
      <AnimatedBox
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'center'}
        style={iconStyle}
      >
        <FeatherIcon name={'folder'} color={'white'} size={18} />
        <FeatherIcon name={'arrow-right'} color={'white'} size={12} />
      </AnimatedBox>
    </Box>
  )
}

export default NoteListItemActionView
