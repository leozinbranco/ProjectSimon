import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#3FB55D',
    },
    formContainer: {
        flex: 2,
        flexDirection: "column",
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,

    },
    button: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'white',
        width: '70%',
        padding: 10,
        alignItems: "center",
        margin: 10,
        backgroundColor: 'pink'
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: "bold",
        padding: 10,
    },
    logoImage: {
        flex: 0,
        opacity: 1,
        //backgroundColor: 'pink',
        //position: "absolute",
        //left: -20, 
        //bottom: -20
    }
    
});
