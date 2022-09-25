import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react'
import RNBottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import BottomSheet from '@gorhom/bottom-sheet'
import { Box, Text } from '@/atoms/index'

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
        <Box justifyContent={'center'} alignItems={'center'}>
          <Text fontWeight={'bold'}>Move</Text>
        </Box>
      </BottomSheet>
    )
  }
)

type MoveNoteSheet = MoveNoteSheetHandle

export default MoveNoteSheet
