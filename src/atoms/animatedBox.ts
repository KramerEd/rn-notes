import { Theme } from '@/themes'
import { ViewProps } from 'react-native'
import Animated, { AnimateProps } from 'react-native-reanimated'
import { createBox } from '@shopify/restyle'
import React from 'react'

const AnimatedBox = createBox<Theme, AnimateProps<ViewProps>>(Animated.View)

export type AnimatedBoxProps = React.ComponentProps<typeof AnimatedBox>

export default AnimatedBox
