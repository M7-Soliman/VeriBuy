import { StackActions, useNavigation} from '@react-navigation/native'
import React, { useState } from 'react'
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View, ScrollView, SafeAreaView} from 'react-native'
import styles from './styles'
import { Feather } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { createPost } from '../../redux/actions/post'
import DropDownPicker from 'react-native-dropdown-picker';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { saveUserField } from '../../components/services/user'


export default function SavePostScreen(props) {
    const [Name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [cost, setCost] = useState(0)

    const [requestRunning, setRequestRunning] = useState(false)
    const navigation = useNavigation()
    const [phone, setPhone] = useState('')

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("null");
    const [chosencategory, setchosencategory] = useState(false);

    const [items, setItems] = useState([
        {label: 'Fashion & Beauty', value: 'Fashion & Beauty'},
        {label: 'Sports & Hobbies', value: 'Sports & Hobbies'},
        {label: 'Properties', value: 'Properties'},
        {label: 'Vehichles', value: 'Vehichles'},
        {label: 'Electronic Devices', value: 'Electronic Devices'},
        {label: 'Home Appliances', value: 'Home Appliances'},
        {label: 'Furniture', value: 'Furniture'},
        {label: 'Pets', value: 'Pets'},
        {label: 'Kids Items', value: 'Kids Items'},
        {label: 'Service Products', value: 'Service Products'},
        {label: 'Other', value: 'Other'},
    ]);



    const dispatch = useDispatch();
    DropDownPicker.setTheme("DARK");

    
    const handleSavePost = () => {
        setRequestRunning(true)
        dispatch(createPost(description,cost, Name, value, props.route.params.source, props.route.params.sourceThumb))
            .then(() => navigation.dispatch(StackActions.popToTop()))
            .catch(() => setRequestRunning(false))
    }

    if (requestRunning) {
        return (
            <View style={styles.uploadingContainer}>
                <ActivityIndicator color='black' size='large' />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            {!chosencategory?
                <View style={styles.dropdownView}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue} //basically the category
                    setItems={setItems}
                    placeholder="Select Category"
                    style = {{backgroundColor: "#1d1d1d" }}
                    dropDownContainerStyle={{
                        backgroundColor: "#1d1d1d"
                      }}
                    maxHeight = {hp(50)}
                      
                    />
                
                <TouchableOpacity style={{alignSelf:"center", bottom:hp(-60)}} onPress={()=>setchosencategory(true)}>
                <View style={{width: wp('50') , height: wp('12'), backgroundColor:"#26da76"}} className="rounded-3xl">
                    <Text style={ styles.title} className="Bold">Continue</Text>
                </View>
                </TouchableOpacity>

                </View>
                :
                <>
                        <ScrollView style={styles.container}>
            <View style={styles.formContainer}>

                <TextInput
                    style={styles.inputText}
                    maxLength={20}
                    onChangeText={(text) => setName(text)}
                    placeholder="Product Name / اسم المنتج"
                    placeholderTextColor={"white"}
                />

                <TextInput
                    style={styles.inputText}
                    maxLength={12}
                    onChangeText={(text) => setCost(text)}
                    placeholder="Price in EGP / السعر بالجنيه"
                    keyboardType='decimal-pad'
                    placeholderTextColor={"white"}

                />
                
                <TextInput
                    style={styles.inputText}
                    maxLength={500}
                    multiline
                    onChangeText={(text) => setDescription(text)}
                    placeholder="Description / وصف المنتج"
                    placeholderTextColor={"white"}
                
                />
                
                <TextInput
                    style={styles.inputText}
                    maxLength={15}
                    multiline
                    onChangeText={(text) => setPhone(text)}
                    placeholder="phone / رقم الهاتف"
                    placeholderTextColor={"white"}

                />



                {/* <Image
                    style={styles.mediaPreview}
                    source={{ uri: props.route.params.source }}
                /> */}
            </View>
            
        </ScrollView>
            <View style={styles.buttonsContainer}>

                    <TouchableOpacity
                        onPress={() => handleSavePost()}
                        onPressIn={() => saveUserField("phoneNumber", phone)}                    
                        style={styles.postButton}>
                        <Feather name="plus" size={24} color="white" />
                        <Text style={styles.postButtonText}>Add</Text>
                    </TouchableOpacity>
                </View>
                </>
            }

        </View>
    )
}
