import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';

import { MagnifyingGlassIcon  as Searchin} from "react-native-heroicons/solid";
import { PencilIcon as Pensol} from "react-native-heroicons/outline";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


const UpperPart = ({user}) => {
  
  const auth = useSelector(state => state.auth)
  const navigation = useNavigation()
  return (
        <View style={{borderBottomColor:"gray", borderBottomWidth:1}}>
             <View className="flex-row" style={{alignSelf:"center"}}>
                <View style={{marginTop:hp(4)}}>
             <Text style={styles.follow}>Followers</Text>
             <Text style={styles.follow}>0</Text>
                </View>
                <Avatar.Icon style={styles.avatar} color="white" size={88} icon={"account"} />
                        
                <View style={{marginTop:hp(4)}}>
             <Text style={styles.follow}>Following</Text>
             <Text style={styles.follow}>0</Text>
                </View>
            </View>

            <Text style={styles.name}>{user.displayName}</Text>

            <Text style={styles.about}>Bio</Text>

            <View className="flex-row">

            <TouchableOpacity style={styles.search} className="flex-row">
                  <Searchin style={styles.icon} size = {32} color = "white"/>
                  <Text style={{color:"white", fontSize:wp(3.6)}}> Search Users</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=> navigation.navigate('editProfile')}
            style={styles.edit} className="flex-row">
                  <Pensol style={styles.icon} size = {32} color = "white"/>
                  <Text style={{color:"white", fontSize:wp(3.6)}}>  Edit Profile</Text>
            </TouchableOpacity>


            </View>
            
        </View>
      )
    
}

const styles = StyleSheet.create({
    search: {
      marginTop:hp(5),
      alignItems: "center",
      alignContent:"center",
      borderWidth:1,
      borderColor:'black',
      borderRadius:22,
      backgroundColor:"black",
      width:wp(40),
      height:50,
      marginLeft: wp(7),
      marginBottom: hp(2)
    },
    
    edit: {
        marginTop:hp(5),
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
    about: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 7,
    },
    follow: {
        fontSize: 14,
        textAlign: "center",
        marginTop: 7,
        fontWeight:"bold"
    },
    avatar: {
        alignSelf: "center",
        backgroundColor:"black",
        marginTop: 15,
        marginLeft:wp(10),
        marginRight:wp(10),

    }

    
  });
export default UpperPart