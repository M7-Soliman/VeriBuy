import { View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect, useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const AuthScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])
    return (

      <View contentContainerStyle = {{ paddingTop:10, paddingLeft: 15, paddingRight: 15, }} showsHorizontalScrollIndicator={false}>
             
            <TouchableOpacity style = {styles.buttonright} className="flex-row">

            <View style={{width: wp('40') , height: wp('12'), backgroundColor:"#26da76"}} className="rounded-3xl">
                <Text style={ styles.title} className="Bold">Sign In</Text>
            </View>


            </TouchableOpacity>
            
             
            {/* , {'} */}
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
    textAlign: 'center',
      position: "relative",
      color:'black',
      marginTop: wp('12')/4,
      fontSize: 22,
    fontWeight: 'bold' },
      
      buttonright: {
      position: "relative",
      bottom: wp('-130'),
      left: wp('50')-(wp('40')/2)}, 
  
  })

export default AuthScreen



