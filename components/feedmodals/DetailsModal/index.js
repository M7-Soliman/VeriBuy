import { View, Text } from 'react-native'
import React from 'react'

const Details = ({post, user}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text>{post.description}</Text>
    </View>
  )
}

export default Details