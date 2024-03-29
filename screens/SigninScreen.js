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
            
            <View style={styles.mainbox} className="rounded-3xl">
            <Text style={ styles.toptext} >WELCOME! </Text>
            <Text style={ styles.toptext2} >Connect, Sell, and Buy Verified Products </Text>
            <Text style={ styles.downtext} >Not registered yet? </Text>
            <Image source={require("../assets/logo.jpg")} style = {styles.vbuylogo} className ="rounded-3xl"/>
            <TextInput style={styles.tinput} placeholderTextColor='white' placeholder="Email" keyboardType="Default"
            onChangeText={(text) => setEmail(text)}/>
            <TextInput style={styles.tinput} placeholderTextColor='white' placeholder="Password" keyboardType="Default"
            onChangeText={(text) => setPassword(text)} secureTextEntry={true}/>


            <TouchableOpacity onPressIn={()=> handleLogin()} style = {styles.buttonright}  className="flex-row">
            <View style={{width: wp('40') , height: wp('12'), backgroundColor:"#26da76"}} className="rounded-3xl">
                <Text style={ styles.title} className="Bold">SIGN IN</Text>
            </View>
            </TouchableOpacity >

            {Success == 0?
                <Text style={ styles.redtext}> </Text>
                :
                <Text style={ styles.redtext} >Wrong email or password </Text>
            }

            <TouchableOpacity onPressIn={()=>{navigation.navigate("SignupScreen")}} onPress={()=> SetSuccess(0)} style = {styles.buttonleft} className="flex-row">
            <View style={{width: wp('20') , height: wp('8'), backgroundColor:"#bd31fe"}} className="rounded-xl">
                <Text style={ styles.title2} className="Bold">SIGN UP</Text>
            </View>
            </TouchableOpacity>
            
                

            </View>
                
           


 
            
        </View>
      </ScrollView>
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
    color:'white',
    fontSize: hp(1.5),
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
    fontWeight: 'bold', 
      },

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
        bottom: hp('6'),
        left: wp('49')-(wp('70')/2), 
        borderWidth: 1,
        width: wp('70'), 
        height: wp('10'),
        marginBottom: hp(1),
        paddingHorizontal: wp(3.5),
        color: "white",
          
        fontWeight: "normal",
        borderBottomColor: "white"
        

      }
  
  })

export default SigninScreen



