import React from 'react'
import { Box, Text } from '@/atoms'
import WebView from 'react-native-webview'

const WebviewScreen = () => {
  return (
    <Box flex={1}>
      <WebView
        source={{
          uri: 'https://github.com/facebook/react-native'
        }}
      />
    </Box>
  )
}

export default WebviewScreen
