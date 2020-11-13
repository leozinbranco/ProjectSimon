import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#3FB55D',
        height: '100%',
        flexDirection: 'column',
        flexGrow: 1
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        width: '70%',
        borderRadius: 100,
        margin: 10,
    },
    button: {
        borderWidth: 1,
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
    headerText: {
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'white',
        paddingTop: 10,
    },
    title: {
        fontWeight: 'bold',
        margin: 10,
    },
    petImage: {
        width: 125,
        height: 95,
        backgroundColor: 'grey'
    },
    card: {
        width: 250,
        margin: 10,
    },
    ongImage: {
        width: 110,
        height: 110,
        backgroundColor: 'grey',
        borderRadius: 100,
    },
    lineHeader: {
        flexDirection: 'row',
        margin: 0,
        alignItems: 'center',
    },
    headContainer: {
        backgroundColor: '#3FB55D',
        paddingBottom: 15,
        paddingTop: 20,
    },
    Headerlogo: {
        resizeMode: 'contain',
        height: '100%',
        marginTop: 20,
        opacity: 0.1,
        position: 'absolute',
        right: 0
    },
    seeMoreCard: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    }
});
