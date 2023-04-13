import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import BottomSheet from '@gorhom/bottom-sheet'
import { useDispatch, useSelector } from 'react-redux'
import { clearModal } from '../../redux/actions/modal'
import BuyNow from './BuyModal'
import QA from './QAModal'
import Options from './OptionsModal'
import Details from './DetailsModal'

const Modal = () => {
    const modalState = useSelector(state => state.modal)
    const bottomSheetRef = useRef(null)
    const dispatch = useDispatch();

    console.log(modalState)
    
    useEffect(() => {
        if(modalState.open && bottomSheetRef.current){
            bottomSheetRef.current.expand()
        }
    }, [modalState])
    

    const renderContent = () => {
        switch(modalState.modalType){
            case 0:
                return (<QA post = {modalState.data1} user={modalState.data2}/>)
            case 1:
                return (<BuyNow post = {modalState.data1} user={modalState.data2}/>)
            case 2:
                return (<Details post = {modalState.data1} user={modalState.data2}/>)
            case 3:
                return (<Options post = {modalState.data1} user={modalState.data2}/>)

            default:
                return (<></>)
        }
    }
    
    const onClose = () => {
        dispatch(clearModal())
    }
  return (
    <BottomSheet enabledGestureInteraction
    enabledBottomInitialAnimation
    ref = {bottomSheetRef}
    snapPoints={["70%"]}
    index = {-1}
    handleHeight={40}
    onClose={onClose}
    enablePanDownToClose>
    {renderContent()}
    </BottomSheet>
  )
}

export default Modal