import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/types/navTypes'
import { Box, Text, TouchableOpacity } from '@/atoms'

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'>

const DetailScreen = ({ navigation, route }: DetailScreenProps) => {
  return (
    <Box flex={1} alignItems={'center'} justifyContent={'center'}>
      <Text>Detail Screen</Text>
      <Text m={'lg'}>{JSON.stringify(route.params)}</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ padding: 12 }}
      >
        <Text>Go back</Text>
      </TouchableOpacity>
    </Box>
  )
}

export default DetailScreen
