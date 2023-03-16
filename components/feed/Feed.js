import { View, Text, FlatList, StyleSheet} from 'react-native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { getFeed } from '../services/posts';
import { Dimensions } from 'react-native'
import Postdouble from '../posthome/Postdouble';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Items from '../Categories';

const Feed = () => {

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
    getFeed().then(res => {setPosts([...posts, ...res])})
  }, [currentPage])


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
          <Postdouble item={item} key={`${item.id}-${index}`} ref={PostSingleRef =>(mediaRefs.current[item.id]= PostSingleRef) }/>
      </View>
    )
    
  }

  const loadMore = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <View style={{backgroundColor:"#112024"}}>
      <View className = "bg-black opacity-0">
    {/* <Cartout size = {(0.06)*(Dimensions.get('window').height)} color = "#fffff" opacity={100}></Cartout> */}
    </View>
    {/* <Items>

    </Items> */}

      <FlatList
      data={posts}
      windowSize={4}//the number of rendered videos
      initialNumToRender={4}
      numColumns={2}
      maxToRenderPerBatch={2}
      removeClippedSubviews
      renderItem={renderItem}
      // pagingEnabled
      keyExtractor={(item, index) => `${item.id}-${index}`}
      onViewableItemsChanged={onViewableItemsChanged.current}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}

      

      />
    </View>
  )
}
const styles_specific = StyleSheet.create({
    container: {
      flex:1/2, height:(((wp(100)/2)-20)*16/9), backgroundColor:"#1e3135", marginTop: 20, marginLeft: 10, marginRight: 10, overflow: 'hidden', borderRadius:15, 
        },
    },
  );

export default Feed