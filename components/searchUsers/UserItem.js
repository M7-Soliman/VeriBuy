import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const UserItem = ({item}) => {
  return (
    <TouchableOpacity style = {{flex:1,flexDirection:"row", padding:11, alignItems:"center"}}>
      <Text style={{flex:1, fontSize:16}}>{item.displayName}</Text>
      <Image style= {{backgroundColor:"black", height: 40, width: 40, borderRadius:20}} source ={{uri: item.photoURL}}/>
    </TouchableOpacity>
  )
}

export default UserItem