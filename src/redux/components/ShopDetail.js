import React, {Component} from 'react';
import {
    RefreshControl,
    Dimensions,
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
// import data from '../../res/CircleTabData';
import {Divider,Icon, Button} from 'react-native-elements';
import ViewPager from 'react-native-viewpager';
import globalStyles from './module/GlobalStyles';
import ShopCar from './modules/ShopCar';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const IMGS = [
    'http://xn9y1csr.gic.cnbj01.cdsgss.com/rest/upload/images/201702/20/2562bc79dbfc4613b9e6d9b14e9ad660.png',
    'http://xn9y1csr.gic.cnbj01.cdsgss.com/rest/upload/images/201702/21/3d27f1d2cbed4f1e9b0bc41438f476a1.jpg',
    'http://xn9y1csr.gic.cnbj01.cdsgss.com/rest/upload/images/201702/22/9b33f06f22944077a1e38cdaf5541bee.png',
];
const dataSource = new ViewPager.DataSource({
    pageHasChanged: (p1, p2) => p1 !== p2,
});
export default class ShopDetail extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.title,
            headerRight: (
                <TouchableOpacity
                    // onPress={()=>navigation.navigate('Shop_Car')}
                >
                    <Image
                        style={{width:25,height:25,marginRight:15}}
                        resizeMode="stretch"
                        source={require('../../../images/shop_up.png')}/>
                </TouchableOpacity>
            ),
        }

    };

    constructor(props) {
        super(props);
        this.state = {
            dataSource: dataSource.cloneWithPages(IMGS),
            data:1818235982
        }
        this._renderBackImage = this._renderBackImage.bind(this);
        this._renderTimeView = this._renderTimeView.bind(this);
        this.showTime = this.showTime.bind(this);
        this._index = 1818235982;
        this._timer = null;
    }

    _renderBackImage = (item) => {
        return (
            <Image
                style={styles.pageImg}
                source={{uri: item}}
            />
        )
    }
    showTime() {
        // 获取某个时间格式的时间戳
        let timestamp3 = this.state.data;
        let newDate = new Date();
        newDate.setTime(timestamp3 * 1000);
        Date.prototype.format = function (format) {
            let date = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                "S+": this.getMilliseconds()
            };
            if (/(y+)/i.test(format)) {
                format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
            }
            // console.log('if:'+format);
            for (let k in date) {
                if (new RegExp("(" + k + ")").test(format)) {
                    format = format.replace(RegExp.$1, RegExp.$1.length == 1
                        ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
                }
            }
            // console.log('for:'+format);
            return format;
        };
        return newDate.format('h:m:s')

    }
    //倒计时
    countTime() {
        this._timer = setInterval(() => {
            this.setState({data: this._index--});
            if (this.state.data <= 0) {
                this._timer && clearInterval(this._timer);
                alert("时间到了");
            }
        }, 1000);
    }
    _renderTimeView = (position) => {
        return (
            <View
                style={[globalStyles.row, globalStyles.spaceBetween, globalStyles.borderB1,styles.paddingV8, {alignItems: 'center'}]}>
                <View style={[globalStyles.row, {alignItems: 'center'}]}>
                    <Image
                        source={position%2==0?require('../../../images/icon-person3.png'):require('../../../images/icon-person4.png')}
                        style={{width: 30, height: 30, borderRadius: 15}}
                    />
                    <Text>剩余{this.showTime()}</Text>
                </View>
                <Button
                    title={"去参团"}
                    textStyle={{color: '#f44336'}}
                    buttonStyle={[globalStyles.btn, globalStyles.whiteBGC, {
                        marginTop: 0,
                        alignSelf: 'center',
                        borderWidth: 1,
                        borderColor: '#f44336',
                    }]}
                    borderRadius={5}
                    fontSize={12}
                />
            </View>
        );
    }
    componentDidMount = () => {
        this.countTime();
    }
    render() {
        return (
            <View style={[globalStyles.flex1]}>
                <View style={styles.container}>
                    <ScrollView style={[{paddingBottom:50}]}>
                        <View style={styles.bgImg}>
                            <ViewPager
                                style={{height: 300}}
                                isLoop={true}
                                autoPlay={true}
                                dataSource={this.state.dataSource}
                                renderPage={this._renderBackImage}
                            />
                        </View>
                        <View style={[{backgroundColor: '#f0f0f0'}]}>
                            <View
                                style={[globalStyles.row, styles.between, {paddingTop: 8}, globalStyles.whiteBGC, globalStyles.paddingH8]}>
                                <View style={[globalStyles.row, {alignItems: 'flex-end'}]}>
                                    <Text style={styles.price}>￥9.6</Text>
                                    <Text style={styles.sales}>已售0.9w万件</Text>
                                </View>
                                <View style={[globalStyles.row]}>
                                    <Text style={styles.team}>团购0.89w件</Text>
                                    <Text style={styles.wantTeam}>0.1w人参团</Text>
                                </View>
                            </View>
                            <View style={[globalStyles.paddingH8, globalStyles.whiteBGC]}>
                                <Text style={styles.itemName}>正版包邮 JavaScr1pt语言精粹(修订版)来自Yahoo的zi深JavaScr1pt架构师为你讲解 高性能
                                    JavaScr1pt 高性能 JavaScript</Text>
                                <Text style={styles.itemDescription}>javascript曾是“世界上最被误解的语言”，因为它担负太多的特性，
                                    包括糟糕的交互和失败的设计，但随着ajax的到来，javascript“从最受误解的编程语言演变为最流行的语言”，
                                    这除了幸运之外，也证明了它其实是一门优秀的语言。douglas crockford在本书中剥开了javascript沾污的外衣，
                                    抽离出一个具有更好可靠性、可读性和可维护性的javascript子集，让你看到一门优稚的、轻量级的和非常富有表现力的语言。
                                    作者从语法、对象、函数、继承、数组、正则表达式、方法、样式和优美的特性这9个方面来呈现这门语言真正的精华部分，
                                    通过它们完全可以构建出优雅高效的代码。作者还通过附录列出了这门语言的糟粕和鸡肋部分，
                                    且告诉你如何避免它们。最后还介绍了jslint，通过它的检验，能有效地保障我们的代码品质。</Text>
                            </View>
                            <View style={[globalStyles.marginT8, globalStyles.paddingH8, globalStyles.whiteBGC]}>
                                <View
                                    style={[globalStyles.row, globalStyles.spaceBetween, globalStyles.borderB1, {alignItems: 'center'}]}>
                                    <Text style={[{fontSize: 10, color: '#999'}]}>250人开团</Text>
                                    <View style={[globalStyles.row, {alignItems: 'center'}]}>
                                        <Text style={[{fontSize: 10, color: '#999'}]}>查看更多</Text>
                                        <Icon
                                            name='chevron-right'
                                            color='#999999'
                                        />
                                    </View>
                                </View>
                                {this._renderTimeView(1)}
                                {this._renderTimeView(2)}
                            </View>
                            <Image
                                style={{width:width,flex:1}}
                                resizeMode="stretch"
                                source={require('../../../images/img-info.png')}/>
                        </View>
                    </ScrollView>
                    <ShopCar
                        {...this.props}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    bgImg: {
        height: 300,
        width: width
    },
    pageImg: {
        width: width,
        height: 300
    },
    between: {
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    paddingV8: {
        paddingVertical: 8
    },
    price: {
        fontSize: 14,
        color: '#f00',
        marginRight: 6
    },
    sales: {
        fontSize: 10,
        color: '#999'
    },
    team: {
        marginRight: 6,
        fontSize: 10,
        color: '#999'
    },
    wantTeam: {
        fontSize: 10,
        color: '#999'
    },
    itemName: {
        marginTop: 8,
        fontSize: 14,
        color: '#999'
    },
    itemDescription: {
        color: '#999',
        fontSize: 10,
        marginTop: 8
    },
});