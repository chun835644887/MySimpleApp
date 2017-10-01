import React,{Component} from 'react';
import {
    View,Text
} from 'react-native';

class MapLocation extends Component {
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
            <View>
                <Text>定位</Text>
            </View>
        )
    }
}

export default MapLocation;