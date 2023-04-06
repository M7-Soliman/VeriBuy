import { View, Text, Touchable, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { buyAction, reportAction } from '../../services/posts';
import { useSelector } from 'react-redux';


const Options = ({post, user}) => {
    const [report, setReport] = useState(false);
    const [issue, setIssue] = useState("");
    const currentUser = useSelector((state) => state.auth.currentUser)
    console.log(post)
  return (
    <View>
        { !report? 
        <>
        <TouchableOpacity  onPress={()=>setReport(true)} style={{alignItems:"center", backgroundColor:"#1d1d1d", borderColor:"#1d1d1d", borderWidth:0, height: hp(5), borderRadius:20, paddingTop: 10, width: wp(80), alignSelf:"center", bottom:hp(-25)}}>
              <Text style={{color:"white"}}> Report </Text>
        </TouchableOpacity>
        </>
        :
        <>
        <TextInput style={styles.tinput} placeholderTextColor='Black' underlineColorAndroid='white'placeholder="Report Issue" keyboardType="Default"
            onChangeText={(text) => setIssue(text)}/>

        <TouchableOpacity onPressIn={()=> reportAction(currentUser.uid, issue, post.pid, user.uid)} onPress={()=>setReport(false)} style={{alignItems:"center", backgroundColor:"#1d1d1d", borderColor:"#1d1d1d", borderWidth:0, height: hp(5), borderRadius:20, paddingTop: 10, width: wp(80), alignSelf:"center", bottom:hp(-50)}}>
              <Text style={{color:"white"}}> Send Report </Text>
        </TouchableOpacity>
        </>
        }
    </View>
  )
}
const styles = StyleSheet.create({

    photo:{
        bottom: hp('-5'),
        left: wp('0')-(hp('20')/2),
        width: hp('100') , height: hp('22')
    },
    vbuylogo:{
      bottom: hp('25'),
      left: wp('45')-(hp('20')/2),
      width: hp('25') , height: hp('25'), 
      shadowColor: 'white',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  toptext:{
        
    position: "relative",
    color:'white',
    fontSize: hp(5),
    bottom: hp('-14'),
    left: wp('42')-(wp('40')/2), 
    fontWeight: "bold"
    
  },
  toptext2:{
        
    position: "relative",
    color:'black',
    fontSize: hp(2),
    bottom: hp('-15'),
    left: wp('40')-(wp('40')/2),
    fontWeight: "normal"
    
  },
  downtext:{
        
    position: "relative",
    color:'white',
    fontSize: hp(2),
    bottom: hp('-55'),
    left: wp('52')-(wp('40')/2),
    fontWeight: "normal"
    
  },
  mainbox:{
    width: wp('100') ,
     height: hp('85'), 
     backgroundColor:"black",
    //  bottom: hp('21')
    
   
},

    redtext :{
      position: 'absolute',
      color: 'red',
      bottom: hp('30'),
      left: wp(54) - 99,
    },

    maincolor: {
        backgroundColor: "#FFFFFF"

    },
    title: {
    textAlign: 'center',
      position: "relative",
      color:'white',
      marginTop: wp('12')/4,
      fontSize: hp(2.4),
    fontWeight: 'bold', },

    title2: {
        textAlign: 'center',
          position: "relative",
          color:'white',
          marginTop: wp('6')/4,
          fontSize: hp(2),
       },

    
  
      
      buttonright: {
      position: "relative",
      bottom: hp('2'),
      left: wp('50')-(wp('40')/2),
        marginBottom: hp(62) }, 

      buttonleft: {
        position: "relative",
        bottom: hp('48'),
        left: wp('60')-(wp('40')/2)
      },

      tinput:{
        position: "relative",
        bottom: hp('-5'),
        left: wp('49')-(wp('70')/2), 
        borderWidth: 3,
        width: wp('70'), 
        height: wp('10'),
        marginBottom: hp(1),
        paddingHorizontal: wp(3.5),
        color: "black",
        fontWeight: "normal", 
        borderColor:"white",
        borderBottomColor:"gray"

      }
  
  })

export default Options