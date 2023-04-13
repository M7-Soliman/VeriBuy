import { View, Text, FlatList, StyleSheet} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles'
import { Dimensions } from 'react-native'
import PostSingleNew from '../../components/postnew'
import { getFeed } from '../../components/services/posts'
import _ from 'lodash';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';


const NewFeed = () => {
    const [posts, setPosts] = useState([])
    const mediaRefs = useRef([])

    const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    getFeed().then(res => {
      // const shuffledNewData = _.shuffle(res);
      const newDataWithId = res.map((item, index) => ({ ...item, id: `${currentPage}-${index}` }));
      setPosts([...posts, ...newDataWithId])})
  }, [currentPage])

    const onViewableItemsChanged = useRef(({changed}) =>{
        changed.forEach(element => {
            const cell = mediaRefs.current[element.key]
            if (cell){
                if(element.isViewable){
                    cell.play();
                }else{
                    cell.stop();
                }
            }  
        });
    })

    const renderItem = ({item, index}) => {
        return (
        <View style={styles_specific.container}>
            <PostSingleNew item={item} key={`${item.id}-${index}`} ref ={PostSingleRef => (mediaRefs.current[item.id] = PostSingleRef)} />
        </View>
        )
    }

  const loadMore = _.debounce(() => {
    setCurrentPage(currentPage + 1);
  }, 500); 


  return (
    <View style={styles.container}>
      <NativeViewGestureHandler disallowInterruption={true}>
        <FlatList style ={{backgroundColor:"black"}}
            windowSize = {4}
            initialNumToRender = {0}
            maxToRenderPerBatch = {4}
            removeClippedSubviews
            viewabilityConfig={{
                itemVisiblePercentThreshold: 100
            }}
            data = {posts}
            
            renderItem={renderItem}
            pagingEnabled
            keyExtractor={item => item.id}
            onViewableItemsChanged ={onViewableItemsChanged.current}
            onEndReached={loadMore}
            onEndReachedThreshold={0.1}
        
        />
        </NativeViewGestureHandler>
    </View>
  )
}
const styles_specific = StyleSheet.create({
    container: {
     
      flex: 1,
      ...Platform.select({
        ios: {
          height: 1*(Dimensions.get('window').height),
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

export default NewFeed
