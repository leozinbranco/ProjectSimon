import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    image: {
        justifyContent: 'flex-end',
        resizeMode: 'cover', 
        width: '100%',
        height: 250, 
        alignSelf:'center',
        backgroundColor: 'grey',
        flexDirection: 'column'
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center'
    }, 
    buttonAdopt: {
        alignSelf:'center',
        backgroundColor: '#14754C',
        borderRadius:10,
        width:330,
        height:50,
        marginBottom:30,
        alignItems: 'center',
        justifyContent: 'center'
    },  
    buttonPatronize: {
        alignSelf:'center',
        backgroundColor: '#ffa500',
        borderRadius:10,
        width:330,
        height:50,
        marginBottom:30,
        alignItems: 'center',
        justifyContent: 'center'
    },  
    nameAnimal:{
        width: '100%',
        fontSize: 38,
        height: 39,
        paddingTop: 10,
        alignContent: 'center',
        flexDirection: 'row',
        color: 'white'
    },
    btnWhats:{
        marginBottom:15,
        width:'90%',        
        alignSelf:'center',
    },
    backarr:{
        margin:20,
    },

    bioCont:{
        
        color: '#606060',
        marginLeft:15,
        alignSelf:'center',
        fontSize:15,
    },

    infoPetContainer: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: '90%',
        alignSelf:'center',
        marginBottom:20,

    },

    bioPetContainer: {
        padding:5,
        borderRadius:4,
        backgroundColor:'#D1D1D1',
        flexWrap: 'wrap',
        height:100,
        width: 320,
        alignSelf:'center',
        marginBottom:20,
    },

    line:{
        flexDirection: 'row',
    },

    logo: {
        justifyContent: 'center',
        resizeMode: 'contain', 
        width: 21,
        height: 24,
    },

    textInfo: {
        color: '#606060',
        marginLeft: 10,
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

    },
    button: {
        width: '40%',
        marginBottom: 10,
        marginHorizontal: 10
    }
    
    
});
