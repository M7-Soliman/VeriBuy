import { Video} from 'expo-av'
import { View, Text, Image } from 'react-native'
import React, {forwardRef, useEffect, useImperativeHandle, useRef}from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Postdouble = forwardRef(({item}, parentRef) =>{
    const ref = useRef (null);
    const seconds = 3

  return (

    <View style={{flex:1/2, height:(((wp(100)/2)-20)*16/9), backgroundColor:"#1d1d1d", marginTop: 20, marginLeft: 10, marginRight: 10, overflow: 'hidden', borderRadius:15, }}>
        <Image style={{flex:1}} source={{uri: item.media[1]}}/>
        <Text style = {{color:"white", alignSelf:"center"}}>{item.name}</Text>
        <Text style = {{color:"white", alignSelf:"center"}}>{item.price} EGP</Text>
    </View>

  )
})

export default Postdouble