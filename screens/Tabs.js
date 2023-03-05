import { View, Text, Image } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import NotificationsScreen from './NotificationsScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import TvScreen from './feed/TvScreen';
import CameraScreen from './camera/AddScreen';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { UserIcon as Uout} from "react-native-heroicons/outline";
import { UserIcon as Usol} from "react-native-heroicons/solid";


import { HomeIcon  as Homeout} from "react-native-heroicons/outline";
import { HomeIcon  as Homesol} from "react-native-heroicons/solid";


import { BuildingStorefrontIcon  as TVout} from "react-native-heroicons/outline";
import { BuildingStorefrontIcon  as TVsol} from "react-native-heroicons/solid";

import { BellAlertIcon  as Notifout} from "react-native-heroicons/outline";
import { BellAlertIcon  as Notifin} from "react-native-heroicons/solid";

import { ParamListBase, useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
import { DependencyList, useEffect } from 'react';
// import { BackHandler } from 'react-native';

const tab = createBottomTabNavigator();



const Tabs = () => {
  const navigation = useNavigation();

  return (
    <tab.Navigator 
    screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: hp(9.5),
          paddingTop: 0,
          backgroundColor: 'black',
          position: 'relative',
          borderTopWidth: 0,
          activeColor:"red",
          inactiveColor:"white",
          paddingHorizontal: 20,
      },
    })}
    tabBarOptions={{
        activeTintColor: '#26da76',
        inactiveTintColor: '#ffffff',
        // showLabel: false
      }} 
     initialRouteName="Home" backBehavior="Home">


      
    <tab.Screen name="Home" component={HomeScreen} options={{
        animationEnabled: false, tabBarIcon: ({ color, focused }) => (
          focused?
          <Homesol name="home" color={color} size={30}/>
          :
          <Homeout name="home" color={color} size={30}/>
        ),}} />
        
    <tab.Screen name="Showcase" component={TvScreen} options={{
        animationEnabled: false, tabBarIcon: ({ color, focused }) => (
          focused?
          <TVsol name="home" color={color} size={30}/>
          :
          <TVout name="home" color={color} size={30}/>
        ),}}
        />

    <tab.Screen name=" " component={CameraScreen} options={{
              tabBarIcon: ({  }) => (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 2,
                    width: wp('17.8') , height: wp('17.8'),
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // shadowColor: '#ffffff',
                    // shadowOffset: {
                    //   width: 0,
                    //   height: 1,
                    // },
                    // shadowOpacity: 0.1,
                    // shadowRadius: 1.65,
                    // elevation: 0,
                  }}>
                    
                  <Image
                    source={require('../assets/plus.png')}
                    style={{
                      width: wp('17.8') , height: wp('17.8'),
                      //tintColor: '#f1f6f9',
                      alignContent: 'center',
                    }}
                  />
                </View> 
              ),
            }}
          />
   
    <tab.Screen name="Notifications" component={NotificationsScreen}options={{
          backBehavior:"Home",
         tabBarIcon: ({ color, focused}) => (
          focused ?
          <Notifin name="Notifications" color={color} size={30}/>
          :
          <Notifout name="Notifications" color={color} size={30}/>
        ),}} />

    <tab.Screen name="Profile" component={ProfileScreen} options={{
      backBehavior:"Home",
        animationEnabled: false, tabBarIcon: ({ color, focused }) => (
          focused?
          <Usol name="UserIcon" color={color} size={30}/>
          :
          <Uout name="UserIcon" color={color} size={30}/>
        ),}} />

    </tab.Navigator>
  )
}

export default Tabs

