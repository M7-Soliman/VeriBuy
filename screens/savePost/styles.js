import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: 'white'
    },
    uploadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    spacer: {
        flex: 1
    },
    formContainer: {
        margin: 20,

    },
    buttonsContainer: {
        flexDirection: 'row',
        margin: 20,
    },
    mediaPreview: {
        aspectRatio: 9 / 16,
        backgroundColor: 'black',
        width: 220,
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
        
        
        
    },

    dropdownView:{
        marginBottom:100,
        marginTop:50,
        marginRight: 30,
        marginLeft: 30,
    },

    inputText: {
        paddingVertical: 10,
        alignItems: 'center',
        marginRight: 20,
        marginLeft: 20,
        flex:2,
        marginTop: 20,
        flexDirection: 'column',
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
    },
    
    cancelButton: {
        alignItems: 'center',
        backgroundColor: '#000000',
        flex: 1,
        borderColor: 'lightgray',
        borderWidth: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 4,
        marginRight: 10
    },
    postButton: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#26da76',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 4,
        marginRight: 10
    },
    cancelButtonText: {
        marginLeft: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    postButtonText: {
        marginLeft: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default styles;