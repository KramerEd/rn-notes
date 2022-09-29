import React, { useState, useRef } from 'react'
import { TextInput } from 'react-native'
import { Box, Text, TouchableOpacity } from '@/atoms'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/types/navTypes'

type FormScreenProps = NativeStackScreenProps<RootStackParamList, 'Webview'>

const FormScreen = ({ navigation }: FormScreenProps) => {
  const [cardNumber, setCardNumber] = useState()
  const [card, setCard] = useState('')

  const inputCard = useRef<TextInput>(null)

  const handleChange = (e: any) => {
    const cardValue = e
      .replace(/\D/g, '')
      .match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/)
    if (card.length >= 20) return

    setCard(
      !cardValue[2]
        ? cardValue[1]
        : `${cardValue[1]}-${cardValue[2]}${`${
            cardValue[3] ? `-${cardValue[3]}` : ''
          }`}${`${cardValue[4] ? `-${cardValue[4]}` : ''}`}`
    )

    const numbers = e.replace(/(\D)/g, '')
    setCardNumber(numbers)
  }

  const handlePress = () => {
    if (String(cardNumber).length < 16) return
    navigation.navigate('Webview', {})
  }

  return (
    <Box flex={1} justifyContent={'center'} alignItems={'center'} p={'xxl'}>
      <Box flex={1} mt={'xxl'}>
        <Text fontSize={25}>Type your credit card!</Text>
      </Box>
      <Box flex={1} width={'100%'} borderRadius={'xs'}>
        <TextInput
          style={{
            fontSize: 20,
            borderRadius: 10,
            borderWidth: 2,
            padding: 10,
            textAlign: 'center'
          }}
          ref={inputCard}
          keyboardType={'numeric'}
          onChangeText={handleChange}
          value={card}
          autoFocus
        />
      </Box>
      <TouchableOpacity flex={1} onPress={handlePress}>
        <Box bg={'black'} px={'xxl'} py={'lg'} borderRadius={'md'}>
          <Text color={'white'}>Send!</Text>
        </Box>
      </TouchableOpacity>
    </Box>
  )
}

export default FormScreen
