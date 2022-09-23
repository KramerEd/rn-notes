import React, { FC } from 'react'
import { Box } from '@/atoms/index'
import { BoxProps } from '@/atoms/box'

const Container: FC<BoxProps> = props => {
  return (
    <Box {...props} flex={1} backgroundColor={'$background'}>
      {props.children}
    </Box>
  )
}

export default Container
