import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import CategoryDesign from './CategoryDesign'

const Items = () => {
  return (
    <ScrollView contentContainerStyle = {{paddingHorizontal: 20, 
    paddingTop: 10,
    }} horizontal showsHorizontalScrollIndicator={false}>
      

      <CategoryDesign imgUrl = "https://links.papareact.com/gn7" title = "red sushi" />
      <CategoryDesign imgUrl = 'https://links.papareact.com/gn7' title = "blue sushi"/>
      <CategoryDesign imgUrl = 'https://links.papareact.com/gn7' title = "green sushi"/> 
      <CategoryDesign imgUrl = 'https://links.papareact.com/gn7' title = "green sushi"/> 
      <CategoryDesign imgUrl = 'https://links.papareact.com/gn7' title = "green sushi"/> 
      <CategoryDesign imgUrl = 'https://links.papareact.com/gn7' title = "green sushi"/> 




    </ScrollView>
  )
}

export default Items