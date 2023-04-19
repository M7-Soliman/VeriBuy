import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import NotificationsScreen from './NotificationsScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import TvScreen from './feed/TvScreen';
import NewFeed from './newfeed/NewFeed';

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
          height: hp(10),
          paddingTop: 0,
          backgroundColor: '#1d1d1d',
          position: 'relative',
          borderTopWidth: 0,
          activeColor:"red",
          inactiveColor:"white",
          paddingHorizontal: 20,
          // bottom:-hp(10/4),

      },
    })}
    tabBarOptions={{
        activeTintColor: '#26da76',
        inactiveTintColor: 'white',
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
        
    <tab.Screen name="Showcase" component={HomeScreen} options={{
        animationEnabled: false, tabBarIcon: ({ color, focused }) => (
          <TouchableOpacity onPress={()=>{navigation.navigate("NewFeed")}}>
          <TVout name="home" color="white" size={30}/>
          </TouchableOpacity>
          
        ),   tabBarLabel: ({focused, color, size}) => (
          <TouchableOpacity onPress={()=>{navigation.navigate("NewFeed")}}>
          <Text style={{fontSize:10,color: focused ? 'white' : color}}>Showcase</Text>
          </TouchableOpacity>

        ),
      }}
        />

    <tab.Screen name=" " component={CameraScreen} options={{
              tabBarIcon: ({ focused }) => (
                focused ?
    
                <View></View>
                :
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
                    source={require('../assets/blus.png')}
                    style={{
                      width: wp('17.5') , height: wp('17.5'),
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

