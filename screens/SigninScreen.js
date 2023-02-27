import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect, useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions';

const SigninScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const [Success, SetSuccess] = useState(0)

    const dispatch = useDispatch()

    const handleLogin =() => {
      dispatch(login(email, password)).then(()=> {
        console.log('login successful')
      })
      .catch(()=>{
        console.log('login unsuccessful')
        SetSuccess(1)
      })
    }
    return (
      <ScrollView style = {styles.maincolor}>
        <View>

            <Image source={require("../assets/giphy.gif")} style = {styles.photo} className ="rounded-3xl"/>
            <Image source={require("../assets/LogoGraybg.jpeg")} style = {styles.vbuylogo} className ="rounded-3xl"/>
            <View style={{width: wp('100') , height: wp('10'), backgroundColor:"#26da76"}} className="rounded-3xl"/>
                
           

            <TextInput style={styles.tinput} placeholder="Email" keyboardType="Default"
            onChangeText={(text) => setEmail(text)}/>
            <TextInput style={styles.tinput} placeholder="Password" keyboardType="Default"
            onChangeText={(text) => setPassword(text)} secureTextEntry={true}/>


            <TouchableOpacity onPressIn={()=> handleLogin()} style = {styles.buttonright}  className="flex-row">
            <View style={{width: wp('40') , height: wp('12'), backgroundColor:"#26da76"}} className="rounded-3xl">
                <Text style={ styles.title} className="Bold">Sign In</Text>
            </View>
            </TouchableOpacity >

            {Success == 0?
                <Text style={ styles.redtext}> </Text>
                :
                <Text style={ styles.redtext} > Check your email and password </Text>
            }

            <TouchableOpacity onPressIn={()=>{navigation.navigate("SignupScreen")}} onPress={()=> SetSuccess(0)} style = {styles.buttonleft} className="flex-row">
            <View style={{width: wp('40') , height: wp('12'), backgroundColor:"#bd31fe"}} className="rounded-3xl">
                <Text style={ styles.title2} className="Bold">Sign Up</Text>
            </View>
            </TouchableOpacity>
                <Text style={ styles.textbetween} className="Bold">Not Registered Yet? </Text>

 
            
        </View>
      </ScrollView>
    )
}


const styles = StyleSheet.create({

    photo:{
        bottom: hp('-7'),
        left: wp('0')-(hp('20')/2),
        width: hp('100') , height: hp('25')
    },
    vbuylogo:{
      bottom: hp('10'),
      left: wp('45')-(hp('20')/2),
      width: hp('25') , height: hp('25'), 
      shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3
  },

    redtext :{
      position: 'absolute',
      color: 'red',
      bottom: hp('80'),
      left: wp(50) - 105,
    },

    maincolor: {
        backgroundColor: "#FFFFFF"

    },
    title: {
    textAlign: 'center',
      position: "relative",
      color:'black',
      marginTop: wp('12')/4,
      fontSize: hp(2.4),
    fontWeight: 'bold' },

    title2: {
        textAlign: 'center',
          position: "relative",
          color:'white',
          marginTop: wp('12')/4,
          fontSize: hp(2.4),
        fontWeight: 'bold' },

    textbetween:{
        textAlign: 'center',
        position: "relative",
        color:'blue',
        fontSize: hp(2.5),
        bottom: hp('50')},
  
      
      buttonright: {
      position: "relative",
      bottom: hp('2'),
      left: wp('50')-(wp('40')/2),
        marginBottom: hp(62) }, 

      buttonleft: {
        position: "relative",
        bottom: hp('60'),
        left: wp('50')-(wp('40')/2)},

      tinput:{
        position: "relative",
      bottom: hp('5'),
      left: wp('50')-(wp('70')/2), 
      borderColor: 'black',
      borderWidth: 0.5,
      width: wp('70'), 
      height: wp('11'),
      borderRadius: 13,
      marginBottom: hp(1),
      paddingHorizontal: wp(3),

      }
  
  })

export default SigninScreen



