import React, {Component} from 'react';
import {
    View, Text, Image, ScrollView, AsyncStorage, TextInput, StyleSheet
} from 'react-native';
import Storage from 'react-native-storage';
import globalStyles from './module/GlobalStyles';
import {ListItem, Button, Card, List} from 'react-native-elements';

let storage = new Storage({
    // 最大容量，默认值1000条数据循环存储
    size: 1000,

    // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
    // 如果不指定则数据只会保存在内存中，重启后即丢失
    storageBackend: AsyncStorage,

    // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
    defaultExpires: 1000 * 3600 * 24,

    // 读写时在内存中缓存数据。默认启用。
    enableCache: true,

    // 如果storage中没有相应数据，或数据已过期，
    // 则会调用相应的sync方法，无缝返回最新数据。
    // sync方法的具体说明会在后文提到
    // 你可以在构造函数这里就写好sync的方法
    // 或是在任何时候，直接对storage.sync进行赋值修改
    // 或是写到另一个文件里，这里require引入
    // sync: require('你可以另外写一个文件专门处理sync')

});
export default class StorageScreen extends Component {
    static navigationOptions = ({navigation}) => {
        console.log(navigation);
        return {
            title: navigation.state.params.title
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            textInput: '',
            saveData: '',
            saveDataKeys: []
        }
    }
    componentDidMount = () => {
        storage.load({
            key: 'saveData'
        }).then(data => {
            if(data){
                this.setState({
                    saveData:data.first
                })
            }
        }).catch(e => {
            new Error('数据读取异常');
        })
    }
    render() {
        return (
            <ScrollView>
                <Card
                    title='简单的例子'
                >
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid="#50D5FD"
                        ref="textInput"
                        value={this.state.textInput}
                        onChangeText={(text) => {
                            this.setState({
                                textInput: text
                            })
                        }}
                        placeholder="输入存储数据"
                        placeholderTextColor="#aaa"
                    />

                    <View style={[globalStyles.spaceBetween, globalStyles.row]}>
                        <Button
                            title='存储数据'
                            buttonStyle={globalStyles.btn}
                            borderRadius={5}
                            fontSize={12}
                            onPress={() => {
                                let text = this.state.textInput;
                                storage.save({
                                    key: 'saveData',
                                    data: {
                                        first: text
                                    }
                                });
                                this.setState({
                                    textInput:'',
                                    saveData:text
                                })
                            }}
                        />
                        <Button
                            title="获取数据"
                            fontSize={12}
                            borderRadius={5}
                            buttonStyle={globalStyles.btn}
                            onPress={() => {
                                storage.load({
                                    key: 'saveData'
                                }).then(data => {
                                    console.log(data);
                                }).catch(e => {
                                    new Error('数据读取异常');
                                })
                            }}
                        />
                        <Button
                            title='删除数据'
                            buttonStyle={globalStyles.btn}
                            borderRadius={5}
                            fontSize={12}
                            onPress={() => {
                                storage.remove({
                                    key:'saveData'
                                })
                            }}
                        />
                    </View>
                </Card>
                <Card>
                    <Text>
                        保存的数据：{this.state.saveData}
                    </Text>
                </Card>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    input: {
        color: '#666'
    }
});
