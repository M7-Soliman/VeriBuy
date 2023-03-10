import { View, Text, SafeAreaView, TextInput, ScrollView, StyleSheet, Image } from 'react-native'
import React, { useLayoutEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { ShoppingCartIcon as Cartout} from "react-native-heroicons/outline";

import Items from '../components/Categories';
import Footer from '../components/Footer';
import Heder from '../components/Heder';

import { Header } from 'react-native/Libraries/NewAppScreen';
import FooterNotifications from '../components/FooterNotifications';
import NotificationItems from '../components/NotificationItems';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { roundToNearestPixel } from 'nativewind';

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
    <ScrollView className="bg-white pt 6">

          <View>
            <View>
            <Cartout size = {55} color = "#FFFFFF"></Cartout>
            </View>
          <Heder>
          </Heder>
          </View>

        {/* <View>


          <ScrollView> 
            <NotificationItems>
            </NotificationItems>
          </ScrollView>

          <View > 
            <FooterNotifications>
            </FooterNotifications>
          </View>


        </View>  
        */}
                  
          <Image source={require("../assets/comingsoon.png")} style={{marginTop:heightPercentageToDP(35),alignSelf:"center"}}/>

    </ScrollView>
  )
} 

export default NotificationsScreen