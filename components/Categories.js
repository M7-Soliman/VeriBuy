import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import CategoryDesign from './CategoryDesign'

import ImagesExample from '../assets/cat.jpeg'


const Items = () => {
  return (
    <ScrollView contentContainerStyle = {{paddingHorizontal: 26, 
    paddingTop: 10, paddingBottom: 5, alignItems :'center'
    }} horizontal showsHorizontalScrollIndicator={false}>
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=14vSWDq5nmyZ3VBpql7Ne8lI2Fx0kY5gf" />
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1t-VYnc-EcGVqCe7zyL83jNJYJNfMv32E" />
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1As7WuYVxa8L9bCW3pJhJisL4eNcXeATy" />
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1UhWaNlzNKfM1dy16JPOJLrgJ4zEABmAL" />
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1zsg5woBErcTwVRACrlNI-OnFia8lOD0c" />
      
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1ifxDus0VpmYad0L_C5B33y-lYRtCDCT6" />
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1XLTXExr2ZuaumI_4vIeJ2CuhkJy8HpE-" />
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1ogYXsNhl4i0oPYxsVMihk9XZrCuqcbO4" />
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1nsxSOz_ZFeNHI343kzBYGg7d84kfNqMz" />
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=15HsdSbNyox5KnR1ENFK5XkUVgDDZETa8" />
      
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1dSsETIP6N4W9t7zJ25acaDXkEfiM7XtJ" />
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1ljPI0SviMbY72HWiImOwdqr1v8fJcI07" />
      
      
      


    </ScrollView>
  )
}

export default Items