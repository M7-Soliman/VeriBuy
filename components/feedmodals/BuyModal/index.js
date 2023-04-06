import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const BuyNow = ({post, user}) => {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [confirmed, setConfirmed] = useState(false)

return (
    <View>
      <Text>BuyNowWW</Text>
    
      <TouchableOpacity>
      </TouchableOpacity>
    </View>
  )
}

export default BuyNow