import React, { useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './styles'
import { Dimensions } from 'react-native'
import PostSingle from '../../components/post'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect, useState} from 'react'
import { ShoppingCartIcon as Cartout} from "react-native-heroicons/outline";
import {useRef}from 'react'
import {Platform, StyleSheet} from 'react-native';
import {getFeed} from '../../components/services/posts'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function TvScreen () {

  const navigation = useNavigation();
  
  useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false,
      });
  }, [])

  const [posts, setPosts] = useState([])
  const mediaRefs= useRef([])

  useEffect(() => {
    
        getFeed().then(setPosts)
    
  }, [])



  
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
       <View style={styles_specific.container}>
          <PostSingle item={item} ref={PostSingleRef =>(mediaRefs.current[item.id]= PostSingleRef) }/>
       </View>
    )
    
  }
  return (

    
    <View style={styles.container}>
      <View className = "bg-black opacity-0">
    {/* <Cartout size = {(0.06)*(Dimensions.get('window').height)} color = "#fffff" opacity={100}></Cartout> */}
    </View>

      <FlatList
      data={posts}
      windowSize={4}//the number of rendered videos
      initialNumToRender={0}
      maxToRenderPerBatch={2}
      removeClippedSubviews
      viewabilityConfig={{
        itemVisiblePercentThreshold: 100
      }}
      renderItem={renderItem}
      pagingEnabled
      keyExtractor={item => item.id}
      decelerationRate={'fast'}
      onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  )
}

const styles_specific = StyleSheet.create({
  container: {
   
    flex: 1,
    ...Platform.select({
      ios: {
        height: 1*(Dimensions.get('window').height - hp(9.5)),
        backgroundColor: 'black',
      },
      android: {
        height: 0.957*(Dimensions.get('window').height),
        backgroundColor: 'black'
      },
      default: {
        // other platforms, web for example
        height: 1.053*(Dimensions.get('window').height),
      },
    }),
  },
});