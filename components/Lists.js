import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Sublists from './Sublists'

const Lists = () => {
  return (
    <ScrollView contentContainerStyle = {{paddingLeft: 26, paddingRight: 15,  
        paddingTop: 10, paddingBottom:290}} showsHorizontalScrollIndicator={false}>
      
      <Sublists url1 = "https://drive.google.com/uc?export=view&id=1TYa6W8-719G-2FwyDB-MO9-LFQln5lZI" 
      url2 = "https://drive.google.com/uc?export=view&id=13PuGJa8hn9GgcHEs94sWQLFzJfoShJ3l"/>
    
        <Sublists url1 = "https://drive.google.com/uc?export=view&id=1vm-uSt7Qr1ACp2TINwzhHbnQ9Nw984rW" 
      url2 = "https://drive.google.com/uc?export=view&id=1IDrnHZntxFrNXl7FUKXcsWk0RGyblKxU"/>
      
      <Sublists url1 = "https://drive.google.com/uc?export=view&id=1qdcI7kDbQbI_VFz1xWMQd_ke_G5OW1Cm" 
      url2 = "https://drive.google.com/uc?export=view&id=1zBwTppYXkH4IWfIIJ5FVsMmM7_dVhtTW"/>

            
     <Sublists url1 = "https://drive.google.com/uc?export=view&id=1TYa6W8-719G-2FwyDB-MO9-LFQln5lZI" 
      url2 = "https://drive.google.com/uc?export=view&id=13PuGJa8hn9GgcHEs94sWQLFzJfoShJ3l"/>

          
<Sublists url1 = "https://drive.google.com/uc?export=view&id=1vm-uSt7Qr1ACp2TINwzhHbnQ9Nw984rW" 
      url2 = "https://drive.google.com/uc?export=view&id=1IDrnHZntxFrNXl7FUKXcsWk0RGyblKxU"/>

    </ScrollView>
  )
}

export default Lists