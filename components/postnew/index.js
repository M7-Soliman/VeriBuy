import { View, Text } from "react-native";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { Video } from "expo-av";
import styles from "../post/styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useUser } from "../../hooks/useUser";
import PostSingleOverlay from "./overlay";
import { useRoute } from '@react-navigation/native';


export const PostSingleNew = forwardRef(({ item }, parentRef) => {
  const ref = useRef(null);


  // const user = useUser(item.creator)
  const { data: user, isLoading } = useUser(item.creator);
  // console.log("#################################")
  // console.log(user)

  const LoadingIndicator = () => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  };

  useImperativeHandle(parentRef, () => ({
    play,
    unload,
    stop,
  }));

  useEffect(() => {
    return () => unload();
  }, []);

  const play = async () => {
    if (ref.current == null) {
      return;
    }
    const staus = await ref.current.getStatusAsync();
    if (staus?.isPlaying) {
      return;
    }
    try {
      await ref.current.playAsync();
    } catch (e) {
      console.log(e);
    }
  };
  const stop = async () => {
    if (ref.current == null) {
      return;
    }
    const staus = await ref.current.getStatusAsync();
    if (!staus?.isPlaying) {
      return;
    }
    try {
      await ref.current.stopAsync();
    } catch (e) {
      console.log(e);
    }
  };
  const unload = async () => {
    if (ref.current == null) {
      return;
    }
    try {
      await ref.current.unloadAsync();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Video
        style={styles.container}
        ref={ref}
        resizeMode="cover" // use cover to make it scale
        // shouldPlay={true}
        isLooping={true}
        source={{ uri: item.media[0] }}
        usePoster
        posterSource={require("../../assets/loadtrans.gif")}
        posterStyle={{
          resizeMode: "cover",
          height: hp(6),
          width: hp(6),
          marginTop: hp(50) - hp(3),
          marginLeft: wp(50) - hp(3),
        }}
      />

      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <View>
          <PostSingleOverlay user={user} post={item} />
        </View>
      )}
    </>
  );
});

export default PostSingleNew;
