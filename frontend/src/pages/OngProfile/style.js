import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    head: {
        padding: "5%",
    },

    bioCont:{
        color: '#606060',
        alignSelf:'center',
        fontSize:15,
    },

    bioPetContainer: {
        padding:10,
        borderRadius:4,
        backgroundColor:'#D1D1D1',
        //flexWrap: 'wrap',
        minHeight: 100,
        width: "100%",
        alignSelf:'center',
        marginBottom:10,
        flexDirection: "column",
    },


    textInfo: {
        color: '#606060',
        
        fontSize: 14,
        marginBottom: 10,
        marginRight:10,
    },

    textInfoLong: {
        color: '#606060',
        marginLeft: 8,
        fontSize: 13,
        marginBottom: 20,
        marginRight:10,
    },

    textInsideButton: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        margin: 5,

    }
    
    
});
