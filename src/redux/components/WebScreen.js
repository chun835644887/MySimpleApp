import React,{Component} from 'react';
import {
    View,Text,WebView,ActivityIndicator,StyleSheet
} from 'react-native';
import {ListItem, Button, Card, List} from 'react-native-elements';
import globalStyles from './module/GlobalStyles';


export default class WebScreen extends Component{
    static navigationOptions = ({navigation}) => {
        return{
            title:navigation.state.params.title
        }
    }
    constructor(props){
        super(props);
        this.state = {
            url:''
        }
    }
    componentDidMount = () => {
        this.setState({
           url:this.props.navigation.state.params.url?this.props.navigation.state.params.url:''
        });
    }
    render(){
        return(
            <View style={globalStyles.flex1}>
                <WebView
                    javaScriptEnabled={true}/*仅限Android平台。iOS平台JavaScript是默认开启的。*/
                    source={{uri:this.state.url}}/*请求页面地址*/
                    domStorageEnabled={true} /*仅限Android平台。指定是否开启DOM本地存储。*/
                    startInLoadingState={true}/*强制WebView在第一次加载时先显示loading视图。默认为true。*/
                    decelerationRate="Normal"
                    style={styles.webView}
                    renderLoading={() => {
                        return (
                            <View style={[globalStyles.flex1,styles.loading]}>
                                <ActivityIndicator size='large' />
                            </View>

                        )
                    }}/*返回一个加载指示器*/
                    renderError={() => {
                        return (
                            <View style={[styles.loading,globalStyles.flex1]}>
                                <Text>加载异常</Text>
                            </View>
                        );
                    }}/*请求失败*/

                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    loading:{
        alignItems:'center',
        justifyContent:'center',
    },
    webView:{
        backgroundColor:'#fff'
    }
})
