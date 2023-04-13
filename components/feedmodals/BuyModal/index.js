import { View, Text, Touchable, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { buyAction } from '../../services/posts';
import { useSelector } from 'react-redux';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';

const BuyNow = ({post, user}) => {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [showView, setShowView] = useState(false);

    const [confirmed, setConfirmed] = useState(false)
    const currentUser = useSelector((state) => state.auth.currentUser)
    

    useEffect(() => {
        let timeoutId;
    
        if (confirmed) {
          // Set showView to true after 2 seconds
          timeoutId = setTimeout(() => {
            setShowView(true);
          }, 2000);
        } else {
          setShowView(false);
        }
    
        // Clear timeout on component unmount
        return () => clearTimeout(timeoutId);
      }, [confirmed]);
    
    
return (
  <NativeViewGestureHandler disallowInterruption={true}>
    <View>
        <TextInput style={styles.tinput} placeholderTextColor='Black' underlineColorAndroid='white'placeholder="Name/الاسم" keyboardType="Default"
            onChangeText={(text) => setName(text)}/>
        <TextInput style={styles.tinput} placeholderTextColor='Black' underlineColorAndroid='white'placeholder="Address/العنوان" keyboardType="Default"
            onChangeText={(text) => setAddress(text)}/>
        <TextInput style={styles.tinput} placeholderTextColor='Black' underlineColorAndroid='white'placeholder="Phone/الهاتف" keyboardType="Default"
            onChangeText={(text) => setPhone(text)}/>
        


            {confirmed == showView?
            <>
            <TouchableOpacity style={{alignSelf:"center", bottom:hp(-20)}} onPress={()=>setConfirmed(true)} onPressIn={()=> buyAction(currentUser.uid, name, address, phone, post.pid, post.media, user.uid, post.price)}>
            <View style={{width: wp('50') , height: wp('12'), backgroundColor:"#26da76"}} className="rounded-3xl">
                <Text style={ styles.title} className="Bold">Confirm Order!</Text>
            </View>
            </TouchableOpacity>
            </>
                :
                <>
                <View style={{alignSelf:"center", bottom:hp(-20)}} >
                <View style={{width: wp('50') , height: wp('12'), backgroundColor:"#bd31fe"}} className="rounded-3xl">
                    <Text style={ styles.title} className="Bold">Confirmed!</Text>
                </View>
                </View>
                </>
            }


    </View>
    </NativeViewGestureHandler>
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

export default BuyNow