import React,{Component} from 'react';
import {
    RefreshControl,
    Dimensions,
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
}from 'react-native';
import {Divider, ListItem} from 'react-native-elements'
import ViewPager from 'react-native-viewpager';
import ShopList from './ShopList';
import data from '../../../res/CircleTabData';
import globalStyles from '../module/GlobalStyles';
/*背景图*/
const IMGS = [
    'http://xn9y1csr.gic.cnbj01.cdsgss.com/rest/upload/images/201702/20/2562bc79dbfc4613b9e6d9b14e9ad660.png',
    'http://xn9y1csr.gic.cnbj01.cdsgss.com/rest/upload/images/201702/21/3d27f1d2cbed4f1e9b0bc41438f476a1.jpg',
    'http://xn9y1csr.gic.cnbj01.cdsgss.com/rest/upload/images/201702/22/9b33f06f22944077a1e38cdaf5541bee.png',
];
const dataSource = new ViewPager.DataSource({
    pageHasChanged: (p1, p2) => p1 !== p2,
});
const width = Dimensions.get('window').width;
console.log(data);
export default class ShopHomeTab extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:data.tab1,
            dataSource: dataSource.cloneWithPages(IMGS),
        }
        this._renderBackImage = this._renderBackImage.bind(this);
    }
    _renderBackImage = (item) => {
        return (
            <Image
                style={styles.page}
                source={{uri:item}}
            />
        )
    }
    componentDidMount = () => {
        // console.log(data);
    }
    _itemView = (item,index) => {
        return (
            <TouchableOpacity
                key={item+'_'+index}
                activeOpacity={0.6}
            >
                <View style={{justifyContent:'center',alignItems:'center'}} >
                    <Image
                        source={item.img}
                        style={{height:40,width:40,borderRadius:20}}/>
                    <Text style={{fontSize:12,marginTop:5,color:'#888586'}}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    render(){
        return (
            <ScrollView
                tabLabel={this.props.tabLabel}
                style={{flex:1,backgroundColor:'#444'}}
            >
                <View style={styles.container}>
                    <View style={{height:150}}>
                        <ViewPager
                            style={{height:150}}
                            isLoop={true}
                            autoPlay={true}
                            dataSource={this.state.dataSource}
                            renderPage={this._renderBackImage}
                        />
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'space-between',padding:15}}>
                        {this.props.tabList1.map(this._itemView)}
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',padding:15}}>
                        {this.props.tabList2.map(this._itemView)}
                    </View>
                    <ShopList
                        myShopList={data.ListData}
                        {...this.props}
                    />
                </View>

            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    page:{
        width:width,
        height:150
    }
})