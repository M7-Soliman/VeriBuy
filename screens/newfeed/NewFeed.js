import { View, Text, FlatList, StyleSheet, StatusBar, Platform} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles'
import { Dimensions } from 'react-native'
import PostSingleNew from '../../components/postnew'
import { getFeed } from '../../components/services/posts'
import _ from 'lodash';
import { useRoute } from '@react-navigation/native';

const NewFeed = () => {
    const [posts, setPosts] = useState([])
    const mediaRefs = useRef([])

    // const [currentPage, setCurrentPage] = useState(1)
    
    const route = useRoute();
    const { item } = route.params || {};
    
    const currentPageRef = useRef(1)
    const initialDataRef = useRef([])

    useEffect(() => {
      getFeed().then(res => {
        const shuffledData = _.shuffle(res);
        initialDataRef.current = shuffledData.map((item, index) => ({ ...item, id: `0-${index}` }));
        if (item) {
          setPosts([item, ...initialDataRef.current]);
        } else {
          setPosts(initialDataRef.current);
        }
      });
    }, [item]);
    
    
  

  // useEffect(() => {
  //   getFeed().then(res => {
  //     // const shuffledNewData = _.shuffle(res);
  //     const newDataWithId = res.map((item, index) => ({ ...item, id: `${currentPage}-${index}` }));
  //     setPosts([...posts, ...newDataWithId])})
  // }, [currentPage])

  
// useEffect(() => {
//   getFeed().then(res => {
//     const shuffledData = _.shuffle(res);
//     const newDataWithId = shuffledData.map((item, index) => ({ ...item, id: `${currentPage}-${index}` }));
//     if (item) {
//       setPosts([item, ...newDataWithId, ...posts]);
//     } else {
//       setPosts([...posts, ...newDataWithId]);
//     }
//   });
// }, [currentPage, item, posts]);

// useEffect(() => {
//   getFeed().then((res) => {
//     const shuffledData = _.shuffle(res);
//     const newDataWithId = shuffledData.map((item, index) => ({ ...item, id: `${currentPage}-${index}` }));
//     if (item) {
//       setPosts([item, ...newDataWithId]);
//     } else {
//       setPosts([...newDataWithId]);
//     }
//   });
// }, [currentPage, item]);

// useEffect(() => {
//   getFeed().then(res => {
//     const shuffledData = _.shuffle(res);
//     const newDataWithId = shuffledData.map((item, index) => ({ ...item, id: `${currentPage}-${index}` }));
//     if (item) {
//       setPosts([item, ...newDataWithId, ...posts]);
//     } else {
//       setPosts([...posts, ...newDataWithId]);
//     }
//   });
// }, [currentPage, item, posts]);

// useEffect(() => {
//   if(currentPage > 1) {  // <-- added this condition to prevent initial load more call
//     getFeed().then(res => {
//       const shuffledData = _.shuffle(res);
//       const newDataWithId = shuffledData.map((item, index) => ({ ...item, id: `${currentPage}-${index}` }));
//       setPosts([...posts, ...newDataWithId]);
//     });
//   }
// }, [currentPage]);



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

  // const loadMore = _.debounce(() => {
  //   setCurrentPage(currentPage + 1);
  // }, 500); 

  const loadMore = _.debounce(() => {
    currentPageRef.current++;
    const newDataWithId = initialDataRef.current.map((item, index) => ({ ...item, id: `${currentPageRef.current}-${index}` }));
    setPosts([...posts, ...newDataWithId]);
  }, 500);


  return (
    <View style={styles.container}>
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
    </View>
  )
}
const styles_specific = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        height: Dimensions.get('window').height,
        backgroundColor: 'black',
      },
      android: {
        height: Dimensions.get('window').height + StatusBar.currentHeight,
        backgroundColor: 'black',
      },
      default: {
        // other platforms, web for example
        height: Dimensions.get('window').height,
      },
    }),
  },
});

export default NewFeed
