import React,{Component} from 'react';
import {
    View,Text,Image,ScrollView
} from 'react-native';
import {ListItem, Button, Card, List} from 'react-native-elements';


export default class QCodeScreeb extends Component{
    static navigationOptions = ({navigation}) => {
        console.log(navigation);
        return{
            title:navigation.state.params.title
        }
    }
    render(){
        return(
            <View>
                <Text>关于我</Text>
            </View>
        );
    }
}
