import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList, StyleSheet, Platform, Dimensions } from 'react-native';
import PostSingle from '../../components/post';
import { useNavigation } from '@react-navigation/native';
import { getFeed } from '../../components/services/posts';
import _ from 'lodash';

const WINDOW_HEIGHT = Dimensions.get('window').height;

export default function TvScreen() {
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const mediaRefs = useRef({});

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    getFeed().then(res => {
      const shuffledNewData = _.shuffle(res);
      const newDataWithId = shuffledNewData.map((item, index) => ({ 
        ...item, 
        id: `${currentPage}-${index}` 
      }));
      setPosts(prevPosts => [...prevPosts, ...newDataWithId]);
    });
  }, [currentPage]);

  const loadMore = _.debounce(() => {
    setCurrentPage(prev => prev + 1);
  }, 500);

  const onViewableItemsChanged = useRef(({ changed }) => {
    changed.forEach(element => {
      const cell = mediaRefs.current[element.key];
      if (cell) {
        if (element.isViewable) {
          cell.play();
        } else {
          cell.stop();
        }
      }
    });
  });

  const renderItem = ({ item, index }) => (
    <View style={styles.postContainer}>
      <PostSingle 
        item={item} 
        key={`${item.id}-${index}`}
        ref={ref => (mediaRefs.current[item.id] = ref)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        windowSize={4}
        initialNumToRender={0}
        maxToRenderPerBatch={4}
        removeClippedSubviews
        viewabilityConfig={{
          itemVisiblePercentThreshold: 100
        }}
        pagingEnabled
        decelerationRate="fast"
        onViewableItemsChanged={onViewableItemsChanged.current}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e3135',
    ...Platform.select({
      ios: {
        height: WINDOW_HEIGHT,
      },
      android: {
        height: WINDOW_HEIGHT * 0.957,
      },
      default: {
        height: WINDOW_HEIGHT * 1.053,
      },
    }),
  },
  postContainer: {
    flex: 1,
  }
});