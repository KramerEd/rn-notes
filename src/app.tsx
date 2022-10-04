import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Navigations } from '@/navs'
import { ThemeProvider } from '@shopify/restyle'
import { useMachine } from '@xstate/react'
import solarizedDark from '@/themes/solarized-dark'
import nord from '@/themes/nord'
import dark from '@/themes/dark'
import light from '@/themes/light'
import themeMachine from '@/states/theme'

const App = () => {
  const [state] = useMachine(themeMachine)

  const themePicker = () => {
    if (state.matches('light')) return light
    if (state.matches('dark')) return dark
    if (state.matches('nord')) return nord
    if (state.matches('solarizedDark')) return solarizedDark
    return
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={themePicker()}>
        <Navigations />
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App
