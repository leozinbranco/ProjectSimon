import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    text: {
        fontWeight: "100",
    },
    textBold: {
        fontWeight: "bold",
    },

    card: {
        marginVertical: 5,
    },
    cardSelected: {
        marginVertical: 5,
        backgroundColor: '#3FB55D',
        color: 'white',
        borderColor: 'white',
    },

    container: {
        backgroundColor: 'white',
        width: "100%",
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        paddingHorizontal: 30,
        paddingTop: 5,
    },
    background: {
        backgroundColor: '#3FB55D',
        width: '100%',
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: "bold",
        padding: 10,
    },
    selectContainer: {
        borderRadius: 4,
        width: "100%",
        marginVertical: 10,
    },

    avatars: {
        width: '100%',
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    column: {
        flexDirection: 'column',
        width: '100%',
        backgroundColor: 'red'
    },

    section: {
        marginVertical: 20,
        width: '100%',
    },
    button: {
        flex: 0,
        width: '70%',
        marginTop: 20,
        marginBottom: 50,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: 'center',
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


});