import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { searchIcon } from "react-native-heroicons/outline";
import { TextInput } from 'react-native-web';

const HomeScreen = () => {
    const navigation = useNavigation();
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])


  return (
    <SafeAreaView className="bg-white pt 6">
            {/* search  */}
        <View>
            
        </View> 
    </SafeAreaView>
  )
} 

export default HomeScreen