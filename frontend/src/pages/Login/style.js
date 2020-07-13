import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#3FB55D',
        justifyContent: "center",
        alignItems: "center",
    },
    formContainer: {
        flex: 2,
        flexDirection: "column",
        backgroundColor: '#3FB55D',
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        width: '70%',
        borderRadius: 100,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.50,
        shadowRadius: 4.65,

        elevation: 8,
    },
    button: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.90,
        shadowRadius: 9.51,

        elevation: 15,
        borderWidth: 2,
        borderRadius: 100,
        borderColor: 'white',
        width: '70%',
        padding: 10,
        alignItems: "center",
        margin: 10,
    },
    whiteText: {
        color: 'white',
    },
    logoImage: {
        flex: 0,
        opacity: 1,
        //backgroundColor: 'pink',
        position: "absolute",
        left: -20, 
        bottom: -20
    },
    createAccount: {
        paddingTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 1.50,
        shadowRadius: 12.35,

        elevation: 19,
    },
    
});
