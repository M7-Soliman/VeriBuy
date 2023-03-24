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
import _ from 'lodash';

export default function TvScreen () {

  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState(1)

  useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false,
      });
  }, [])

  const [posts, setPosts] = useState([])
  const mediaRefs= useRef([])

  useEffect(() => {
    getFeed().then(res => {
      const shuffledNewData = _.shuffle(res);
      const newDataWithId = shuffledNewData.map((item, index) => ({ ...item, id: `${currentPage}-${index}` }));
      setPosts([...posts, ...newDataWithId])})
  }, [currentPage])


  const loadMore = _.debounce(() => {
      setCurrentPage(currentPage + 1);
    }, 500); 
  
  
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
          <PostSingle item={item} key={`${item.id}-${index}`} ref={PostSingleRef =>(mediaRefs.current[item.id]= PostSingleRef) }/>
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
      maxToRenderPerBatch={4}
      removeClippedSubviews
      viewabilityConfig={{
        itemVisiblePercentThreshold: 100
      }}
      renderItem={renderItem}
      pagingEnabled
      keyExtractor={(item, index) => `${item.id}-${index}`}
      decelerationRate={'fast'}
      onViewableItemsChanged={onViewableItemsChanged.current}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}
      />
    </View>
  )
}

const styles_specific = StyleSheet.create({
  container: {
   
    flex: 1,
    ...Platform.select({
      ios: {
        height: 1*(Dimensions.get('window').height),
        backgroundColor: '#1e3135',
      },
      android: {
        height: 0.957*(Dimensions.get('window').height),
        backgroundColor: '#1e3135'
      },
      default: {
        // other platforms, web for example
        height: 1.053*(Dimensions.get('window').height),
      },
    }),
  },
});