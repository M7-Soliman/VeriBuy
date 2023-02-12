import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
// import CategoryDesign from './CategoryDesign'

// import ImagesExample from '../assets/cat.jpeg'



const Items = () => {
  return (
    <ScrollView contentContainerStyle = {{paddingHorizontal: 26, 
    paddingTop: 10, paddingBottom: 5, alignItems :'center'
    }} horizontal showsHorizontalScrollIndicator={false}>
    
    
    <TouchableOpacity className = "relative mr-3"> 
        <Image source={require("../assets/a1.png")}
        className ="h-20 w-20 rounded-2xl "/>
    </TouchableOpacity>
    
    <TouchableOpacity className = "relative mr-3"> 
        <Image source={require("../assets/a2.png")}
        className ="h-20 w-20 rounded-2xl "/>
    </TouchableOpacity> 

    <TouchableOpacity className = "relative mr-3"> 
        <Image source={require("../assets/a3.png")}
        className ="h-20 w-20 rounded-2xl "/>
    </TouchableOpacity>    

    <TouchableOpacity className = "relative mr-3"> 
        <Image source={require("../assets/a4.png")}
        className ="h-20 w-20 rounded-2xl "/>
    </TouchableOpacity>    

    <TouchableOpacity className = "relative mr-3"> 
        <Image source={require("../assets/a5.png")}
        className ="h-20 w-20 rounded-2xl "/>
    </TouchableOpacity>  

    <TouchableOpacity className = "relative mr-3"> 
        <Image source={require("../assets/a6.png")}
        className ="h-20 w-20 rounded-2xl "/>
    </TouchableOpacity>
    
    <TouchableOpacity className = "relative mr-3"> 
        <Image source={require("../assets/a7.png")}
        className ="h-20 w-20 rounded-xl "/>
    </TouchableOpacity> 

    <TouchableOpacity className = "relative mr-3"> 
        <Image source={require("../assets/a8.png")}
        className ="h-20 w-20 rounded-2xl "/>
    </TouchableOpacity>    

    <TouchableOpacity className = "relative mr-3"> 
        <Image source={require("../assets/a9.png")}
        className ="h-20 w-20 rounded-2xl "/>
    </TouchableOpacity>    

    <TouchableOpacity className = "relative mr-3"> 
        <Image source={require("../assets/a10.png")}
        className ="h-20 w-20 rounded-2xl "/>
    </TouchableOpacity>  
      
    <TouchableOpacity className = "relative mr-3"> 
        <Image source={require("../assets/a12.png")}
        className ="h-20 w-20 rounded-2xl "/>
    </TouchableOpacity>


    
          {/* <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1As7WuYVxa8L9bCW3pJhJisL4eNcXeATy" />
      
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1zsg5woBErcTwVRACrlNI-OnFia8lOD0c" />
      
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1ifxDus0VpmYad0L_C5B33y-lYRtCDCT6" />
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1XLTXExr2ZuaumI_4vIeJ2CuhkJy8HpE-" />
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1ogYXsNhl4i0oPYxsVMihk9XZrCuqcbO4" />
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1nsxSOz_ZFeNHI343kzBYGg7d84kfNqMz" />
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=15HsdSbNyox5KnR1ENFK5XkUVgDDZETa8" />
      
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1dSsETIP6N4W9t7zJ25acaDXkEfiM7XtJ" />
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1ljPI0SviMbY72HWiImOwdqr1v8fJcI07" />
      <CategoryDesign imgurl = "https://drive.google.com/uc?export=view&id=1BApvbNO9VBzGg5jy2iFadjI90r9M5MoZ" />  */}
      


    </ScrollView>
  )

}



  
export default Items