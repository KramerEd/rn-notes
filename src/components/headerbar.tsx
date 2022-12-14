import React, { FC } from 'react'
import { AnimatedBoxProps } from '@/atoms/animatedBox'
import { AnimatedBox, Bar } from '@/atoms'

const HeaderBar: FC<AnimatedBoxProps> = ({ children, ...rest }) => {
  return (
    <AnimatedBox position={'absolute'} top={0} left={0} right={0} {...rest}>
      <Bar
        variant={'headerBar'}
        flexDirection={'row'}
        alignItems={'center'}
        mx={'lg'}
        my={'md'}
        px={'sm'}
        minHeight={44}
      >
        {children}
      </Bar>
    </AnimatedBox>
  )
}

export default HeaderBar
