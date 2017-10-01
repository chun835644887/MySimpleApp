import React, {Component} from 'react';
import {
    View, Text, Image, ScrollView
} from 'react-native';
import {ListItem, Button, Card, List} from 'react-native-elements';
import {myFetch} from '../../http/FetchRequest';
import MyAxios from '../../http/AxiosRequest';
import globalStyles from './module/GlobalStyles';


class HttpScreen extends Component {
    /*设置顶部title*/
    static navigationOptions = ({navigation}) => {
        console.log(navigation);
        return {
            title: navigation.state.params.title
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            dataFetch: [],
            dataAxios: []
        }
    }
    componentDidMount = () => {
        console.log(this.props)
    }
    requestData = (type) => {
        if (type === 'fetch') {
            this.setState({
                dataFetch: [],
                dataAxios: []
            }, () => {
                myFetch({method: 'GET', url: 'http://toutiao-ali.juheapi.com/toutiao/index?type=type'}, (res) => {
                    console.log(res.result.data)
                    this.setState({
                        dataFetch: res.result.data
                    });
                });
            })
        }
        if (type === 'axios') {
            let axios = new MyAxios(undefined);
            this.setState({
                dataFetch: [],
                dataAxios: []
            }, () => {
                axios.send({
                    method: 'GET',
                    url: 'toutiao/index?type=type'
                }, (res) => {
                    console.log(res.data.result.data);
                    this.setState({
                        dataAxios:res.data.result.data
                    })
                })
            });
        }
    }

    render() {
        return (
            <View style={[globalStyles.flex1]}>
                <ScrollView>
                    <Card
                        title="Fetch"
                    >
                        <List>
                            {
                                this.state.dataFetch.map((item, index) => (
                                    <ListItem
                                        roundAvatar
                                        key={index}
                                        title={item.title}
                                        onPress={() => {
                                            // console.log(this.props);
                                            // console.log(item.url)
                                            this.props.navigation.actions.pushTo('WebScreen', {
                                                url: item.url,
                                                title: item.title
                                            })
                                        }}
                                    />
                                ))
                            }
                        </List>
                        <Button
                            iconRight
                            title='发送请求'
                            onPress={() => this.requestData('fetch')}
                            icon={{name: 'send'}}
                            buttonStyle={globalStyles.btn}
                            borderRadius={5}
                            fontSize={12}
                            disabledStyle={{}}
                        />
                    </Card>
                    <Card
                        title="Axios"
                    >
                        <List>
                            {
                                this.state.dataAxios.map((item, index) => (
                                    <ListItem
                                        roundAvatar
                                        key={index}
                                        title={item.title}
                                        onPress={() => {
                                            // console.log(this.props);
                                            // console.log(item.url)
                                            this.props.navigation.actions.pushTo('WebScreen', {
                                                url: item.url,
                                                title: item.title
                                            })
                                        }}
                                    />
                                ))
                            }
                        </List>
                        <Button
                            iconRight
                            title='发送请求'
                            onPress={() => this.requestData('axios')}
                            icon={{name: 'send'}}
                            buttonStyle={globalStyles.btn}
                            borderRadius={5}
                            fontSize={12}
                            disabledStyle={{}}
                        />
                    </Card>
                </ScrollView>
            </View>
        );
    }
}

export default HttpScreen;