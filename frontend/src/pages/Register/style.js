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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'transparent',
        width: '70%',
        height: '30%',
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        margin: 10,
        backgroundColor: '#DEDEDE'
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
