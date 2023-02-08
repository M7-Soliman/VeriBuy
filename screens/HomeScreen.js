import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'



import { UserIcon as Uout} from "react-native-heroicons/outline";
import { UserIcon as Usol} from "react-native-heroicons/solid";

import { ShoppingCartIcon as Cartout} from "react-native-heroicons/outline";
import { ShoppingCartIcon as Cartsol} from "react-native-heroicons/solid";

import { MagnifyingGlassIcon  as Searchout} from "react-native-heroicons/outline";
import { MagnifyingGlassIcon as Searchsol} from "react-native-heroicons/solid";

// import { searchIcon } from "react-native-heroicons/outline";
// import { TextInput } from 'react-native-web';

const HomeScreen = () => {
    const navigation = useNavigation();
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])


  return (
    <SafeAreaView className="bg-white pt 6">
        <View>

          {/* Header */}
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

          {/* Main */}
          <ScrollView> 



          </ScrollView>

        </View> 
    </SafeAreaView>
  )
} 

export default HomeScreen