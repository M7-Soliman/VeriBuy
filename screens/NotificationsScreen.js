import { View, Text, SafeAreaView, TextInput, ScrollView, StyleSheet, Image, Linking } from 'react-native'
import React, { useLayoutEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { ShoppingCartIcon as Cartout} from "react-native-heroicons/outline";

import Items from '../components/Categories';
import Heder from '../components/Heder';

import { Header } from 'react-native/Libraries/NewAppScreen';
import NotificationItems from '../components/NotificationItems';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { roundToNearestPixel } from 'nativewind';

const handleLinkClick = () => {
  Linking.openURL('https://www.facebook.com/veribuyeg');
}


const NotificationsScreen = () => {
    const navigation = useNavigation();
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])


  return (
    <ScrollView className="bg-black pt 6">

          <View>
            <View>
            <Cartout size = {55} color = "#000000"></Cartout>
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
                  
          <Text style={{marginTop:heightPercentageToDP(35),alignSelf:"center", color:"white", fontSize:19, fontWeight:"bold"}}>Coming Soon!</Text>

          <Text style={{ marginTop: heightPercentageToDP(1), alignSelf: 'center', color: 'white', fontSize: 15, fontWeight: 'bold' }}>
  Bugs or Questions: <Text style={{ color: "blue", textDecorationLine: 'underline',fontSize:10 }} onPress={handleLinkClick}>https://www.facebook.com/veribuyeg</Text>
          </Text>
  </ScrollView>
  )
} 

export default NotificationsScreen