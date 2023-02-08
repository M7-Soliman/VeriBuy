import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native'

import { useNavigation } from '@react-navigation/native'


import { UserIcon as Uout} from "react-native-heroicons/outline";
import { UserIcon as Usol} from "react-native-heroicons/solid";

import { ShoppingCartIcon as Cartout} from "react-native-heroicons/outline";
import { ShoppingCartIcon as Cartsol} from "react-native-heroicons/solid";

import { MagnifyingGlassIcon  as Searchout} from "react-native-heroicons/outline";



import React from 'react'

const Header = () => {
  return (
    <View className = "flex-row pb-3 items-center mx-4 space-x-5">
        <View className="flex-row flex-1 space-x-2">
              <Searchout size = {32} color = "#39c58f"/>
              <TextInput placeholder="Search all products" keyboardType="Default"/>
        </View>
              
        <View className="flex-row space-x-6">
              <Cartout size = {32} color = "#39c58f"></Cartout>
              <Uout size = {32} color = "#39c58f"></Uout>
        </View>
    </View>
  )
}

export default Header