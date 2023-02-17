import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, ImageBackgroundBase} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



import { useNavigation } from '@react-navigation/native'


import { ShoppingCartIcon as Cartout} from "react-native-heroicons/outline";
import { ShoppingCartIcon as Cartsol} from "react-native-heroicons/solid";
import { platformColor } from 'nativewind';

const SubNotifications = ({url1, url2}) => {
  
  return (
    <View style={{height: 90, width: "100%"}} className = "bg-gray-200 pt-5 flex-row pb-10 items-center mt-3 rounded-3xl" showsHorizontalScrollIndicator={false}>
          
            
            <View style = {styles.profilepic} className="flex-row">
            <Image source={{uri: url1}}
            style={{width: wp('15') , height: wp('15')} } className="rounded-3xl"/>
            </View>
{/*             
            <View style = {styles.buttonright} className="flex-row">
            <View style={{width: wp('27') , height: wp('12'), backgroundColor:"#26da76"}} className="rounded-3xl"/>
            </View>
             */}
            <View style = {styles.title} className="flex-row">
            <Text style={{width: wp('27') , height: wp('12'), fontSize:18, fontWeight: 'bold'}} className="Bold">Title</Text>
            </View>




    </View>
  )
}
const styles = StyleSheet.create({

  profilepic: {
    position: "relative",
    bottom: wp('-2.5'),
    left: wp('4')
  },
  title: {
    position: "relative",
    bottom: wp('-3'),
    left: wp('-15'), 
    fontSize: 50,
    color:'red' },
    
    buttonright: {
    position: "relative",
    bottom: wp('-2.5'),
    left: wp('45')}, 

})

export default SubNotifications