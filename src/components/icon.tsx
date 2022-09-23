import React, { FC } from 'react'
import { Theme } from '@/themes'
import { ColorProps, useResponsiveProp, useTheme } from '@shopify/restyle'
import Feather from 'react-native-vector-icons/Feather'

export type IconProps = React.ComponentProps<typeof Feather>

type FeatherIconProps = Omit<IconProps, 'color'> & ColorProps<Theme>

const FeatherIcon: FC<FeatherIconProps> = ({
  color = '$foreground',
  ...rest
}) => {
  const theme = useTheme<Theme>()
  const colorProp = useResponsiveProp(color)
  const vColor = theme.colors[colorProp || '$foreground']
  return <Feather {...rest} color={vColor} />
}

export default FeatherIcon
