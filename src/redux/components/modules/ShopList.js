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

export default class ShopList extends Component {
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
                style={globalStyles.marginT8}
                key={Math.random()}
                onPress={() => {
                    this.props.navigation.navigate('ShopDetail', {title: '商品详情'});
                }}
            >
                <View>
                    <Image
                        style={styles.img}
                        source={{uri:item.item.img}}
                    />
                    <Text>{item.item.name}</Text>
                    <View style={[globalStyles.row,styles.between]}>
                        <View style={[globalStyles.row,{alignItems:'flex-end'}]}>
                            <Text style={styles.price}>￥22</Text>
                            <Text style={styles.sales}>已拼1.2w件</Text>
                        </View>
                        <View style={globalStyles.row}>
                            <Button
                                iconRight
                                onPress={()=>{}}
                                title={"去拼单"}
                                textStyle={{paddingLeft:5}}
                                buttonStyle={[globalStyles.btn,{backgroundColor:'#f44336'}]}
                                borderRadius={5}
                                fontSize={12}
                                icon={{name: 'chevron-right'}}
                            />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

        );
    }
    render() {
        return (
            <AnimatedFlatList
                keyExtractor={this._keyExtractor}
                data={this.props.myShopList}
                renderItem={this._itemView}
            />
        )
    }
}
const styles = StyleSheet.create({
    img:{
        width:width,
        height:150
    },
    price:{
        color:'#f00',
        fontSize:16
    },
    sales:{
        color:'#999',
        fontSize:12
    },
    between:{
        justifyContent:'space-between',
        alignItems:'flex-end'
    },
});