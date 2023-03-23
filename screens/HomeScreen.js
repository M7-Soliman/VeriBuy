import { View, Text, SafeAreaView, TextInput, ScrollView, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useRef, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { ShoppingCartIcon as Cartout} from "react-native-heroicons/outline";

import Items from '../components/Categories';
import Footer from '../components/Footer';
import Heder from '../components/Heder';

import { Header } from 'react-native/Libraries/NewAppScreen';
import Feed from '../components/feed/Feed';

// import { searchIcon } from "react-native-heroicons/outline";
// import { TextInput } from 'react-native-web';

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
            <Cartout size = {55} color = "black"></Cartout>
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