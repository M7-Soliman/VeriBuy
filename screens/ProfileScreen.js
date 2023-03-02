import { View, Text, SafeAreaView, TextInput, ScrollView, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { ShoppingCartIcon as Cartout} from "react-native-heroicons/outline";

import Items from '../components/Categories';
import Footer from '../components/Footer';
import Heder from '../components/Heder';

import { Header } from 'react-native/Libraries/NewAppScreen';
import Lists from '../components/Lists';
import FooterProfile from '../components/FooterProfile';
import { useSelector } from 'react-redux';
import UpperPart from '../components/profile/UpperPart';


const ProfileScreen = () => {
  const currentUser = useSelector(state => state.auth.currentUser)
  const navigation = useNavigation();
    
  useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false,
      });
  }, [])

  return (
    <View className="bg-white pt 6">
        <View>

          {/* Header */}
          <View>
            <View>
            <Cartout size = {55} color = "#FFFFFF"></Cartout>
            </View>
          <Heder>
          </Heder>
          </View>

          <UpperPart user={currentUser}/>

          



        </View>                 
    </View>
  )
} 


export default ProfileScreen