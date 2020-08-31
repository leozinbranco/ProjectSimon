import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
    inputContainer: {        
        flex: 0,
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        margin: 20,
        backgroundColor: 'white',
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 2,
    },
    photoView: {
        width: 110,
        height: 110,
        backgroundColor: 'grey',
        borderRadius: 100,
        marginBottom: 30,
    },
    scroll: {
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: '90%',
        borderColor: '#ededed',
        //borderBottomWidth: 1,
        padding: 1,
        marginRight: 2,
    },
    dateInput: {
        fontSize: 15,
        borderColor: '#ededed',
        borderBottomWidth: 1,
        width: '90%',
        padding: 3,
        justifyContent: 'center',
    },
    section: {
        alignContent: "flex-start",
        width: '80%',
        borderBottomColor: "grey",
        borderBottomWidth: 0.3
    },
    textSection: {
        fontSize: 20,
        color: "grey",
        paddingBottom: 5,
    }





});
