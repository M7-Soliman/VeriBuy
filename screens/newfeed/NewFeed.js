import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './styles'

const NewFeed = () => {
    
    const array = [1,2,3,4,5,6]
    const renderItem = ({item, index}) => {
        return (
        <View></View>
        )
    }

  return (
    <View style={styles.container}>
        <FlatList
            data = {array}
            renderItem={renderItem}
        
        />
    </View>
  )
}

export default NewFeed