import { Video } from 'expo-av'
import { View, Text } from 'react-native'
import React, {forwardRef, useEffect, useImperativeHandle, useRef}from 'react'
import styles from './styles'

export const PostSingle = forwardRef((props, parentRef) =>{
    const ref = useRef (null);
    useImperativeHandle(parentRef,()=> ({
        play,
        unload, 
        stop
    }))

    useEffect(()=>{
        
        return() => unload();
        
    }, [])


    const play = async () =>{
        if(ref.current == null){
            return;
        }
        const status = await ref.current.getStatusAsync();
        if(status?.isPlaying){
            return;
        }
        try{
            await ref.current.playAsync();

        }catch(e){
            console.log(e)
        }

        
    }
    const stop = async () =>{
        if(ref.current == null){
            return;
        }
        const status = await ref.current.getStatusAsync();
        if(!status?.isPlaying){
            return;
        }
        try{
            await ref.current.stopAsync();

        }catch(e){
            console.log(e)
        }

        
    }
    const unload = async () =>{
        if(ref.current == null){
            return;
        }
        
        
        try{
            await ref.current.unloadAsync();

        }catch(e){
            console.log(e)
        }

        
    }
  return (

    
      <Video
      ref={ref} 
      style={styles.container}
      resizeMode="cover"
      shouldPlay={true}
      isLooping
      source={{uri:'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4' }}/>
    
  )
})

export default PostSingle