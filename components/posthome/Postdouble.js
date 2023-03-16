import { Video } from 'expo-av'
import { View, Text } from 'react-native'
import React, {forwardRef, useEffect, useImperativeHandle, useRef}from 'react'

export const Postdouble = forwardRef(({item}, parentRef) =>{
    const ref = useRef (null);
    const seconds = 3

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
      style={{flex:1, borderRadius:10}}
      resizeMode="cover"
      shouldPlay={true}
      isLooping = {true}
      usePoster
      posterSource={{uri: item.media[1]}}
      posterStyle={{resizeMode: 'cover',height:'100%'}}
      source={{uri: item.media[0]}}
      isMuted={true}
      
      />

  )
})

export default Postdouble