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
    headerText:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
         
        alignSelf: 'center', 
        padding: 15,  
    },

    selectFilter:{
        width: 80,
        height: 30, 
        backgroundColor: '#E2E2E2',
        borderColor: '#B6B6B6',
        borderWidth: 1,
        borderRadius: 30, 
        textAlignVertical:'center',
        marginHorizontal: 10,

    },  
});
