import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Animated,
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import globalStyles from '../module/GlobalStyles';
import {CheckBox, Button, Divider, Icon} from 'react-native-elements';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
import data from '../../../res/CircleTabData';

const {width, height} = Dimensions.get('window');

export default class ShopList2 extends Component {
    constructor(props) {
        super(props);
        this._itemView = this._itemView.bind(this);
    }
    componentDidMount = () => {
    }
    _keyExtractor = (item, index) => `${item.id}_${index}`;
    _itemView = (item,index) => {
        return(
            <TouchableOpacity
                activeOpacity={0.6}
                style={[globalStyles.marginB8,{backgroundColor:'#f0f0f0'},styles.itemStyle,item.index%2==1?{paddingLeft:4}:{paddingRight:4}]}
                key={Math.random()}
                onPress={() => {
                    this.props.navigation.navigate('ShopDetail', {title: '商品详情'});
                }}
            >
                <View style={[{backgroundColor:'#fff',minHeight:230}]}>
                    <Image
                        source={{uri:item.item.img}}
                        style={styles.img}
                    />
                    <Text style={styles.name}>{item.item.name}</Text>
                    <View style={[globalStyles.row,styles.between,globalStyles.marginT8,]}>
                        <Text style={styles.price}>￥68</Text>
                        <Text style={styles.sales}>已卖0.9w万件</Text>
                    </View>
                </View>
            </TouchableOpacity>

        );
    }
    render() {
        return (
            <View style={{backgroundColor:'#f0f0f0'}}>
                <AnimatedFlatList
                    keyExtractor={this._keyExtractor}
                    data={this.props.myShopList}
                    renderItem={this._itemView}
                    numColumns={2}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    itemStyle:{
        width:width/2
    },
    img:{
        height:150
    },
    price:{
        color:'#f00',
        fontSize:16
    },
    sales:{
        color:'#999',
        fontSize:10
    },
    between:{
        justifyContent:'space-between',
        alignItems:'flex-end'
    },
    name:{
        color:'#999',
        fontSize:10,
        paddingHorizontal:4,
        marginTop:6
    },
});