import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



import { useNavigation } from '@react-navigation/native'


import { ShoppingCartIcon as Cartout} from "react-native-heroicons/outline";
import { ShoppingCartIcon as Cartsol} from "react-native-heroicons/solid";

const SubNotifications = ({url1, url2}) => {
  
  return (
    <View style={{height: 90, width: "100%"}} className = "bg- bg-gray-200 opacity-90 pt-5 flex-row pb-10 items-center mt-3 rounded-3xl" showsHorizontalScrollIndicator={false}>
          
            
            <View style = {styles.thathellofabutton} className="flex-row">
            <Image source={{uri: url1}}
            style={{width: wp('15') , height: wp('15')} } className="rounded-3xl"/>
            </View>
            
            <View style = {styles.thathellofabutton} className="flex-row">
            <Image source={{uri: url1}}
            style={{width: wp('15') , height: wp('15')} } className="rounded-3xl"/>
            </View>


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