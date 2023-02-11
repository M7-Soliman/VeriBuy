import { Video } from 'expo-av'
import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

export default function PostSingle() {
  return (
    
      <Video 
      style={styles.container}
      resizeMode="cover"
      shouldPlay={true}
      source={{uri:'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4' }}/>
    
  )
}