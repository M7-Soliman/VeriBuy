import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import TvScreen from './screens/feed/TvScreen';
import AddScreen from './screens/AddScreen';

// import Constants from 'expo-constants';
import firebase from "firebase/app"

const Stack = createNativeStackNavigator();

if (firebase.apps.length == 0){
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
// firebase.initializeApp()

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: 'none' }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
        animationEnabled: false, }} />
        <Stack.Screen name="NotificationsScreen" component={NotificationsScreen}/>
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="TvScreen" component={TvScreen} />
        <Stack.Screen name="AddScreen" component={AddScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
    
      
   
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


