import { View, Text, SafeAreaView, TextInput, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native'

import { useNavigation } from '@react-navigation/native'


import { ShoppingCartIcon as Cartout} from "react-native-heroicons/outline";
import { ShoppingCartIcon as Cartsol} from "react-native-heroicons/solid";

import { MagnifyingGlassIcon  as Searchout} from "react-native-heroicons/outline";
import { MagnifyingGlassIcon  as Searchsol} from "react-native-heroicons/solid";

import { UserIcon as Uout} from "react-native-heroicons/outline";
import { UserIcon as Usol} from "react-native-heroicons/solid";


import { HomeIcon  as Homeout} from "react-native-heroicons/outline";
import { HomeIcon  as Homesol} from "react-native-heroicons/solid";


import { TvIcon  as TVout} from "react-native-heroicons/outline";
import { TvIcon  as TVsol} from "react-native-heroicons/solid";

import { BellAlertIcon  as Notifout} from "react-native-heroicons/outline";
import { BellAlertIcon  as Notifin} from "react-native-heroicons/solid";

import { PlusCircleIcon  as Plusout} from "react-native-heroicons/outline";
import { PlusCircleIcon  as Plusol} from "react-native-heroicons/solid";

import {useState} from 'react'

import {Dimensions} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Footer = () => {

  const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();
  return (
    <View>

    <View style = {styles.bottomContainer} className = "bg-black pt-5 flex-row pb-10 items-center">
        <View className="flex-row flex-1 ">
            <TouchableOpacity style={{marginLeft: wp('10%'), marginRight: wp('9%')}} onPress={()=>{navigation.navigate("HomeScreen")}} >
              <Homesol size = {wp('8')} color = "#26da76"/>
            </TouchableOpacity>
            
            <TouchableOpacity style={{marginRight: wp('5.5%') }} onPress={()=>{navigation.navigate("TvScreen")}} >
              <TVout size = {wp('8')} color = "#FFFFFF"/>
              </TouchableOpacity>

              <View >
    <TouchableOpacity onPress={()=>{navigation.navigate("AddScreen")}}  style = {styles.thathellofabutton} className="flex-row">
      <Image source={require("../assets/plus.png")}      
      style={{width: wp('17.8') , height: wp('17.8')} }/>
      </TouchableOpacity>
              </View>

              <TouchableOpacity style={{marginRight: wp('10%'), marginLeft: wp('5.5%') }} onPress={()=>{navigation.navigate("NotificationsScreen")}} 
              >
              <Notifout size = {wp('8')} color = "#FFFFFF"/>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{navigation.navigate("ProfileScreen")}} >
              <Uout size = {wp('8')} color = "#FFFFFF"/>
              </TouchableOpacity>

        </View>

    </View>

      </View>
  )
}


const styles = StyleSheet.create({
  bottomContainer: {
    position: "absolute",
    alignItems: 'center',
    bottom: 160,
    height: wp('28'),
    width: "100%",
    borderRadius : 30
  },

  thathellofabutton: {
    position: "relative",
    bottom: wp('9'),
  },

});


export default Footer