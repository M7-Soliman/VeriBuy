import { View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'


import { UserIcon as Uout} from "react-native-heroicons/outline";
import { UserIcon as Usol} from "react-native-heroicons/solid";

import { ShoppingCartIcon as Cartout} from "react-native-heroicons/outline";
import { ShoppingCartIcon as Cartsol} from "react-native-heroicons/solid";

import { MagnifyingGlassIcon  as Searchout} from "react-native-heroicons/outline";



import React from 'react'
import { heightPercentageToDP } from 'react-native-responsive-screen';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View className = "flex-row pb-3 items-center mx-4 space-x-5">
        <TouchableOpacity style={{alignItems:"center", backgroundColor:"#1d1d1d", borderColor:"#1d1d1d", borderWidth:1, height: heightPercentageToDP(5), paddingLeft:10, borderRadius:20, marginTop:10}} className="flex-row flex-1 space-x-2">
              <Searchout size = {32} color = "white"/>
              <Text style={{color:"white"}}> Search Items </Text>
        </TouchableOpacity>
        
              
        <TouchableOpacity onPress={()=>{navigation.navigate("CartScreen")}} 
 className="flex-row space-x-6" >
              <Cartout size = {32} color = "white"></Cartout>
              {/* <Uout size = {32} color = "#39c58f"></Uout> */}
        </TouchableOpacity>
    </View>
  )
}

export default Header