import { View, Text, SafeAreaView, TextInput, ScrollView, StyleSheet} from 'react-native'

import { useNavigation } from '@react-navigation/native'


import { UserIcon as Uout} from "react-native-heroicons/outline";
import { UserIcon as Usol} from "react-native-heroicons/solid";

import { ShoppingCartIcon as Cartout} from "react-native-heroicons/outline";
import { ShoppingCartIcon as Cartsol} from "react-native-heroicons/solid";

import { MagnifyingGlassIcon  as Searchout} from "react-native-heroicons/outline";


const Footer = () => {
  return (
    <View style = {styles.bottomContainer} className = "bg-black pt-5 flex-row pb-3 items-center space-x-5">
        <View className="flex-row flex-1 space-x-2">
              <Searchout size = {32} color = "#39c58f"/>
              <TextInput placeholder="Start Search" keyboardType="Default"/>
        </View>
              
        <View className="flex-row space-x-6">
              <Cartout size = {32} color = "#39c58f"></Cartout>
              {/* <Uout size = {32} color = "#39c58f"></Uout> */}
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
  bottomContainer: {
    position: "absolute",
    alignItems: 'center',
    bottom: 50,
    height: 80,
    width: "100%",
    borderRadius : 40
  },

});


export default Footer