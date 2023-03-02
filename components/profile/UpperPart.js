import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';

import { MagnifyingGlassIcon  as Searchin} from "react-native-heroicons/solid";
import { PencilIcon as Pensol} from "react-native-heroicons/outline";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const UpperPart = ({user}) => {
  return (
        <View>
             <View className="flex-row"></View>
            <Avatar.Icon style={styles.avatar} color="white" size={88} icon={"account"}/>
            <Text style={styles.name}>{user.displayName}</Text>


            <View className="flex-row">

            <TouchableOpacity style={styles.search} className="flex-row">
                  <Searchin style={styles.icon} size = {32} color = "white"/>
                  <Text style={{color:"white", fontSize:wp(3.6)}}> Search Users</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.edit} className="flex-row">
                  <Pensol style={styles.icon} size = {32} color = "white"/>
                  <Text style={{color:"white", fontSize:wp(3.6)}}>  Edit Profile</Text>
            </TouchableOpacity>


            </View>
            
        </View>
      )
    
}

const styles = StyleSheet.create({
    search: {
      marginTop:hp(3),
      alignItems: "center",
      alignContent:"center",
      borderWidth:1,
      borderColor:'black',
      borderRadius:22,
      backgroundColor:"black",
      width:wp(40),
      height:50,
      marginLeft: wp(7)
    },
    edit: {
        marginTop:hp(3),
        alignItems: "center",
        alignContent:"center",
        borderWidth:1,
        borderColor:'#26da76',
        borderRadius:22,
        backgroundColor:"#26da76",
        width:wp(40),
        height:50,
        marginLeft: wp(7)
      },
    icon: {
        marginLeft:wp(4)
      },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
        marginTop: 7
    },
    avatar: {
        alignSelf: "center",
        backgroundColor:"black",
        marginTop: 15
    }

    
  });
export default UpperPart