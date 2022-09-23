import React, { useCallback } from 'react'
import { Box, Container, Text, TouchableOpacity } from '@/atoms'
import NoteList from '@/components/noteList'
import HeaderBar from '@/components/headerbar'
import FeatherIcon from '@/components/icon'
import { CompositeScreenProps } from '@react-navigation/native'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { HomeDrawerParamList, RootStackParamList } from '@/types/navTypes'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useStickyHeader } from '@/hooks/useStickyHeader'

type MainScreenProps = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>

const MainScreen = ({ navigation }: MainScreenProps) => {
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

  return (
    <Container alignItems={'center'} justifyContent={'center'}>
      <NoteList onScroll={handleScroll} contentInsetTop={headerBarHeight} />
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
    </Container>
  )
}

export default MainScreen
