import { View, Text } from 'react-native'
import React from 'react'
import BottomSheet from '@gorhom/bottom-sheet'
import { useSelector } from 'react-redux'

const BuyModal = () => {
    const modalState = useSelector(state => state.modal)
    console.log(modalState)
  return (

    <BottomSheet
    snapPoints={["50%"]}
    index = {-1}
    handleHeight={40}
    enablePanDownToClose>
    </BottomSheet>
  )
}

export default BuyModal