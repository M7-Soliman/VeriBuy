import { View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'


import { UserIcon as Uout} from "react-native-heroicons/outline";
import { UserIcon as Usol} from "react-native-heroicons/solid";

import { ShoppingCartIcon as Cartout} from "react-native-heroicons/outline";
import { ShoppingCartIcon as Cartsol} from "react-native-heroicons/solid";

import { MagnifyingGlassIcon  as Searchout} from "react-native-heroicons/outline";



import React from 'react'
import { heightPercentageToDP } from 'react-native-responsive-screen';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View className = "flex-row pb-3 items-center mx-4 space-x-5">
        
    </View>
  )
}

export default Header