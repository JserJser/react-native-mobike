/**
 * 功能：左侧抽拉的菜单页面
 * Created by YJH on 2018/7/3.
 */
import React, {Component} from 'react';
import {Text, Image, View, ScrollView, TouchableWithoutFeedback,StyleSheet} from 'react-native';
import {colors} from '../resource/colors';
import {images} from '../resource/images';
import ProfileItem from '../components/ProfileItem';


export  default class DrawerScreen extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (<View style={styles.container}>
            <ScrollView >
                <TouchableWithoutFeedback>
                    <View style={styles.view_drawer_header}>
                        <View style={styles.view_avatar}>
                            <Image style={styles.image_avatar}
                                   source={images.ic_avatar}/>
                        </View>

                        <View style={styles.view_name}>
                            <Text
                                style={styles.text_nickname}
                            >{'摩的哟哟'}</Text>
                            <Text
                                style={styles.text_account}
                            >{'公众号-摩的哟哟'}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <ProfileItem
                    style={styles.coin}
                    source = {images.ic_left_coin}
                    title = {'99摩币'}
                />

                <ProfileItem
                    source = {images.ic_left_money}
                    title = {'我的钱包'}
                    content = {'购买月卡无限骑'}
                />


                <ProfileItem
                    source = {images.ic_left_coupon}
                    title = {'我的卡券'}
                />

                <ProfileItem
                    source = {images.ic_left_trip}
                    title = {'我的行程'}
                    content = {'共1000000公里'}
                />

                <ProfileItem
                    source = {images.ic_left_store}
                    title = {'摩的商城'}
                />

                <ProfileItem
                    source = {images.ic_left_invite}
                    title = {'发红包赚赏金'}
                />
            </ScrollView>

        </View>);
    }

}

const styles = StyleSheet.create({
    container:{flex:1, backgroundColor:colors.white_fff},
    view_drawer_header: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: colors.gray_e9e9e9,
        margin: 16,
        paddingBottom: 16,
    },
    view_avatar: {
        alignItems: 'center',
        flexDirection:'row',
    },
    view_name: {
        justifyContent:'center',
        marginLeft:16,
    },
    image_label: {
        width: 66,
        resizeMode: 'contain',
        position: 'absolute',
        bottom: -18
    },
    image_avatar: {
        height: 70,
        width: 70,
        borderRadius: 50,
    },
    text_nickname: {
        fontSize: 16,
        fontWeight:'400',
        color:colors.black_232323
    },
    text_account: {
        fontSize:14,
        color:colors.black_0000004D
    },
    image_activities:{
        resizeMode:'contain',
        width:280,
        height:160,
    },
    coin: {
        flexDirection:'row',
        borderBottomWidth: 0.5,
        borderBottomColor: colors.gray_e9e9e9,
        alignItems:'center',
        padding:10,
    },

});