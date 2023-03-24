import { View, Text, FlatList, StyleSheet} from 'react-native'
import React, { useRef } from 'react'
import styles from './styles'
import { Dimensions } from 'react-native'
import PostSingleNew from '../../components/postnew'

const NewFeed = () => {
    const mediaRefs = useRef([])



    const array = [1,2,3,4,5,6]

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
            <PostSingleNew ref ={PostSingleRef => (mediaRefs.current[item] = PostSingleRef)} />
        </View>
        )
    }

  return (
    <View style={styles.container}>
        <FlatList style ={{backgroundColor:"#1d1d1d"}}
            windowSize = {1}
            initialNumToRender = {0}
            // maxToRenderPerBatch = {2}
            removeClippedSubviews
            viewabilityConfig={{
                itemVisiblePercentThreshold: 100
            }}
            data = {array}
            renderItem={renderItem}
            pagingEnabled
            keyExtractor={item => item}
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
