import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryDesign = ({imgurl, title}) => {
  return (
    <TouchableOpacity className = "relative mr-3"> 
        <Image source={{
            uri: imgurl
        }} 
        className ="h-20 w-20 rounded-xl "/>
      <Text className = "absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryDesign