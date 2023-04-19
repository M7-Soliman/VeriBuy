import { View, Text, Image, TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ProfileItem = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={()=>{navigation.navigate("NewFeed", { item: item })}} style={{flex:1/2, height:(((wp(100)/2)-20)*16/9), backgroundColor:"#1d1d1d", marginTop: 20, marginLeft: 10, marginRight: 10, overflow: 'hidden', borderRadius:15, }}>
        <Image style={{flex:1}} source={{uri: item.media[1]}}/>
        <Text style = {{color:"white", alignSelf:"center"}}>{item.name}</Text>
        <Text style = {{color:"white", alignSelf:"center"}}>{item.price} EGP</Text>

    </TouchableOpacity>
  )
}

export default ProfileItem