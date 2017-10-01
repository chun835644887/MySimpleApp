import React, { Component } from 'react';
import { AppRegistry, Alert,Text,View } from 'react-native';
import AppIntro from 'react-native-app-intro';
import * as homeAction from '../actions/HomeAction';
import * as commentAction from '../actions/CommentAction';
import {connect} from 'react-redux';
class AppInstruction extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.title
        }
    }
    constructor(props){
        super(props);
        console.log(props);
    }
    onSkipBtnHandle = (index) => {
        Alert.alert('Skip');
    }
    doneBtnHandle = () => {
        let navigation = this.props.navigation;
        navigation.actions.popBack();
    }
    nextBtnHandle = (index) => {
        console.log(index);
    }
    onSlideChangeHandle = (index, total) => {
        console.log(index, total);
    }
    render() {
        const pageArray = [{
            title: 'Page 1',
            description: 'Description 1',
            img: 'http://s2.cn.bing.net/th?id=OJ.ePiYsVs9VgIUDQ&pid=MSNJVFeeds',
            imgStyle: {
                height: 80 * 2.5,
                width: 109 * 2.5,
            },
            backgroundColor: '#fa931d',
            fontColor: '#fff',
            level: 10,
        }, {
            title: 'Page 2',
            description: 'Description 2',
            img: 'http://s3.cn.bing.net/th?id=OJ.LTHB0BPB9f0V1Q&pid=MSNJVFeeds',
            imgStyle: {
                height: 93 * 2.5,
                width: 103 * 2.5,
            },
            backgroundColor: '#a4b602',
            fontColor: '#fff',
            level: 10,
        },{
            title: 'Page 3',
            description: 'Description 2',
            img: 'http://s2.cn.bing.net/th?id=OJ.Iaye4dwwDDtHkw&pid=MSNJVFeeds',
            imgStyle: {
                height: 93 * 2.5,
                width: 103 * 2.5,
            },
            backgroundColor: '#44f',
            fontColor: '#fff',
            level: 10,
        }];
        return (
            <View >
                <AppIntro
                    onNextBtnClick={this.nextBtnHandle}
                    onDoneBtnClick={this.doneBtnHandle}
                    onSkipBtnClick={this.onSkipBtnHandle}
                    onSlideChange={this.onSlideChangeHandle}
                    pageArray={pageArray}
                    showSkipButton={true}
                    showDoneButton={true}
                    showDots={true}
                />
            </View>
        );
    }
}
export default connect(state => ({
        ...state,//配置全局store 中所有的state
    })
)(AppInstruction);