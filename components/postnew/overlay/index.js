import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { EllipsisVerticalIcon as Dots } from 'react-native-heroicons/outline'
import { ShoppingBagIcon as Bag } from 'react-native-heroicons/outline'

export default function PostSingleOverlay({user, post}) {
    // console.log(user.displayName)
  return (
    <View style={styles.container}>
      {user ? (
        <>
        <View style={styles.container}>
          <Image style={styles.avatar} source={{uri: user.photoURL}}/>
          <Text style={styles.displayNAME}>{user.displayName}</Text>
        </View>
        <View style={styles.container2}>
          
          <TouchableOpacity>
            <Dots style={styles.icons} color="white" size={31}/>
          </TouchableOpacity>

          <TouchableOpacity>
            <Bag style={styles.icons} color="white" size={31}/>
          </TouchableOpacity>

        </View>
        </>
      ) : (
          <Text>Loading user data...</Text>
      )}
    </View>
  )
}