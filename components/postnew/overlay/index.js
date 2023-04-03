import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

export default function PostSingleOverlay({user, post}) {
    console.log(user.displayName)
  return (
    <View style={styles.container}>
      <Text>{user.displayName}</Text>
    </View>
  )
}