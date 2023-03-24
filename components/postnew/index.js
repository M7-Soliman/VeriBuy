import { View, Text } from 'react-native'
import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { Video } from 'expo-av'
import styles from '../post/styles'

export const PostSingleNew = forwardRef(({item}, parentRef) => {
    const ref = useRef(null);
    useImperativeHandle(parentRef, ()=>({
        play,
        unload, 
        stop
    }))

    useEffect(() => {
      return () => unload();
    }, [])
    

    const play = async () => {
        if (ref.current == null){
            return;
        }
        const staus = await ref.current.getStatusAsync();
        if (staus?.isPlaying){
            return
        }
        try{
        await ref.current.playAsync()
        }catch(e){
            console.log(e)
        }
    } 
    const stop = async () => {
        if (ref.current == null){
            return;
        }
        const staus = await ref.current.getStatusAsync();
        if (!staus?.isPlaying){
            return
        }
        try{
        await ref.current.stopAsync()
        }catch(e){
            console.log(e)
        }
    }
    const unload = async () => {
        if (ref.current == null){
            return;
        }
        try{
        await ref.current.unloadAsync()
        }catch(e){
            console.log(e)
        }
    } 

  return (

        <Video style = {styles.container}
        ref = {ref}
        resizeMode="cover" // use cover to make it scale
        // shouldPlay={true}
        isLooping = {true}
        source ={{uri: item.media[0]}}/>
  )
})

export default PostSingleNew