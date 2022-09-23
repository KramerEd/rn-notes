import React, { FC } from 'react'
import Pressable, { PressableProps } from '@/atoms/pressable'
import { Platform } from 'react-native'
import {
  backgroundColor,
  BackgroundColorProps,
  backgroundColorShorthand,
  BackgroundColorShorthandProps,
  border,
  BorderProps,
  composeRestyleFunctions,
  opacity,
  OpacityProps,
  ResponsiveValue,
  useResponsiveProp,
  useRestyle,
  useTheme
} from '@shopify/restyle'
import { Theme } from '@/themes'

type RestyleProps = BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  BorderProps<Theme> &
  OpacityProps<Theme>

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  backgroundColorShorthand,
  backgroundColor,
  border,
  opacity
])

interface TouchableProps extends PressableProps {
  pressed?: RestyleProps
  rippleColor?: ResponsiveValue<keyof Theme['colors'], Theme>
  rippleBorderless?: boolean
}

const Touchable = ({
  pressed,
  rippleBorderless,
  rippleColor,
  style,
  ...rest
}: TouchableProps) => {
  const { style: pressedStyle } = pressed
    ? useRestyle(restyleFunctions, pressed)
    : { style: undefined }
  const theme = useTheme<Theme>()
  const rippleColorProp = rippleColor && useResponsiveProp(rippleColor)
  const rippleColorValue = rippleColorProp && theme.colors[rippleColorProp]

  return (
    <Pressable
      {...rest}
      android_ripple={{ color: rippleColorValue, borderless: rippleBorderless }}
      // @ts-ignore
      style={({ pressed: isPressed }) =>
        isPressed ? [style, pressedStyle] : style
      }
    ></Pressable>
  )
}

export const TouchableOpacity: FC<TouchableProps> = props => {
  return (
    <Touchable
      rippleColor={'$foreground'}
      {...props}
      pressed={{ opacity: Platform.select({ ios: 0.6 }) }}
    ></Touchable>
  )
}

export default Touchable
