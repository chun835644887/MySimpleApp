import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, Image
} from 'react-native';
import {Divider, Icon, Button} from 'react-native-elements';

class ShopCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: -1
        }
    }

    render() {
        return (
            <View style={[styles.carBox]}>
                <View style={[styles.row]}>
                    <View style={[styles.row]}>
                        <TouchableOpacity
                            style={styles.iconBox}
                            onPress={() => {
                                this.setState({
                                    currentIndex:1
                                })
                            }}
                        >
                            <View>
                                {/*tintColor可以改变图片的颜色*/}
                                <Image
                                    source={require('../../../../images/home_up.png')}
                                    style={[styles.iconImg,
                                        this.state.currentIndex==1?{tintColor:'red'}:{}]}
                                />
                                <Text style={styles.iconText}>首页</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.iconBox}
                            onPress={() => {
                                this.setState({
                                    currentIndex:2
                                })
                            }}
                        >
                            <View>
                                <Image
                                    source={require('../../../../images/icon-like.png')}
                                    style={[styles.iconImg,
                                        this.state.currentIndex==2?{tintColor:'red'}:{}]}
                                />
                                <Text style={styles.iconText}>喜欢</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.iconBox}
                            onPress={() => {
                                this.setState({
                                    currentIndex:3
                                })
                            }}
                        >
                            <View>
                                <Image
                                    source={require('../../../../images/icon-notice.png')}
                                    style={[styles.iconImg,
                                        this.state.currentIndex==3?{tintColor:'red'}:{}]}
                                />
                                <Text style={styles.iconText}>客服</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={[styles.btn,{backgroundColor:'#888586'}]}>
                    <TouchableOpacity
                        onPress={()=>{}}
                    >
                        <Text style={{color:'#fff',fontSize:14}}>加入购物车</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={[styles.btn,{backgroundColor:'#f44336'}]}>
                    <TouchableOpacity
                        onPress={()=>{}}
                    >
                        <Text style={{color:'#fff',fontSize:14}}>立即购买</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btn:{
        flex:1,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
    carBox: {
        height: 50,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    flex1: {
        flex: 1
    },
    row: {
        flexDirection: 'row'
    },
    iconBox: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconImg: {
        width: 25,
        height: 25,
    },
    iconText: {
        fontSize: 12,
        color: '#999'
    },
});
export default ShopCar