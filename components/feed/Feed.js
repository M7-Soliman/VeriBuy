import { View, Text, FlatList, StyleSheet} from 'react-native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { getFeed } from '../services/posts';
import { Dimensions } from 'react-native'
import Postdouble from '../posthome/Postdouble';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Items from '../Categories';
import _ from 'lodash';

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
    getFeed().then(res => {
      const shuffledNewData = _.shuffle(res);
      const modifiedRes = shuffledNewData.map((item, index) => ({
        ...item,
        id: `${item.id}_${index}`,
      }));
      setPosts([...posts, ...modifiedRes]);
    })
  }, [currentPage])


  //   useEffect(() => {
  //   getFeed().then(res => {
  //     const shuffledNewData = _.shuffle(res);
  //     const newDataWithId = shuffledNewData.map((item, index) => ({ ...item, id: `${currentPage}-${index}` }));
  //     setPosts([...posts, ...newDataWithId])})
  // }, [currentPage])



  const loadMore = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <View style={{height:950}}>
        <FlatList  
        numColumns={2}
        removeClippedSubviews
        data = {posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (<Postdouble item={item}/>)}
        onEndReached={loadMore}
        contentContainerStyle={{ paddingBottom: 50 }} // Add this line
        />
    </View>
  )
}
const styles_specific = StyleSheet.create({
    container: {
      flex:1/2, height:(((wp(100)/2)-20)*16/9), backgroundColor:"#1d1d1d", marginTop: 20, marginLeft: 10, marginRight: 10, overflow: 'hidden', borderRadius:15, 
        },
    },
  );

export default Feed