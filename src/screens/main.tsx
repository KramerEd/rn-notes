import React from 'react'
import { Box, Container, Text, TouchableOpacity } from '@/atoms'
import NoteList from '@/components/noteList'
import HeaderBar from '@/components/headerbar'
import FeatherIcon from '@/components/icon'

const MainScreen = () => {
  return (
    <Container alignItems={'center'} justifyContent={'center'}>
      <NoteList />
      <HeaderBar>
        <TouchableOpacity m={'xs'} p={'xs'} rippleBorderless>
          <FeatherIcon name={'menu'} size={22} />
        </TouchableOpacity>
        <Box flex={1} alignItems={'center'}>
          <Text>All notes</Text>
        </Box>
        <TouchableOpacity m={'xs'} p={'xs'} rippleBorderless>
          <FeatherIcon name={'more-vertical'} size={22} />
        </TouchableOpacity>
      </HeaderBar>
    </Container>
  )
}

export default MainScreen
