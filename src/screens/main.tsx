import React, { useCallback, useRef, useState } from 'react'
import { Box, Container, Text, TouchableOpacity } from '@/atoms'
import NoteList from '@/components/noteList'
import HeaderBar from '@/components/headerbar'
import FeatherIcon from '@/components/icon'
import { CompositeScreenProps } from '@react-navigation/native'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { HomeDrawerParamList, RootStackParamList } from '@/types/navTypes'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useStickyHeader } from '@/hooks/useStickyHeader'
import StatusBar from '@/components/StatusBar'
import MoveNoteSheet from '@/atoms/moveNoteSheet'

type MainScreenProps = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>

const MainScreen = ({ navigation }: MainScreenProps) => {
  const refMoveNoteSheet = useRef<MoveNoteSheet>(null)
  const [noteListItem, setNoteListItem] = useState<(() => void) | null>(null)
  const {
    handleScroll,
    handleNoteListLayout,
    headerBarStyle,
    headerBarHeight
  } = useStickyHeader()
  const handleSidebarToggle = useCallback(
    () => navigation.toggleDrawer(),
    [navigation]
  )

  const handleNoteListItemPress = useCallback((noteId: string) => {
    navigation.navigate('Detail', {
      noteId
    })
  }, [])

  const handleNoteListItemSwipeLeft = useCallback(
    (_noteId: string, conceal: () => void) => {
      const { current: menu } = refMoveNoteSheet
      if (menu) {
        menu.show()
        setNoteListItem(() => conceal)
      }
    },
    []
  )

  const handleMoveNoteSheetClose = useCallback(() => {
    noteListItem && noteListItem()
    setNoteListItem(null)
  }, [noteListItem])

  return (
    <Container alignItems={'center'} justifyContent={'center'}>
      <StatusBar />
      <NoteList
        onScroll={handleScroll}
        contentInsetTop={headerBarHeight}
        onItemPress={handleNoteListItemPress}
        onItemSwipeLeft={handleNoteListItemSwipeLeft}
      />
      <HeaderBar style={headerBarStyle} onLayout={handleNoteListLayout}>
        <TouchableOpacity
          m={'xs'}
          p={'xs'}
          rippleBorderless
          onPress={handleSidebarToggle}
        >
          <FeatherIcon name={'menu'} size={22} />
        </TouchableOpacity>
        <Box flex={1} alignItems={'center'}>
          <Text fontWeight={'bold'}>All notes</Text>
        </Box>
        <TouchableOpacity m={'xs'} p={'xs'} rippleBorderless>
          <FeatherIcon name={'more-vertical'} size={22} />
        </TouchableOpacity>
      </HeaderBar>
      <MoveNoteSheet
        ref={refMoveNoteSheet}
        onClose={handleMoveNoteSheetClose}
      />
    </Container>
  )
}

export default MainScreen
