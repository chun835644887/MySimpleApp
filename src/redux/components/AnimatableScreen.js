import React,{Component} from 'react';
import {
    View,Text,Image,ScrollView
} from 'react-native';
import {ListItem, Button, Card, List} from 'react-native-elements';


class AnimatableScreen extends Component{
    static navigationOptions = ({navigation}) => {
        console.log(navigation);
        return{
            title:navigation.state.params.title
        }
    }
    render(){
        return(
            <View>
                <Text>我是httpScreen</Text>
            </View>
        );
    }
}
export default AnimatableScreen;