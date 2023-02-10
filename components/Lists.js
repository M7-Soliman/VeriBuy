import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Sublists from './Sublists'

const Lists = () => {
  return (
    <ScrollView contentContainerStyle = {{paddingHorizontal: 30, 
        paddingTop: 10}}>
      
      <Sublists url1 = "https://drive.google.com/uc?export=view&id=1jTKPmVRijC79z_Dj3ER5VE6HAdkVHfpT" 
      url2 = "https://drive.google.com/uc?export=view&id=1jTKPmVRijC79z_Dj3ER5VE6HAdkVHfpT"/>
    
        <Sublists url1 = "https://drive.google.com/uc?export=view&id=1jTKPmVRijC79z_Dj3ER5VE6HAdkVHfpT" 
      url2 = "https://drive.google.com/uc?export=view&id=1jTKPmVRijC79z_Dj3ER5VE6HAdkVHfpT"/>
      
      <Sublists url1 = "https://drive.google.com/uc?export=view&id=1jTKPmVRijC79z_Dj3ER5VE6HAdkVHfpT" 
      url2 = "https://drive.google.com/uc?export=view&id=1jTKPmVRijC79z_Dj3ER5VE6HAdkVHfpT"/>

            
    <Sublists url1 = "https://drive.google.com/uc?export=view&id=1jTKPmVRijC79z_Dj3ER5VE6HAdkVHfpT" 
      url2 = "https://drive.google.com/uc?export=view&id=1jTKPmVRijC79z_Dj3ER5VE6HAdkVHfpT"/>

          
    <Sublists url1 = "https://drive.google.com/uc?export=view&id=1jTKPmVRijC79z_Dj3ER5VE6HAdkVHfpT" 
      url2 = "https://drive.google.com/uc?export=view&id=1jTKPmVRijC79z_Dj3ER5VE6HAdkVHfpT"/>

    </ScrollView>
  )
}

export default Lists