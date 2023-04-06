import { View, Text, SafeAreaView} from 'react-native'
import React from 'react'
import NavBarGeneral from '../components/general/navbar'

const Checkout = () => {
  return (
    <SafeAreaView style={{flex: 1,
        backgroundColor: 'white'}}>
        <NavBarGeneral title = 'Checkout!'/>
    </SafeAreaView>
  )
}

export default Checkout