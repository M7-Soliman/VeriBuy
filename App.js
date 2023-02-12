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
import { QueryClient, QueryClientProvider } from 'react-query';

const Stack = createNativeStackNavigator();

<<<<<<< HEAD
const queryClient = new QueryClient({
  defaultOptions: {queries:{refetchInterval: false, staleTime: Infinity}}
})
=======
>>>>>>> 40f80468dbc53204775fe3b60b61b19707f9513e
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    
      
    </QueryClientProvider>
    
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


