import { View, Text, Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import React from 'react'

const ProfileItem = ({item}) => {
  return (
    <View style={{flex:1/2, height:(((wp(100)/2)-20)*16/9), backgroundColor:"black", marginTop: 10, marginLeft: 10, marginRight: 10, borderRadius:30, overflow: 'hidden',
  }}>
        <Image style={{flex:1}} source={{uri: item.media[1]}}/>
    </View>
  )
}

export default ProfileItem