import React, {Component} from 'react';
import {
    View, Text, Image, StyleSheet, TouchableOpacity, FlatList
} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import GlobalStyle from './module/GlobalStyles';
import * as homeAction from '../actions/HomeAction';
import * as commentAction from '../actions/CommentAction';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    _keyExTractor = (item, index) => `${item.id}_${index}`;
    _renderItem = (item) => {
        return (
            <View
                style={[styles.itemContainer]}>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => {
                        this._goPage(item);
                    }}
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
    _goPage = (item) => {
        let navigator = this.props.navigation.actions;
        switch (item.item.id) {
            case 0:
                navigator.pushTo('HttpScreen', {title: item.item.name});
                break;
            case 1:
                navigator.pushTo('ReduxScreen', {title: item.item.name});
                break;
            case 2:
                navigator.pushTo('QCodeScreen', {title: item.item.name});
                break;
            case 3:
                navigator.pushTo('StorageScreen', {title: item.item.name})
                break;
            case 5:
                navigator.pushTo('WebScreen', {
                    url: 'http://www.lcode.org/史上最详细windows版本搭建安装react-native环境配置/',
                    title: item.item.name
                });
                break;
            case 6:
                navigator.pushTo('MapLocation', {
                    title: item.item.name
                });
                break;
            case 7:
                navigator.pushTo('ImageUpload', {title: item.item.name})
                break;
            case 8:
                navigator.pushTo('AppInstruction', {title: item.item.name})
                break;
            case 9:
                navigator.pushTo('Toast', {title: item.item.name})
                break;
            case 10:
                navigator.pushTo('Chart', {title: item.item.name})
                break;

        }
    }
    componentDidMount = () => {
        // console.log(132456);
        // console.log(this.props);
    }

    render() {
        return (
            <FlatList
                style={{backgroundColor: '#fff'}}
                data={this.props.state.homeList}
                renderItem={this._renderItem}
                keyExtractor={this._keyExTractor}
            />
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
        lineHeight: 20
    },
    itemArrow: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
})
export default connect(state => ({
        ...state,//配置全局store 中所有的state
        state: state.homeReducer
    }),
    (dispatch) => ({
        actions: bindActionCreators(Object.assign({}, homeAction, commentAction), dispatch)
    })
)(HomeScreen);
// export default HomeScreen;