import { View, Text, SafeAreaView, TextInput, ScrollView, StyleSheet, TouchableOpacity, Image} from 'react-native'

import { useNavigation } from '@react-navigation/native'


import { UserIcon as Uout} from "react-native-heroicons/outline";
import { UserIcon as Usol} from "react-native-heroicons/solid";

import { ShoppingCartIcon as Cartout} from "react-native-heroicons/outline";
import { ShoppingCartIcon as Cartsol} from "react-native-heroicons/solid";

import { MagnifyingGlassIcon  as Searchout} from "react-native-heroicons/outline";
import { MagnifyingGlassIcon  as Searchsol} from "react-native-heroicons/solid";

import { HomeIcon  as Homeout} from "react-native-heroicons/outline";
import { HomeIcon  as Homesol} from "react-native-heroicons/solid";


import { TvIcon  as TVout} from "react-native-heroicons/outline";
import { TvIcon  as TVsol} from "react-native-heroicons/solid";

import { BellAlertIcon  as Notifout} from "react-native-heroicons/outline";
import { BellAlertIcon  as Notifin} from "react-native-heroicons/solid";

import {useState} from 'react'



const Footer = () => {
  return (
    <View style = {styles.bottomContainer} className = "bg-black pt-5 flex-row pb-7 items-center space-x-10">
        <View className="mx-8 flex-row flex-1 space-x-10">
            <TouchableOpacity >
              <Homeout size = {33} color = "#FFFFFF"/>
            </TouchableOpacity>
            
            <TouchableOpacity>
              <TVout size = {33} color = "#FFFFFF"/>
              </TouchableOpacity>

        </View>

          <View className="mx-85 flex-row space-x-10">
            <Image source={{
            uri: "https://drive.google.com/uc?export=view&id=1rMwhVZIBcCuakraDCW2lWWpgQ26A5l-1"
        }} 
        className ="h-20 w-20 rounded-xl "/>
          </View>


        <View className="mx-8 flex-row space-x-10">
              <TouchableOpacity>
              <Notifout size = {33} color = "#FFFFFF"/>
              </TouchableOpacity>

              <TouchableOpacity>
              <Uout size = {33} color = "#FFFFFF"/>
              </TouchableOpacity>

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