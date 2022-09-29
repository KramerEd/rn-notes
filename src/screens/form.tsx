import React, { useState, useRef } from 'react'
import { TextInput } from 'react-native'
import { Box, Text } from '@/atoms'

const FormScreen = () => {
  const [cardNumber, setCardNumber] = useState()
  const [card, setCard] = useState('')

  const inputCard = useRef<TextInput>(null)

  const handleChange = e => {
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
    console.log(card.length)
  }

  return (
    <Box>
      <TextInput
        ref={inputCard}
        keyboardType={'numeric'}
        onChangeText={handleChange}
        value={card}
        autoFocus
      />
      <Text>{card}</Text>
    </Box>
  )
}

export default FormScreen
