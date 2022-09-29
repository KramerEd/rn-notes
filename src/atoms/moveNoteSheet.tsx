import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef
} from 'react'
import RNBottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import BottomSheet from '@gorhom/bottom-sheet'
import { Box, Text } from '@/atoms/index'
import bottomSheet from '@/atoms/bottomSheet'
import BookList from '@/components/BookList'

interface MoveNoteSheetProps {
  onClose?: () => void
}
interface MoveNoteSheetHandle {
  show: () => void
}

const MoveNoteSheet = forwardRef<MoveNoteSheetHandle, MoveNoteSheetProps>(
  ({ onClose }, ref) => {
    const refBottomSheet = useRef<RNBottomSheet>(null)
    const snapPoints = useMemo(() => ['60%', '90%'], [])

    useImperativeHandle(ref, () => ({
      show: () => {
        const { current: bottomSheet } = refBottomSheet
        if (bottomSheet) {
          bottomSheet.snapToIndex(0)
        }
      }
    }))
    const handlePressItem = useCallback((_bookId: string) => {
      const { current: bottomSheet } = refBottomSheet
      if (bottomSheet) {
        bottomSheet.close()
      }
    }, [])

    return (
      <BottomSheet
        snapPoints={snapPoints}
        ref={refBottomSheet}
        index={-1}
        detached
        bottomInset={46}
        enablePanDownToClose
        style={{ marginHorizontal: 12 }}
        onClose={onClose}
        backdropComponent={props => (
          <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
          />
        )}
      >
        <BookList
          inBottomSheet
          onPressItem={handlePressItem}
          color="$foreground"
          headerComponent={() => (
            <Box justifyContent={'center'} alignItems={'center'}>
              <Text fontWeight={'bold'}>Move</Text>
            </Box>
          )}
        />
      </BottomSheet>
    )
  }
)

type MoveNoteSheet = MoveNoteSheetHandle

export default MoveNoteSheet
