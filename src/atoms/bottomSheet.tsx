import React, { forwardRef } from 'react'
import RNBottomSheet, { BottomSheetProps } from '@gorhom/bottom-sheet'
import { ColorProps, useTheme } from '@shopify/restyle'
import { Theme } from '@/themes'

type Props = BottomSheetProps & ColorProps<Theme>

const BottomSheet = forwardRef<RNBottomSheet, Props>(({ ...rest }, ref) => {
  const theme = useTheme<Theme>()
  const bgColor = theme.colors['$background']
  const handleColor = theme.colors['$foreground']

  return (
    <RNBottomSheet
      {...rest}
      ref={ref}
      handleIndicatorStyle={{ backgroundColor: handleColor, opacity: 0.8 }}
      backgroundStyle={{
        backgroundColor: bgColor
      }}
    />
  )
})

export default BottomSheet
