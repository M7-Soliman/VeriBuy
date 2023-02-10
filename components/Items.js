import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import CategoryDesign from './CategoryDesign'

import ImagesExample from '../assets/cat.jpeg'


const Items = () => {
  return (
    <ScrollView contentContainerStyle = {{paddingHorizontal: 20, 
    paddingTop: 10, paddingBottom: 20,
    }} horizontal showsHorizontalScrollIndicator={false}>

      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1fA5A6g4SezFWmHikravcRryXwfrdaHki" />
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1jTKPmVRijC79z_Dj3ER5VE6HAdkVHfpT" alt="drive image" />
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1wegXM6JsjCZHEBI4mE3SgHIxwpBvP1nM" alt="drive image" />
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1jTKPmVRijC79z_Dj3ER5VE6HAdkVHfpT" alt="drive image" />
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1wegXM6JsjCZHEBI4mE3SgHIxwpBvP1nM" alt="drive image" />
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1jTKPmVRijC79z_Dj3ER5VE6HAdkVHfpT" alt="drive image" />
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1wegXM6JsjCZHEBI4mE3SgHIxwpBvP1nM" alt="drive image" />


    </ScrollView>
  )
}

export default Items