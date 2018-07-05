/**
 * 功能：自定义img按钮
 * Created by YJH on 2018/7/3.
 */

import React, {Component} from "react";
import {Image, TouchableWithoutFeedback} from "react-native";

export default class ImgButton extends Component{
    render(){
        return(
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <Image style={this.props.style} source={this.props.source}></Image>
            </TouchableWithoutFeedback>
        );
    }
}