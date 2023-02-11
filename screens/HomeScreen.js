import { View, Text, SafeAreaView, TextInput, ScrollView, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'


import Items from '../components/Items';
import Footer from '../components/Footer';
import Heder from '../components/Heder';

import { Header } from 'react-native/Libraries/NewAppScreen';
import Lists from '../components/Lists';

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
    <SafeAreaView className="bg-white pt 6">
        <View>

          {/* Header */}
          <View>
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
            <Footer> 
            </Footer>
          </View>


        </View> 
                  
                  

    </SafeAreaView>
  )
} 



const styles = StyleSheet.create({
  hs: {
    alignItems: "center", 
    alignContent: 'center'
  },

});



export default HomeScreen