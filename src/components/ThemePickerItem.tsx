import React, { FC, useCallback, useEffect } from 'react'
import { ThemeMeta } from '@/themes'
import { Box, Text, TouchableOpacity } from '@/atoms'
import { useInterpret, useMachine } from '@xstate/react'
import FeatherIcon from '@/components/icon'
import themeMachine from '@/states/theme'

interface ThemePickerProps {
  theme: ThemeMeta
}

const ThemePickerItem: FC<ThemePickerProps> = ({ theme }) => {
  const [state, send] = useMachine(themeMachine)

  const handlePress = useCallback(() => {
    send(theme.id.toUpperCase())
  }, [])

  return (
    <TouchableOpacity
      minHeight={44}
      flexDirection={'row'}
      alignItems={'center'}
      px={'lg'}
      onPress={handlePress}
    >
      <Box
        alignItems={'center'}
        justifyContent={'center'}
        height={32}
        pr={'sm'}
      >
        <Text>{theme.name}</Text>
      </Box>
      {state.matches(theme.id) ? (
        <FeatherIcon size={20} name="check" color="$primary" />
      ) : null}
    </TouchableOpacity>
  )
}

export default ThemePickerItem
