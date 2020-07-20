import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    textOng: {
       // fontFamily: 'Sarabun',
        //fontStyle: 'normal',
        //fontWeight: 200,
        display: 'flex',
        alignItems: 'center',

        color: '#606060',

        opacity: 0.8,
    },

    filtreTitle: {
        color:'#606060',
        opacity: 0.8,
        fontSize: 25,
        textAlign: 'left', 
        textAlignVertical: 'center',
        marginLeft: 10,
    },

    filterContainer:{
        padding: 10, 
    },
    
    
    slider: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CACACA',
        width: 28,
        height: 28,
        borderRadius: 5,
        
    },

    filtreText: {
        backgroundColor: '#DFDFDF',
        borderRadius: 30, 
        alignSelf: "flex-start",
        marginHorizontal: 10,
        marginVertical: 5,
        paddingHorizontal: 8, 
        
        
    },  

   


    
});
