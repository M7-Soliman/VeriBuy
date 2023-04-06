import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { EllipsisVerticalIcon as Dots } from 'react-native-heroicons/outline'
import { ShoppingBagIcon as Bag } from 'react-native-heroicons/outline'
import { ChatBubbleLeftRightIcon as QA } from 'react-native-heroicons/outline'
import { DocumentTextIcon as Info } from 'react-native-heroicons/outline'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { useNavigation } from '@react-navigation/native'
import BuyModal from '../../feedmodals/BuyModal'
import { useDispatch } from 'react-redux'
import { openBuyNowmodal, openDescriptionmodal, openOptionsmodal, openQAmodal } from '../../../redux/actions/modal'

export default function PostSingleOverlay({user, post}) {
    // console.log(user.displayName)
    const navigation = useNavigation();
    const dispatch = useDispatch()
    
  return (
    <View style={styles.container}>
      {user ? (
        <>
        <View style={styles.container}>
          <Image style={styles.avatar} source={{uri: user.photoURL}}/>
          <Text style={styles.displayNAME}>{user.displayName}</Text>
        </View>
        <View style={styles.container2}>


          <TouchableOpacity onPress={()=>dispatch(openBuyNowmodal(true, post, user))}>
            <Bag style={styles.icons} color="white" size={31}/>
            <Text style={{fontSize: 10, color:"white",left:wp(-1)}}>Buy Now</Text>
          </TouchableOpacity>
              
          <TouchableOpacity onPress={()=>dispatch(openDescriptionmodal(true, post, user))}>
            <Info style={styles.icons} color="white" size={31}/>
            <Text style={{fontSize: 10, color:"white",left:wp(-.2)}}>Details</Text>
          </TouchableOpacity>
              
          <TouchableOpacity onPress={()=>dispatch(openQAmodal(true, post, user))}>
            <QA style={styles.icons} color="white" size={31}/>
            <Text style={{fontSize: 10, color:"white",left:wp(1.5)}}>Q&A</Text>
          </TouchableOpacity>
                    
          <TouchableOpacity onPress={()=>dispatch(openOptionsmodal(true, post, user))}>
            <Dots style={styles.icons} color="white" size={31}/>
            <Text style={{fontSize: 10, color:"white",left:wp(-1)}}>Options</Text>
          </TouchableOpacity>

        </View>
        </>
      ) : (
          <Text>Loading user data...</Text>
      )}
    </View>
  )
}