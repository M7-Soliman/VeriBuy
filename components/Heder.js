import { View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'


import { UserIcon as Uout} from "react-native-heroicons/outline";
import { UserIcon as Usol} from "react-native-heroicons/solid";

import { ShoppingCartIcon as Cartout} from "react-native-heroicons/outline";
import { ShoppingCartIcon as Cartsol} from "react-native-heroicons/solid";

import { MagnifyingGlassIcon  as Searchout} from "react-native-heroicons/outline";



import React from 'react'

const Header = () => {
  const navigation = useNavigation();
  return (
    <View className = "flex-row pb-3 items-center mx-4 space-x-5">
        <View className="flex-row flex-1 space-x-2">
              <Searchout size = {32} color = "#808080"/>
              <TextInput placeholder="Start Search" keyboardType="Default"/>
        </View>
        
              
        <TouchableOpacity onPress={()=>{navigation.navigate("CartScreen")}} 
 className="flex-row space-x-6" >
              <Cartout size = {32} color = "#000000"></Cartout>
              {/* <Uout size = {32} color = "#39c58f"></Uout> */}
        </TouchableOpacity>
    </View>
  )
}

export default Header