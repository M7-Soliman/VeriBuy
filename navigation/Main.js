import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import {Provider, useDispatch, useSelector} from 'react-redux';
import { userAuthStateListener } from '../redux/actions';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenStack } from 'react-native-screens';

import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TvScreen from '../screens/feed/TvScreen';
import CameraScreen from '../screens/camera/AddScreen'


const Stack = createNativeStackNavigator();


export default function Main() {
        
    const currentUserObj = useSelector(state => state.auth)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAuthStateListener());
    }, [])


    console.log(currentUserObj)

    if (!currentUserObj.loaded) {
        return (
            <View>
            </View>
        )
    }

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ animation: 'none'}}>
        {currentUserObj.currentUser == null ?
                <>
                <Stack.Screen name = "SigninScreen" component={SigninScreen} />
                <Stack.Screen name="SignupScreen" component={SignupScreen}/>
                </>
                :
                    <>        
                    <Stack.Screen name="Home" component={HomeScreen} options={{
                        animationEnabled: false, }} />
                    <Stack.Screen name="NotificationsScreen" component={NotificationsScreen}/>
                    <Stack.Screen name="CartScreen" component={CartScreen} />
                    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                    <Stack.Screen name="TvScreen" component={TvScreen} />
                    <Stack.Screen name="AddScreen" component={CameraScreen} />
                    </>
                }
        </Stack.Navigator>
    </NavigationContainer>
  )
}