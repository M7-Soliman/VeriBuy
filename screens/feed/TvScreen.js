import React from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './styles'
import { Dimensions } from 'react-native'
import PostSingle from '../../components/post'
export default function TvScreen () {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const renderItem = ({item, index})=>{
    return (
       <View style={[{ flex: 1, height: Dimensions.get('window').height -56 },index % 2 == 0 ? {backgroundColor: 'blue'} : {backgroundColor: 'black'}]}>
          <PostSingle />
       </View>
    )
    
  }
  return (
    <View style={styles.container}>
      <FlatList
      data={array}
      renderItem={renderItem}
      pagingEnabled
      keyExtractor={item => item}
      decelerationRate={'fast'}
      />
    </View>
  )
}
