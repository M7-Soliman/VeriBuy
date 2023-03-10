import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import NavBarGeneral from '../components/general/navbar'

const CartScreen = () => {
  return (
    <SafeAreaView>
      <NavBarGeneral title = "Cart"></NavBarGeneral>
    </SafeAreaView>
  )
}

export default CartScreen