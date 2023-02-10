import { View, Text, ScrollView, TouchableOpacity, Image} from 'react-native'
import React from 'react'

const Sublists = ({url1, url2}) => {
  return (
    <View className= "mt-3" >
    <View className = "flex-row ">
    <TouchableOpacity className = "flex-row flex-1 relative mr-3"> 
        <Image  source={{
            uri: url1
        }} 
        className ="h-80 w-44 rounded-2xl"/>
    </TouchableOpacity>

    <TouchableOpacity className = "relative mr-3"> 
        <Image source={{
            uri: url2
        }} 
        className ="h-80 w-44 rounded-2xl"/>
    </TouchableOpacity>
    </View>
    </View>
  )
}

export default Sublists