import { View, Text, SafeAreaView, TextInput, ScrollView, StyleSheet} from 'react-native'

import { useNavigation } from '@react-navigation/native'


import { UserIcon as Uout} from "react-native-heroicons/outline";
import { UserIcon as Usol} from "react-native-heroicons/solid";

import { ShoppingCartIcon as Cartout} from "react-native-heroicons/outline";
import { ShoppingCartIcon as Cartsol} from "react-native-heroicons/solid";

import { MagnifyingGlassIcon  as Searchout} from "react-native-heroicons/outline";


const Footer = () => {
  return (
      <View styles = {styles.bottomContainer}>
              {/* <Searchout size = {32} color = "#39c58f"/> */}
      </View>
  )
}


const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 'auto'
  },

});


export default Footer