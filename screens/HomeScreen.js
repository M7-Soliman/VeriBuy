import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'


import { UserIcon as Uout} from "react-native-heroicons/outline";
import { UserIcon as Usol} from "react-native-heroicons/solid";

import { ShoppingCartIcon as Cartout} from "react-native-heroicons/outline";
import { ShoppingCartIcon as Cartsol} from "react-native-heroicons/solid";

import { MagnifyingGlassIcon  as Searchout} from "react-native-heroicons/outline";
import { MagnifyingGlassIcon as Searchsol} from "react-native-heroicons/solid";
import Items from '../components/Items';
import Footer from '../components/Footer';
import Heder from '../components/Heder';
import { Header } from 'react-native/Libraries/NewAppScreen';

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
          </ScrollView>

          {/* Footer */}
          <View> 
            <Footer> 
            </Footer>
          </View>


        </View> 
                  
                  

    </SafeAreaView>
  )
} 

export default HomeScreen