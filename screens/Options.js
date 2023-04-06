import { View, Text, SafeAreaView} from 'react-native'
import React from 'react'
import NavBarGeneral from '../components/general/navbar'


const Options = () => {
  return (
    <SafeAreaView style={{flex: 1,
        backgroundColor: 'white'}}>
        <NavBarGeneral title = 'Options'/>
    </SafeAreaView>
  )
}

export default Options