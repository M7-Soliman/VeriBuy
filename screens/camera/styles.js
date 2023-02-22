import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 45         
    },
    camera: {
        flex: 1,
        backgroundColor: 'black',
        aspectRatio: 9 / 16,
    },
    bottomBarContainer: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        marginBottom: 30,
    },
    recordButtonContainer: {
        flex: 1,
        marginHorizontal: 30,
    },
    recordButton: {
        borderWidth: 7,
        borderColor: '#000000',
        backgroundColor: '#FFFFFF',
        borderRadius: 100,
        height: 80,
        width: 80,
        alignSelf: 'center'
    },
    galleryButton: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        overflow: 'hidden',
        width: 65,
        height: 65,
    },
    galleryButtonImage: {
        width: 65,
        height: 65,
    },
    sideBarContainer: {
        top: 60,
        right: 0,
        marginHorizontal: 20,
        position: 'absolute'
    },
    iconText: {
        color: 'white',
        fontSize: 12,
        marginTop: 5,

    },
    sideBarButton: {
        alignItems: 'center',
        marginBottom: 50
    }
});

export default styles;