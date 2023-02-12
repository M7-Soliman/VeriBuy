import React from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './styles'
import { Dimensions } from 'react-native'
import PostSingle from '../../components/post'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect, useState} from 'react'
import { ShoppingCartIcon as Cartout} from "react-native-heroicons/outline";
import {useRef}from 'react'

export default function TvScreen () {

  const navigation = useNavigation();
    
  useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false,
      });
  }, [])

  const mediaRefs= useRef([])
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const onViewableItemsChanged = useRef(({changed}) =>{
      changed.forEach(element => {
        const cell= mediaRefs.current[element.key]
        if(cell){
          console.log('onViewableItemsChanged',element, element.isViewable)
          if(element.isViewable){
            cell.play()
          }else{
            cell.stop();
          }
        }
      });
  })
  const renderItem = ({item, index})=>{
    return (
       <View style={[{ flex: 1, height: 0.994*(Dimensions.get('window').height)},index % 2 == 0 ? {backgroundColor: 'black'} : {backgroundColor: 'black'}]}>
          <PostSingle ref={PostSingleRef =>(mediaRefs.current[item]= PostSingleRef) }/>
       </View>
    )
    
  }
  return (

    
    <View style={styles.container}>
      <View className = "bg-black opacity-0">
    <Cartout size = {(0.06)*(Dimensions.get('window').height)} color = "#fffff" opacity={100}></Cartout>
    </View>

      <FlatList
      data={array}
      windowSize={4}//the number of rendered videos
      initialNumToRender={0}
      maxToRenderPerBatch={2}
      removeClippedSubviews
      viewabilityConfig={{
        itemVisiblePercentThreshold: 100
      }}
      renderItem={renderItem}
      pagingEnabled
      keyExtractor={item => item}
      decelerationRate={'fast'}
      onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  )
}
