import { View, Text, TextInput, StyleSheet, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import NavBarGeneral from '../../../components/general/navbar';
import UserItem from '../../../components/searchUsers/UserItem';
import { queryUsersByDisplayName } from '../../../components/services/user';


const SearchUsersScreen = () => {
    const [textInput, setTextInput] = useState('')
    const [searchUsers, setSearchUsers] = useState([])

    useEffect(() => {
        queryUsersByDisplayName(textInput)
        .then(setSearchUsers)
    }, [textInput])
    
  return (
    <SafeAreaView style={{flex: 1,
        backgroundColor: 'white'}}>
        <NavBarGeneral title = 'Search Users'/>
    <TextInput style={styles.search} placeholder="Search Users" placeholderTextColor={"gray"}
    onChangeText={setTextInput}>
    </TextInput>

    <FlatList 
    data = {searchUsers}
    renderItem = {UserItem}
    keyExtractor = {(item) => item.id}
    />
    </SafeAreaView>
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
      backgroundColor:"white",
      width:wp(90),
      height:50,
      marginLeft: wp(5),
      paddingHorizontal: wp(3),
      marginBottom: hp(2)
    },
    
})

export default SearchUsersScreen

