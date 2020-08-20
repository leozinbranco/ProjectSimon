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
        flex: 0,
        width: '70%',
        marginTop: 40,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        margin: 10,
        backgroundColor: '#3FB55D',
        borderRadius: 30,
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

        borderColor: '#969696',
        borderBottomWidth: 1,
        padding: 5,
        margin: 20,
        width: '70%',

    }

});
