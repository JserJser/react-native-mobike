/**
 * Created by YJH on 2018/7/4.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import Toast,{DURATION} from 'react-native-easy-toast';
import {Title,Body} from 'native-base';
import TitleBar from "../components/TitleBar";
import {images} from "../resource/images";
import {colors} from '../resource/colors';

export default class NotifyScreen extends Component{
    constructor(props){
        super(props);
    }


    _onLeftIconPress(){
        this.props.navigation.goBack();
    }







    render(){
        return (
            <View style = {styles.container}>
                <TitleBar
                    onLeftIconPress={this._onLeftIconPress.bind(this)}
                    title='我的消息'
                    leftIcon={images.ic_title_bar_back}
                    statusBar={{backgroundColor:colors.yellow_FFD900}}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{flex:1},
});