import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ProfileItem from './ProfileItem'

const LowerPart = ({posts}) => {
  return (
    <View>
        <FlatList  style={{paddingBottom: 20}}
        numColumns={2}
        removeClippedSubviews
        data = {posts}
        keyExtractor = {(item) => item.id}
        renderItem={({item}) => (<ProfileItem item={item}/>)}
        
        />
    </View>
  )
}

export default LowerPart