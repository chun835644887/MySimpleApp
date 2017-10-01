import React, {Component} from 'react';
import {
    View, Text, Image, StyleSheet, TouchableOpacity, FlatList
} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import GlobalStyle from './module/GlobalStyles';
import data from '../../res/CircleTabData';
import ShopHomeTab from './modules/ShopHomeTab';
import ShopTab from './modules/ShopTab';

console.log(data);
export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
    }
    _keyExTractor = (item, index) => `${item.id}_${index}`;

    render() {
        return (
            <View style={{flex: 1,}}>
                <ScrollableTabView
                    tabBarUnderlineStyle={{height:2,backgroundColor:'#42a5f5'}}
                    style={{height:10}}
                    initialPage={0}
                    tabBarTextStyle={{fontSize:12}}
                    tabBarActiveTextColor="#42a5f5"//设置选中Tab的文字颜色。
                    tabBarInactiveTextColor=""//设置未选中Tab的文字颜色。
                    tabBarBackgroundColor="#fff"//设置整个Tab这一栏的背景颜色
                    renderTabBar={() => <ScrollableTabBar />}
                >
                    <ShopHomeTab
                        tabLabel="首页"
                        tabList1={data.tab1.list1}
                        tabList2={data.tab1.list2}
                        shopList={data.ListData}
                        {...this.props}
                    />
                    <ShopTab
                        tabLabel="服装"
                        tabList1={data.tab2.list1}
                        tabList2={data.tab2.list2}
                        shopList={data.ListData}
                        {...this.props}
                    />
                    <ShopTab
                        tabLabel="男装"
                        tabList1={data.tab3.list1}
                        tabList2={data.tab3.list2}
                        shopList={data.ListData}
                        {...this.props}
                    />
                    <ShopTab
                        tabLabel="家具"
                        tabList1={data.tab4.list1}
                        tabList2={data.tab4.list2}
                        shopList={data.ListData}
                        {...this.props}
                    />
                    <ShopTab
                        tabLabel="零食"
                        tabList1={data.tab5.list1}
                        tabList2={data.tab5.list2}
                        shopList={data.ListData}
                        {...this.props}
                    />
                    <ShopTab
                        tabLabel="熟食"
                        tabList1={data.tab6.list1}
                        tabList2={data.tab6.list2}
                        shopList={data.ListData}
                        {...this.props}
                    />
                </ScrollableTabView>

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
        lineHeight: 20
    },
    itemArrow: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
})