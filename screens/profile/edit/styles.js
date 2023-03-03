import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    imageViewContainer: {
        backgroundColor: 'gray',
        height: 200,
        width: 200,
        borderRadius: 50,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 200,
        width: 200,
        position: 'absolute'
    },
    imageOverlay: {
        backgroundColor: 'rgba(0,0,0, 0.2)',
        ...StyleSheet.absoluteFill
    },

    fieldsContainer: {
        marginTop: 20,
        padding: 20,
        flex: 1
    },
    fieldItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    fieldValueContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default styles;