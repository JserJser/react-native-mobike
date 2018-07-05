/**
 * 功能：首页地图上飘的点击扫码的按钮
 * Created by YJH on 2018/7/5.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {images} from '../resource/images';
import {colors} from '../resource/colors';

export default class ScannerView extends Component {

    render() {
        return (
            <TouchableOpacity style={this.props.style} onPress={this.props.onPress}>
                <View style={styles.container}>
                    <Image style={styles.imgBg} source={images.ic_home_bg_camera}/>
                    <View style={styles.viewContainer}>
                        <Image style={styles.imgBt} source={images.ic_home_camera}/>
                        <Text style={styles.text}>扫码骑车</Text>
                    </View>

                </View></TouchableOpacity>);
    }
}


//获取屏幕宽度
var Dimensions = require('Dimensions');
var mWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container:{flex:1},
    imgBg: {width: mWidth / 3, height: 60},
    viewContainer: {
        width: mWidth / 3,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    },
    text: {fontSize: 16, color: colors.white_fff, marginLeft: 10,},
    imgBt: {width: 30, height: 30},
});