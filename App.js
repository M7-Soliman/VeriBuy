import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/profile/ProfileScreen';
import TvScreen from './screens/feed/TvScreen';
import AddScreen from './screens/camera/AddScreen'
import firebase from "firebase/app"

import {Provider, useSelector} from 'react-redux';
import {createStore,applyMiddleware} from "redux"
import { configureStore } from '@reduxjs/toolkit'

import thunk from 'redux-thunk';
import rootReducer from './redux/reducers'
import Main from './navigation/Main';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';

StatusBar.setBarStyle('dark-content');

if (Platform.OS === 'android') {
  StatusBar.setTranslucent(true);
  StatusBar.setBackgroundColor('transparent');
}

const store = createStore( rootReducer, applyMiddleware(thunk))
const Stack = createNativeStackNavigator();

if (firebase.apps.length === 0){
firebase.initializeApp({
  apiKey: "AIzaSyBn1byyup_Qxv73tUJilx3NSgLxIEZWEpU",
  authDomain: "veribuy-976c1.firebaseapp.com",
  databaseURL: "https://veribuy-976c1-default-rtdb.firebaseio.com",
  projectId: "veribuy-976c1",
  storageBucket: "veribuy-976c1.appspot.com",
  messagingSenderId: "858951986854",
  appId: "1:858951986854:web:3b2a6a24265e9a6a7b8e67",
  measurementId: "G-XCHHSYNZVK"
})
}

const queryclient = new QueryClient({
  defaultOptions: { queries: {refetchInterval: false, staleTime: Infinity}}
})

export default function App() {
  // const currentUserObj = useSelector(state => state.auth)
  // console.log(currentUserObj)

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    {/* // <NavigationContainer> */}
      <Provider store = {store}>
        <QueryClientProvider client={queryclient}>

        <Main/>
      {/* <Stack.Navigator screenOptions={{ animation: 'none'}}>
        <Stack.Screen name="SigninScreen" component={SigninScreen}/>
        <Stack.Screen name="SignupScreen" component={SignupScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{
        animationEnabled: false, }} />
        <Stack.Screen name="NotificationsScreen" component={NotificationsScreen}/>
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="TvScreen" component={TvScreen} />
        <Stack.Screen name="AddScreen" component={AddScreen} />
        
      </Stack.Navigator> */}
      </QueryClientProvider>
      </Provider>
      
    {/* // </NavigationContainer> */}
    </GestureHandlerRootView>
      
   
    
  );
}



