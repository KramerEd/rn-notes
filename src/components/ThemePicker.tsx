import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef
} from 'react'
import { Box, Text } from '@/atoms'
import RNBottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList
} from '@gorhom/bottom-sheet'
import ThemePickerItem from '@/components/ThemePickerItem'
import { ThemeMeta, themes } from '@/themes'
import BottomSheet from '@/atoms/bottomSheet'
import { useMachine } from '@xstate/react'
import themeMachine from '@/states/theme'
interface ThemePickerProps {}
interface ThemePickerHandle {
  show: () => void
}

const ThemePicker = forwardRef<ThemePickerHandle, ThemePickerProps>(
  (props, ref) => {
    const refBottomSheet = useRef<RNBottomSheet>(null)
    const snapPoints = useMemo(() => ['40%', '80%'], [])

    useImperativeHandle(ref, () => ({
      show: () => {
        const { current: bottomSheet } = refBottomSheet
        if (bottomSheet) {
          bottomSheet.snapToIndex(0)
        }
      }
    }))

    const renderThemeItem = useCallback(({ item }) => {
      return <ThemePickerItem theme={item} />
    }, [])

    return (
      <BottomSheet
        ref={refBottomSheet}
        index={-1}
        snapPoints={snapPoints}
        backdropComponent={props => (
          <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
          />
        )}
        detached
        bottomInset={46}
        enablePanDownToClose
        style={{ marginHorizontal: 12 }}
      >
        <BottomSheetFlatList
          ListHeaderComponent={() => (
            <Box p="lg" alignItems="center">
              <Text fontWeight="bold">Change Theme</Text>
            </Box>
          )}
          data={themes}
          keyExtractor={(t: ThemeMeta) => t.id}
          renderItem={renderThemeItem}
        />
      </BottomSheet>
    )
  }
)

export default ThemePicker
