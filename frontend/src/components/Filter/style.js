import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#3FB55D',

    },

    inside_container: {
        flex: 1,
        marginHorizontal: 15,
        marginTop: 30,
        backgroundColor: '#FFFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    headerText: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',

        alignSelf: 'center',
        padding: 15,
    },

    selectFilter: {
        width: 80,
        height: 30,
        backgroundColor: '#E2E2E2',
        borderColor: '#B6B6B6',
        borderWidth: 1,
        borderRadius: 30,
        textAlignVertical: 'center',
        marginHorizontal: 10,

    },

    applyBtn: {
        height: 40,
        width: 200,
        backgroundColor: '#3FB55D',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 5,
    },
});
