import { View, Text, SafeAreaView, TextInput, ScrollView, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { ShoppingCartIcon as Cartout} from "react-native-heroicons/outline";

import Items from '../components/Categories';
import Footer from '../components/Footer';
import Heder from '../components/Heder';

import { Header } from 'react-native/Libraries/NewAppScreen';
import Lists from '../components/Lists';
import FooterNotifications from '../components/FooterNotifications';
import NotificationItems from '../components/NotificationItems';

// import { searchIcon } from "react-native-heroicons/outline";
// import { TextInput } from 'react-native-web';

const NotificationsScreen = () => {
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
            <NotificationItems>
            </NotificationItems>
          </ScrollView>

          {/* Footer */}
          <View > 
            <FooterNotifications>
            </FooterNotifications>
          </View>


        </View> 
                  
                  

    </View>
  )
} 

export default NotificationsScreen