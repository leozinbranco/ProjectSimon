import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    formCard: {
        marginTop: 20,
    },
    formCardExDate: {
        marginTop: 20,
        width:"45%", 
        marginLeft: 20,
        alignSelf:"flex-end",
    },
    formCardCVV: {
        marginTop: 20,
        width:"45%",
    },
    formContainer: {
        height:'100%',
    },
    confirmButton: {
            width: '70%',
            marginTop: 40,
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