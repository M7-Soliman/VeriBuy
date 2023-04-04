import { StyleSheet } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container:{
        position: "absolute",
        zIndex: 999,
        bottom: 0,
        padding: 30
    },
    displayNAME:{
        color:"white", 
        fontWeight:"bold",
        fontSize:16
    },
    avatar:{
        height:hp(5)
        ,width:hp(5),
        borderRadius:hp(2.5),
        marginBottom: 5

    }
})
export default styles