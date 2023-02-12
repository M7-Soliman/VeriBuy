import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



import { useNavigation } from '@react-navigation/native'


import { ShoppingCartIcon as Cartout} from "react-native-heroicons/outline";
import { ShoppingCartIcon as Cartsol} from "react-native-heroicons/solid";

const SubNotifications = ({url1, url2}) => {
  
  return (
    <View style={{height: 100, width: "100%"}} className = "bg- bg-gray-300 opacity-90 pt-5 flex-row pb-10 items-center mt-3 rounded-xl" showsHorizontalScrollIndicator={false}>
          
            
            <View style = {styles.thathellofabutton} className="flex-row">
            <Image source={{uri: url1}}
            style={{width: wp('17.8') , height: wp('17.8')} } className="rounded-full"/>
            </View>

        {/* <View>
        <Image source={{uri: url1}}  className = "rounded-full" style={{height: wp(16), width: wp("16")}}/>
        </View> */}
    </View>
  )
}
const styles = StyleSheet.create({

  thathellofabutton: {
    position: "relative",
    bottom: wp('-2.5'),
    left: wp('4.5')
  }})

export default SubNotifications