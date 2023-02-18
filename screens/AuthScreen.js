import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native'
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

      <ScrollView style = {styles.maincolor}>
        <View>

            <Image source={require("../assets/LogoGraybg.jpeg")} style = {styles.vbuylogo} className ="rounded-3xl"/>

            <TextInput style={styles.tinput} placeholder="Email" keyboardType="Default"/>
            <TextInput style={styles.tinput} placeholder="Password" keyboardType="Default"/>



            <TouchableOpacity style = {styles.buttonright} className="flex-row">
            <View style={{width: wp('40') , height: wp('12'), backgroundColor:"#26da76"}} className="rounded-3xl">
                <Text style={ styles.title} className="Bold">Sign In</Text>
            </View>

            </TouchableOpacity >

            <TouchableOpacity style = {styles.buttonleft} className="flex-row">
            <View style={{width: wp('55') , height: wp('12'), backgroundColor:"#bd31fe"}} className="rounded-3xl">
                <Text style={ styles.title2} className="Bold">Sign Up</Text>
            </View>
            </TouchableOpacity>
                <Text style={ styles.textbetween} className="Bold">Not Registered Yet? </Text>

 
            
        </View>
      </ScrollView>
    )
}


const styles = StyleSheet.create({

    vbuylogo:{
        bottom: wp('-37'),
        left: wp('50')-(wp('40')/2),
        width: wp('40') , height: wp('40')
    },

    maincolor: {
        backgroundColor: "#FFFFFF"

    },

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

    title2: {
        textAlign: 'center',
          position: "relative",
          color:'white',
          marginTop: wp('12')/4,
          fontSize: 22,
        fontWeight: 'bold' },

    textbetween:{
        textAlign: 'center',
        position: "relative",
        color:'black',
        fontSize: 16,
        bottom: wp('-45')},
  
      
      buttonright: {
      position: "relative",
      bottom: wp('-65'),
      left: wp('50')-(wp('40')/2),
        marginBottom: 150 }, 

      buttonleft: {
        position: "relative",
        bottom: wp('-65'),
        left: wp('50')-(wp('55')/2)},

      tinput:{
        position: "relative",
      bottom: wp('-60'),
      left: wp('50')-(wp('70')/2), 
      borderColor: 'black',
      borderWidth: 0.5,
      width: wp('70'), 
      height: wp('11'),
      borderRadius: 13,
      marginBottom: 20,
      paddingHorizontal: 7,

      }
  
  })

export default AuthScreen



