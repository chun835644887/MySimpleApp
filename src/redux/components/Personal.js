import React, {Component} from 'react';
import {
    View, Text, Image, StyleSheet, TouchableOpacity,FlatList
} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import GlobalStyle from './module/GlobalStyles';

let myInstruction = '    React Native (简称RN)是Facebook于2015年4月开源的跨平台移动应用开发框架，' +
    '是Facebook早先开源的UI框架 React 在原生移动应用平台的衍生产物，目前支持iOS和安卓两大平台。' +
    'RN使用Javascript语言，类似于HTML的JSX，' +
    '以及CSS来开发移动应用，因此熟悉Web前端开发的技术人员只需很少的学习就可以进入移动应用开发领域。';
let i = 0;
class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInfo:'',
            isUnmount:'haha'
        }
        this.type = this.type.bind(this);
    }
    _keyExTractor = (item,index) => `${item.id}_${index}`;
    _renderItem = (item) => {
        return (
            <View
                style={[styles.itemContainer]}>
                <TouchableOpacity
                    activeOpacity={0.6}

                >
                    <Card
                        title={item.item.name}
                    >
                        <Text style={styles.itemContent}>{item.item.dis}</Text>
                        <View style={styles.itemArrow}>
                            <Icon name='chevron-right'/>
                        </View>
                    </Card>
                </TouchableOpacity>
            </View>
        );
    }
    componentDidMount = () =>{
        this.type();
    }
    componentWillUnmount = () => {
        console.log('willUnmount');
        this.timer && clearTimeout(this.timer);
        this.setState({
            isUnmount:'willUnmount'
        })
    }
    type = () => {
        if(i < myInstruction.length){
            i ++;
            let str = myInstruction.slice(0,i);
            this.setState({
                showInfo:str
            });
            this.timer = setTimeout(this.type,200);
        }
    }
    render() {
        return (
            <View style={[
                {flex:1,backgroundColor:'#fff',justifyContent:'center',alignItems:'center',paddingHorizontal:16}
            ]}>
                <Text style={[
                    {color:'#999',fontSize:18,lineHeight:30,paddingHorizontal:12,
                        borderWidth:1,borderColor:'#f0f0f0',paddingVertical:12}
                ]}>{this.state.showInfo}</Text>
                <TouchableOpacity
                    style={{marginTop:12}}
                    onPress={() => {
                        let navigation = this.props.navigation;
                        navigation.actions.pushTo('WebScreen',{
                            title:'github个人地址',
                            url:'https://github.com/chun835644887'
                        });
                    }}
                >
                    <Image
                        style={{width:50,height:50,borderRadius:25}}
                        source={require("../../../images/icon-github.jpg")}
                    />
                </TouchableOpacity>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    itemContainer: {
        paddingHorizontal: 16,
        marginTop: 16,
        backgroundColor: '#fff'
    },
    itemTitle: {
        color: '#333',
        fontSize: 14,
        fontWeight: 'bold'
    },
    itemContent: {
        color: '#999',
        fontSize: 12,
        lineHeight:20
    },
    itemArrow: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
});
export default connect(state => ({
        ...state,//配置全局store 中所有的state
    })
)(Personal);