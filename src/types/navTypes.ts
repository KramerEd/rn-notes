import { NavigatorScreenParams } from '@react-navigation/native'

export type HomeDrawerParamList = {
  Main: {}
}
export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeDrawerParamList>
  Form: {}
  Detail: {
    noteId: string
  }
}
