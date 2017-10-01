import React, { Component } from 'react';
import { AppRegistry, Alert,Text,View,Button,StyleSheet,Dimensions } from 'react-native';
import * as homeAction from '../actions/HomeAction';
import * as commentAction from '../actions/CommentAction';

const {width,height} = Dimensions.get('window');
import {connect} from 'react-redux';

class Chart extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.title
        }
    }
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.btnBox}>
                    <Button
                        title="折线图"
                        onPress={() => {
                            let navigation = this.props.navigation;
                            navigation.actions.pushTo('BarChart',{title:'柱状图'});
                        }}
                    />
                </View>
                <View style={styles.btnBox}>
                    <Button
                        title="饼状图"
                        onPress={() => {
                            let navigation = this.props.navigation;
                            navigation.actions.pushTo('PieChart',{title:'饼状图'});
                        }}
                    />
                </View>
                <View style={styles.btnBox}>
                    <Button
                        title="饼状图"
                        onPress={() => {
                            let navigation = this.props.navigation;
                            navigation.actions.pushTo('RadarChart',{title:'饼状图'});
                        }}
                    />
                </View>
                <View style={styles.btnBox}>
                    <Button
                        title="散点图"
                        onPress={() => {
                            let navigation = this.props.navigation;
                            navigation.actions.pushTo('ScatterPlotChart',{title:'饼状图'});
                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:100
    },
    btnBox:{
        paddingHorizontal:16,
        paddingVertical:12,
        backgroundColor:'#fff',
        width:width,
    }
});

export default connect(state => ({
        ...state,//配置全局store 中所有的state
    })
)(Chart);