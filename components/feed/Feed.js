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
          <Postdouble item={item} ref={PostSingleRef =>(mediaRefs.current[item.id]= PostSingleRef) }/>
      </View>
    )
    
  }

  return (
    <View style={{backgroundColor:"white"}}>
      <View className = "bg-black opacity-0">
    {/* <Cartout size = {(0.06)*(Dimensions.get('window').height)} color = "#fffff" opacity={100}></Cartout> */}
    </View>
    <Items>

    </Items>

      <FlatList 
      data={posts}
      windowSize={4}//the number of rendered videos
      initialNumToRender={4}
      numColumns={2}
      maxToRenderPerBatch={2}
      removeClippedSubviews
      renderItem={renderItem}
      // pagingEnabled
      keyExtractor={item => item.id}
      onViewableItemsChanged={onViewableItemsChanged.current}

      />
    </View>
  )
}
const styles_specific = StyleSheet.create({
    container: {
      flex:1/2, height:(((wp(100)/2)-14)*16/9), backgroundColor:"black", marginTop: 10, marginLeft: 7, marginRight: 7, overflow: 'hidden', borderRadius:10,
        },
    },
  );

export default Feed