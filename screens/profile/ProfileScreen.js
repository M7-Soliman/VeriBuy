import { View, Text, SafeAreaView, TextInput, ScrollView, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { ShoppingCartIcon as Cartout} from "react-native-heroicons/outline";

import Items from '../../components/Categories';
import Heder from '../../components/Heder';

import { useSelector } from 'react-redux';
import UpperPart from '../../components/profile/UpperPart';
import LowerPart from '../../components/profile/LowerPart';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const ProfileScreen = () => {
  const currentUser = useSelector(state => state.auth.currentUser)
  const currentUserPosts = useSelector(state => state.posts.currentUserPosts)

  const navigation = useNavigation();
    
  useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false,
      });
  }, [])

  return (
    <View className="bg-black pt 6">

          {/* Header */}
          <View >
            <View>
            <Cartout size = {hp(6)} color = "black"></Cartout>
            </View>
          <Heder>
          </Heder>
          </View>
        

        <View>
          <UpperPart user={currentUser}/>
        </View>

        <LowerPart posts={currentUserPosts}/>



    </View>
  )
} 


export default ProfileScreen