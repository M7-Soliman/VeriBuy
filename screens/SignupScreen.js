import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect, useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { register } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { saveUserField } from '../components/services/user';


const SignupScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [Success, SetSuccess] = useState(0)

    const dispatch = useDispatch()

    const handleRegister =() => {
      dispatch(register(email, password)).then(()=> {
      })
      .catch(()=>{
        console.log('signup unsuccessful')
        SetSuccess(1)
      })
    }

    const handleData = () => {
      saveUserField("phoneNumber", phone);
      saveUserField("displayName", name);    
    }

    return (

      <ScrollView style = {styles.maincolor}>
        <View>

            <TextInput style={styles.tinput} placeholder="Name" keyboardType="Default"
            onChangeText={(text) => setName(text)}/>
{/* 
            <TextInput style={styles.tinput} placeholder="Phone" keyboardType="Default"
            onChangeText={(text) => setPhone(text)}/>
 */}
            <TextInput style={styles.tinput} placeholder="Email" keyboardType="Default"
            onChangeText={(text) => setEmail(text)}/>

            <TextInput style={styles.tinput} placeholder="Password" keyboardType="Default"
            onChangeText={(text) => setPassword(text)} secureTextEntry={true}/>

            {Success == 1?
                <Text style={ styles.redtext} > Use a valid email & password should be greater than 6 charechters</Text>
                :
                <Text style={ styles.redtext}> </Text>
            }

            <TouchableOpacity onPress={()=> handleRegister()} style = {styles.buttonright} className="flex-row">
            <View style={{width: wp('40') , height: wp('12'), backgroundColor:"#bd31fe"}} className="rounded-3xl">
                <Text style={ styles.title} className="Bold">Sign Up</Text>
            </View>

            </TouchableOpacity >

            <TouchableOpacity onPress={()=>{navigation.navigate("SigninScreen")}} style = {styles.buttonleft} className="flex-row">
            <View style={{width: wp('55') , height: wp('12'), backgroundColor:"#26da76"}} className="rounded-3xl">
                <Text style={ styles.title2} className="Bold">Sign In</Text>
            </View>
            </TouchableOpacity>

                <Text style={ styles.textbetween} className="Bold">Already Registered? </Text>

 
            
        </View>
      </ScrollView>
    )
}


const styles = StyleSheet.create({

    vbuylogo:{
        bottom: hp('-15'),
        left: wp('50')-(hp('20')/2),
        width: hp('20') , height: hp('20')
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
    fontWeight: 'bold' },

    redtext :{
      position: 'absolute',
      color: 'red',
      bottom: hp('16'),
      fontSize: hp(1.3),
      left: wp(50) - 190,
    },

    title2: {
        textAlign: 'center',
          position: "relative",
          color:'black',
          marginTop: wp('12')/4,
          fontSize: hp(2.4),
        fontWeight: 'bold' },

    textbetween:{
        textAlign: 'center',
        position: "relative",
        color:'black',
        fontSize: hp(1.9),
        bottom: hp('-24')},
  
      
      buttonright: {
      position: "relative",
      bottom: hp('-20'),
      left: wp('50')-(wp('40')/2),
        marginBottom: hp(20) }, 

      buttonleft: {
        position: "relative",
        bottom: hp('-34'),
        left: wp('50')-(wp('55')/2)},

      // tinput:{
      //   position: "relative",
      //   bottom: hp('6'),
      //   left: wp('49')-(wp('70')/2), 
      //   borderWidth: 1,
      //   width: wp('70'), 
      //   height: wp('10'),
      //   marginBottom: hp(1),
      //   paddingHorizontal: wp(3.5),
      //   color: "white",
          
      //   fontWeight: "normal",
      //   borderBottomColor: "white"
      // },

      tinput:{
      position: "relative",
      bottom: hp('-15'),
      left: wp('50')-(wp('70')/2), 
      borderColor: 'black',
      borderWidth: 0.5,
      width: wp('70'), 
      height: hp('6'),
      borderRadius: 13,
      marginBottom: hp(1.5),
      paddingHorizontal: wp(3),

      }
  
  })

export default SignupScreen



