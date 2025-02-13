import { View, Text, SafeAreaView, TextInput, ScrollView, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useRef, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { ShoppingCartIcon as Cartout} from "react-native-heroicons/outline";

import Items from '../components/Categories';
import Heder from '../components/Heder';

import { Header } from 'react-native/Libraries/NewAppScreen';
import Feed from '../components/feed/Feed';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HomeScreen = () => {
    const navigation = useNavigation();
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])

  

  return (
    <View style = {{backgroundColor:"black"}} className="pt 6">
        <View>

          {/* Header */}
          <View style = {{backgroundColor:"black"}}>
            <View>
            <Cartout size = {hp(6)} color = "black"></Cartout>
            </View>
          <Heder>
          </Heder>
          </View>

          {/* Main */}
          <Feed>
          
          </Feed>


        

    

        </View> 
                  
                  

    </View>
  )
} 




export default HomeScreen