import React,{Component} from 'react';
import {
    View,Text,TouchableOpacity,Button,StyleSheet,Dimensions
} from 'react-native';
import ToastComponent, {DURATION} from 'react-native-easy-toast';
const{width,height} = Dimensions.get('window');
class Toast extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.title
        }
    }
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <Button
                    title="Toast"
                    onPress={()=>{
                        this.refs.toast.show('Hello World!');
                    }}
                />
                <ToastComponent
                    ref="toast"
                    defaultCloseDelay={2000}/*关闭延迟*/
                    position="center"/*toast位置*/
                    fadeInDuration={500}/*出现持续时间*/
                    fadeOutDuration={500}/*消失持续时间*/
                    opacity={0.6}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    btn:{
        width:width-32,
        height:50,
        backgroundColor:'rgba(0,0,0,.5)'
    },
    container:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:16
    },
});
export default Toast;