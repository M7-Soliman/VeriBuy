import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'

export default function PostSingleOverlay({user, post}) {
    // console.log(user.displayName)
  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Image style={styles.avatar} source={{uri: user.photoURL}}/>
          <Text style={styles.displayNAME}>{user.displayName}</Text>
        </>
      ) : (
          <Text>Loading user data...</Text>
      )}
    </View>
  )
}