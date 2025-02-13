import { View, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { getFeed } from '../services/posts';
import Postdouble from '../posthome/Postdouble';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import _ from 'lodash';

const Feed = () => {
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const mediaRefs = useRef([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    getFeed().then(res => {
      const shuffledNewData = _.shuffle(res);
      const modifiedRes = shuffledNewData.map((item, index) => ({
        ...item,
        id: `${item.id}_${index}`,
      }));
      setPosts([...posts, ...modifiedRes]);
    });
  }, [currentPage]);

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        removeClippedSubviews
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Postdouble item={item} />}
        onEndReached={loadMore}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 950
  },
  listContainer: {
    paddingBottom: 50
  },
  postContainer: {
    flex: 1/2,
    height: ((wp(100)/2)-20) * 16/9,
    backgroundColor: "#1d1d1d",
    marginTop: 20,
    marginHorizontal: 10,
    overflow: 'hidden',
    borderRadius: 15
  }
});

export default Feed