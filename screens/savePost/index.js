import { StackActions, useNavigation} from '@react-navigation/native'
import React, { useState } from 'react'
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View, ScrollView, SafeAreaView} from 'react-native'
import styles from './styles'
import { Feather } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { createPost } from '../../redux/actions/post'
import DropDownPicker from 'react-native-dropdown-picker';


export default function SavePostScreen(props) {
    const [Name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [cost, setCost] = useState(0)

    const [requestRunning, setRequestRunning] = useState(false)
    const navigation = useNavigation()

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'}
    ]);



    const dispatch = useDispatch();
    
    const handleSavePost = () => {
        setRequestRunning(true)
        dispatch(createPost(description, props.route.params.source, props.route.params.sourceThumb))
            .then(() => navigation.dispatch(StackActions.popToTop()))
            .catch(() => setRequestRunning(false))
    }

    if (requestRunning) {
        return (
            <View style={styles.uploadingContainer}>
                <ActivityIndicator color='red' size='large' />
            </View>
        )
    }
    return (
        <View style={styles.container}>
                <View style={styles.dropdownView}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    />
                </View>
        <ScrollView style={styles.container}>
            <View style={styles.formContainer}>

                <TextInput
                    style={styles.inputText}
                    maxLength={30}
                    onChangeText={(text) => setName(text)}
                    placeholder="Product Name / اسم المنتج"
                />

                <TextInput
                    style={styles.inputText}
                    maxLength={12}
                    onChangeText={(text) => setCost(text)}
                    placeholder="Price in EGP / السعر بالجنيه"
                    keyboardType='decimal-pad'
                />
                
                <TextInput
                    style={styles.inputText}
                    maxLength={500}
                    multiline
                    onChangeText={(text) => setDescription(text)}
                    placeholder="Description / وصف المنتج"
                />

                <TextInput
                    style={styles.inputText}
                    maxLength={500}
                    multiline
                    onChangeText={(text) => setDescription(text)}
                    placeholder="Description / وصف المنتج"
                />


                {/* <Image
                    style={styles.mediaPreview}
                    source={{ uri: props.route.params.source }}
                /> */}
            </View>
            
        </ScrollView>
            <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.cancelButton}>
                        <Feather name="x" size={24} color="white" />
                        <Text style={styles.cancelButtonText}>Fakes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => handleSavePost()}
                        style={styles.postButton}>
                        <Feather name="plus" size={24} color="white" />
                        <Text style={styles.postButtonText}>Add</Text>
                    </TouchableOpacity>
                </View>

        </View>
    )
}
