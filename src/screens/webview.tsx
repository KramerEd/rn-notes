import React from 'react'
import WebView from 'react-native-webview'
import { ActivityIndicator, SafeAreaView } from 'react-native'

function LoadingIndicatorView() {
  return <ActivityIndicator color="#009b88" size="large" />
}
const runFirst = `
      document.body.style.backgroundColor = 'green';
      setTimeout(function() { window.alert(JSON.stringify([
             'Javascript',
             'React', 
             'React Naitve',
             'graphql',
             'Typescript',
             'Webpack',
             'Node js',
          ])) }, 1000);
      true;
    `
const WebviewScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{
          uri: 'https://github.com/facebook/react-native'
        }}
        renderLoading={LoadingIndicatorView}
        startInLoadingState={true}
        injectedJavaScript={runFirst}
      />
    </SafeAreaView>
  )
}

export default WebviewScreen
