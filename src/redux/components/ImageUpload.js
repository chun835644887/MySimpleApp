/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Image
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
/**/
export default class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: []
        }
    }

    getImg = () => {
        if (this.state.img.length != 0) {
            // console.log(this.state.img);
            return (
                <View style={{flexDirection: 'row'}}>
                    {this.state.img.map((item) => {
                        return (
                            <Image
                                key={Math.random()}
                                source={{uri: item}}
                                style={{width: 100, height: 100}}
                            />
                        );
                    })}
                </View>
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.mt8}>
                    <Button
                        title="选择图片(单张)"
                        onPress={() => {
                            ImagePicker.openPicker({
                                width: 300,
                                height: 400,
                                cropping: true, /*是否裁剪*/
                                includeBase64: true, /*base64*/
                                cropperCircleOverlay: true
                            }).then(image => {
                                let imgArr = [];
                                let base64 = 'data:image/png;base64,' + image.data;
                                /*这里的base64要当初uri要加  data:image/png;base64, */
                                imgArr.push(base64);
                                this.setState({
                                    img: imgArr
                                })
                            });
                        }}
                    />
                </View>

                <View style={styles.mt8}>
                    <Button
                        style={styles.mt8}
                        title="选择图片(多张)"
                        onPress={() => {
                            ImagePicker.openPicker({
                                multiple: true, /*选择多张*/
                                includeBase64: true
                            }).then(images => {
                                let imgArr = [];
                                images.map((item) => {
                                    let base64 = 'data:image/png;base64,' + item.data;
                                    imgArr.push(base64);
                                })
                                this.setState({
                                    img: imgArr
                                })
                            });
                        }}
                    />
                </View>

                <View style={styles.mt8}>
                    <Button
                        title="照相机"
                        onPress={() => {
                            ImagePicker.openCamera({
                                width: 300,
                                height: 400,
                                cropping: true
                            }).then(image => {
                                let imgArr = [];
                                let base64 = 'data:image/png;base64,' + image.data;
                                /*这里的base64要当初uri要加  data:image/png;base64, */
                                imgArr.push(base64);
                                this.setState({
                                    img: imgArr
                                })
                            });
                        }}
                    />
                </View>

                <Text>选择的图片</Text>
                {this.getImg()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    mt8: {
        marginTop: 8
    }
});