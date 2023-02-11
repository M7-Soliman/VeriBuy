import { View, Text, SafeAreaView, TextInput, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native'

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

import { PlusCircleIcon  as Plusout} from "react-native-heroicons/outline";
import { PlusCircleIcon  as Plusol} from "react-native-heroicons/solid";

import {useState} from 'react'



const Footer = () => {
  return (
    <View>

    <View style = {styles.bottomContainer} className = "bg-black pt-5 flex-row pb-10 items-center space-x-10">
        <View className="mx-8 flex-row flex-1 space-x-9">
            <TouchableOpacity >
              <Homeout size = {33} color = "#FFFFFF"/>
            </TouchableOpacity>
            
            <TouchableOpacity>
              <TVout size = {33} color = "#FFFFFF"/>
              </TouchableOpacity>

              <View >
    <TouchableOpacity style = {styles.thathellofabutton} className="flex-row space-x-100">
      <Image source={{
      uri: "https://drive.google.com/uc?export=view&id=11-6TxNadZ9pR99T-KXk5Kfl1MtGinZtp"
      }} 
      className ="h-20 w-20"/>
      </TouchableOpacity>
              </View>

              <TouchableOpacity>
              <Notifout size = {33} color = "#FFFFFF"/>
              </TouchableOpacity>

              <TouchableOpacity>
              <Uout size = {33} color = "#FFFFFF"/>
              </TouchableOpacity>

        </View>
        
        <View className="mx-8 flex-row space-x-10">


        </View>

    </View>

    {/* <View>
    <TouchableOpacity style = {styles.thathellofabutton} className="flex-row space-x-100">
      <Image source={{
      uri: "https://drive.google.com/uc?export=view&id=1Z8vXLtA8StyR_D4aM8E_iPfTTnCjXhkB"
      }} 
      className ="h-20 w-20 rounded-full"/>
      </TouchableOpacity>
      </View> */}

      </View>
  )
}


const styles = StyleSheet.create({
  bottomContainer: {
    position: "absolute",
    alignItems: 'center',
    bottom: 15,
    height: 130,
    width: "100%",
    borderRadius : 30
  },

  thathellofabutton: {
    position: "relative",
    width: "100%",
    bottom: 40,
  },

});


export default Footer