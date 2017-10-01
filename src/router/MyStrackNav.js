import {StackNavigator, TabNavigator} from 'react-navigation';
import React, {Component} from 'react';
import Tab from './MyTabNav'
import HttpScreen from '../redux/components/HttpScreen';
import WebScreen from '../redux/components/WebScreen';
import ReduxScreen from '../redux/components/ReduxScreen';
import QCodeScreen from '../redux/components/QCodeScreen';
import StorageScreen from '../redux/components/StorageScreen';
import AnimatableScreen from '../redux/components/AnimatableScreen';
import ShopDetail from '../redux/components/ShopDetail';
import MapLocation from '../redux/components/MapLocation';
import ImageUpload from '../redux/components/ImageUpload';
import Toast from '../redux/components/Toast';
import Chart from '../redux/components/Chart';
import BarChart from '../redux/components/BarChart';
import AppInstruction from '../redux/components/AppInstruction';
import PieChart from '../redux/components/PieChart';
import RadarChart from '../redux/components/RadarChart';
import ScatterPlotChart from '../redux/components/ScatterPlotChart';

const StrackNav = StackNavigator(
    {
        Tab: {screen: Tab},
        HttpScreen:{screen:HttpScreen},
        WebScreen:{screen:WebScreen},
        ReduxScreen:{screen:ReduxScreen},
        QCodeScreen:{screen:QCodeScreen},
        StorageScreen:{screen:StorageScreen},
        ShopDetail:{screen:ShopDetail},
        MapLocation:{screen:MapLocation},
        Chart:{screen:Chart},
        BarChart:{screen:BarChart},
        AppInstruction:{screen:AppInstruction,navigationOptions:{
            header:null
        }},
        RadarChart:{screen:RadarChart},
        PieChart:{screen:PieChart},
        ScatterPlotChart:{screen:ScatterPlotChart},
        Toast:{screen:Toast},

        AnimatableScreen:{screen:AnimatableScreen}
    },
    {
        initialRouteName: 'Tab',
        navigationOptions: { //通用配置 参考 https://reactnavigation.org/docs/navigators 属性 全局属性
            headerBackTitle: null,
            headerTintColor: '#fff',
            showIcon: true,
            swipeEnabled: false,
            animationEnabled: false,
            headerStyle: {
                backgroundColor: '#1E88E5',
            }
        },
        mode: 'screen',
        headerMode: 'screen',//float 共用一个header 意思就是有title文字渐变效果。screen- 各用各的header 意思就是没有title文字渐变效果。
        cardStyle: {},
    })
export default StrackNav