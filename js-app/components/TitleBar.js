/**
 * Created by YJH on 2018/7/3.
 */
import React, {Component, PropTypes} from "react";
import {Text, View, StyleSheet, StatusBar, Platform,} from "react-native";
import {Header, Body, Left, Right, Title} from "native-base";
import ImgButton from "./ImgButton";
import {images} from "../resource/images";
import {colors} from '../resource/colors';
export default class TitleBar extends Component {

    static defaultProps = {
        leftIcon: images.ic_title_bar_back,
    };


    _renderRight() {
        if (this.props.rightIcon) {
            return <ImgButton
                style={styles.image_header_right}
                source={this.props.rightIcon}
                onPress={this.props.onRightIconPress}
            />
        } else if (this.props.rightTitle) {
            return <Text
                style={styles.text_right_title}>
                {this.props.rightTitle}
            </Text>
        }
    }

    render() {
        let status = <View style={[styles.statusBar, this.props.statusBar]}>
            <StatusBar {...this.props.statusBar}/>
        </View>;
        return (
            <Header style={styles.header}>
                {status}
                <Left>
                    <ImgButton
                        style={styles.imgButton}
                        source={this.props.leftIcon}
                        onPress={this.props.onLeftIconPress}
                    />
                </Left>

                <Body>
                <Title style={styles.title}>{this.props.title}</Title>
                </Body>

                <Right>{this._renderRight()}</Right>
            </Header>

        );
    }
}

const styles = StyleSheet.create({
    header: {backgroundColor: colors.yellow_FFD900},
    imgButton: {width: 22, height: 22},
    title: {color: colors.white_fff, justifyContent: 'center', alignSelf: 'center', fontSize: 20},
    image_header_right: {
        height: 26,
        width: 26,
    },
    text_right_title: {
        color: colors.white_fff,
        fontSize: 16,
    },
    statusBar: {
        height: Platform.OS === 'android' ? 44 : 40,
    }
});
