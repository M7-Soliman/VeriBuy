import { View, Text, FlatList, StyleSheet} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles'
import { Dimensions } from 'react-native'
import PostSingleNew from '../../components/postnew'
import { getFeed } from '../../components/services/posts'

const NewFeed = () => {
    const [posts, setPosts] = useState([])
    const mediaRefs = useRef([])



    useEffect(() => {
        getFeed().then(setPosts)
    }, [])
    

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
        <View style={[{flex:1, height: 1*(Dimensions.get('window').height)}, index % 2 == 0 ? {backgroundColor:"blue"}:{backgroundColor:"pink"} ]}>
            <PostSingleNew item={item} ref ={PostSingleRef => (mediaRefs.current[item.id] = PostSingleRef)} />
        </View>
        )
    }

  return (
    <View style={styles.container}>
        <FlatList style ={{backgroundColor:"#1d1d1d"}}
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

export default NewFeed
