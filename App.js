import { StatusBar, Platform, StyleSheet } from 'react-native';
import { View } from 'react-native';
import firebase from "firebase/app";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
import Main from './navigation/Main';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Configure status bar
StatusBar.setBarStyle('dark-content');

if (Platform.OS === 'android') {
  StatusBar.setTranslucent(true);
  StatusBar.setBackgroundColor('transparent');
}

// Initialize Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  });
}

// Configure React Query
const queryClient = new QueryClient({
  defaultOptions: { 
    queries: {
      refetchInterval: false, 
      staleTime: Infinity
    }
  }
});

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Main />
        </QueryClientProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});



