import * as React from 'react'
import { Container } from '@/atoms'
import NoteList from '@/atoms/noteList'

const MainScreen = () => {
  return (
    <Container alignItems={'center'} justifyContent={'center'}>
      <NoteList />
    </Container>
  )
}

export default MainScreen
