import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import {Provider, useDispatch, useSelector} from 'react-redux';
import { userAuthStateListener } from '../redux/actions';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenStack } from 'react-native-screens';
import SavePostScreen from '../screens/savePost';



import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import TvScreen from '../screens/feed/TvScreen';
import CameraScreen from '../screens/camera/AddScreen'
import Tabs from '../screens/Tabs';
import EditProfileScreen from '../screens/profile/edit';
import EditProfileFieldScreen from '../screens/profile/edit/field';


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
                    {/* <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{ headerShown: false }} />
                    <Stack.Screen name="NotificationsScreen" component={NotificationsScreen}  options={{ headerShown: false }} />
                    <Stack.Screen name="ProfileScreen" component={ProfileScreen}  options={{ headerShown: false }} />
                    <Stack.Screen name="AddScreen" component={CameraScreen}  options={{ headerShown: false }} />
                    <Stack.Screen name="TvScreen" component={TvScreen}  options={{ headerShown: false }} /> */}

                    <Stack.Screen name="tabs" component={Tabs}  options={{ headerShown: false }} />
                    <Stack.Screen name="savePost" component={SavePostScreen}  options={{ headerShown: false }} />
                    <Stack.Screen name="editProfile" component={EditProfileScreen}  options={{ headerShown: false }} />
                    <Stack.Screen name="editProfileField" component={EditProfileFieldScreen}  options={{ headerShown: false }} />
                    <Stack.Screen name="CartScreen" component={CartScreen} />

                    </>
                }
        </Stack.Navigator>
    </NavigationContainer>
  )
}