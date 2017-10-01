import React,{Component} from 'react';
import {
    View,Text,Image,ScrollView,StyleSheet
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as commentAction from '../actions/CommentAction';
import {ListItem, Button, Card, List} from 'react-native-elements';
import globalStyles from './module/GlobalStyles';


class ReduxScreen extends Component{
    static navigationOptions = ({navigation}) => {
        return{
            title:navigation.state.params.title
        }
    }
    constructor(props){
        super(props);
        this.state = {
            reduxArticleArr:[
                {title:'Redux 入门教程（一）',url:'http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html'},
                {title:'Redux 入门教程（二）',url:'http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html'},
                {title:'Redux 入门教程（三）',url:'http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html'}
            ]
        }
    }
    componentDidMount = () => {
        // console.log(this.props);
    }
    render(){
        return(
            <ScrollView>
                <Card
                    title="counter"
                >
                    <View style={[globalStyles.centerH,globalStyles.row]}>
                        <Button
                            title='+'
                            onPress={() =>{this.props.actions.add()}}
                            buttonStyle={globalStyles.btn}
                            borderRadius={5}
                            fontSize={12}
                            disabledStyle={{}}
                        />
                        <Text style={styles.countText}>{this.props.state.sum}</Text>
                        <Button
                            title='-'
                            onPress={() => {this.props.actions.del()}}
                            buttonStyle={globalStyles.btn}
                            borderRadius={5}
                            fontSize={12}
                            disabledStyle={{}}
                        />
                    </View>
                </Card>

                <Card
                    title="redux相关文章推荐"
                >
                    <List>
                        {
                            this.state.reduxArticleArr.map((item,index) => {
                                return(
                                    <ListItem
                                        key={index}
                                        onPress={() => this.props.navigation.actions.pushTo('WebScreen',{title:item.title,url:item.url})}
                                        title={item.title}
                                    />
                                );
                            })
                        }
                    </List>
                </Card>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    countText:{
        marginTop:22,
        fontSize:12
    }
})
export default connect(state => ({
        ...state,//配置全局store 中所有的state
        state: state.reduxReducer
    }),
    (dispatch) => ({
        actions: bindActionCreators(commentAction, dispatch)
    })
)(ReduxScreen);

