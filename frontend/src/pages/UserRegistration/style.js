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
        width: "100%",
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,

    },
    button: {
        flex: 0,
        width: '70%',
        marginTop: 20,
        marginBottom:50,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        margin: 10,
        backgroundColor: '#3FB55D',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 5,
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: "bold",
        padding: 10,
    },
    input: {
        flex: 0,
        display: 'flex',
        flexDirection: 'row',

        borderColor: '#969696',
        borderBottomWidth: 1,
        padding: 5,
        margin: 15,
        width: '70%',

    },
    
    scroll: {
        width: '100%', 
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    }


});
