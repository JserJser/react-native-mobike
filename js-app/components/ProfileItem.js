/**
 * Created by YJH on 2018/7/3.
 */
import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {colors} from '../resource/colors';

export default class ProfileItem extends Component {

    static defaultProps = {
        style:{
            flex: 1,
            flexDirection: 'row',
            padding: 4,
            alignItems:'center'
        },
    };
    render() {
        return <TouchableWithoutFeedback>
            <View style={this.props.style}>
                <Image
                    style={styles.image_icon}
                    source={this.props.source}/>
                <Text
                    style={styles.text_title}
                >{this.props.title}</Text>
                <Text
                    style={styles.text_content}
                >{this.props.content}</Text>

            </View>

        </TouchableWithoutFeedback>
    }
}

const styles = StyleSheet.create({
    text_title: {
        color: colors.black_232323,
        fontSize:16,

    },
    text_content: {
        flexGrow: 1,
        textAlign: 'right',
        color:colors.black_0000004D,
        fontSize:15,
    },
    image_icon: {
        height: 40,
        width: 40,
        marginRight: 10,
    }
});