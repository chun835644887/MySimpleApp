import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    row:{
        flexDirection:'row'
    },
    spaceBetween:{
        justifyContent:'space-between'
    },
    centerH:{
        justifyContent:'center'
    },
    paddingH16: {
        paddingHorizontal: 16
    },
    paddingH8:{
        paddingHorizontal:8
    },
    marginT8:{
      marginTop:8
    },
    marginT16: {
        marginTop: 16
    },
    marginB8:{
        marginBottom:8
    },
    borderB1: {
        borderBottomWidth: 1,
        borderColor: '#f0f0f0'
    },
    border1: {
        borderWidth: 1,
        borderColor: '#f0f0f0'
    },
    whiteBGC: {
        backgroundColor: '#fff'
    },
    btn: {
        width: 80,
        height: 30,
        marginTop: 15
    }

});
export default globalStyles;