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
import { BellAlertIcon  as Notifsol} from "react-native-heroicons/solid";

import { PlusCircleIcon  as Plusout} from "react-native-heroicons/outline";
import { PlusCircleIcon  as Plusol} from "react-native-heroicons/solid";

import {useState} from 'react'


const FooterNotifications = () => {

  const navigation = useNavigation();
  return (
    <View>

    <View style = {styles.bottomContainer} className = "bg-black pt-5 flex-row pb-10 items-center space-x-10">
        <View className="mx-8 flex-row flex-1 space-x-9">
            <TouchableOpacity onPress={()=>{navigation.navigate("Home")}} >
              <Homeout size = {33} color = "#FFFFFF"/>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>{navigation.navigate("TvScreen")}} >
              <TVout size = {33} color = "#FFFFFF"/>
              </TouchableOpacity>

              <View >
    <TouchableOpacity onPress={()=>{navigation.navigate("AddScreen")}}  style = {styles.thathellofabutton} className="flex-row space-x-100">
      <Image source={require("../assets/plus.png")}      
      className ="h-20 w-20"/>
      </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={()=>{navigation.navigate("NotificationsScreen")}} 
              >
              <Notifsol size = {33} color = "#26da76"/>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{navigation.navigate("ProfileScreen")}} >
              <Uout size = {33} color = "#FFFFFF"/>
              </TouchableOpacity>

        </View>
        
        <View className="mx-8 flex-row space-x-10">


        </View>

    </View>

      </View>
  )
}


const styles = StyleSheet.create({
  bottomContainer: {
    position: "absolute",
    alignItems: 'center',
    bottom: 135,
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


export default FooterNotifications