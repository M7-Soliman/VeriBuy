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

const ProfileScreen = () => {
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

          {/* Main */}

          <ScrollView> 
            <Items> 
            </Items>

            <Lists>
            </Lists>
          </ScrollView>

          {/* Footer */}
          <View > 
            <FooterProfile>
            </FooterProfile>
          </View>


        </View> 
                  
                  

    </View>
  )
} 


export default ProfileScreen