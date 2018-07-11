/**
 * Created by YJH on 2018/7/3.
 */

import React, {Component} from "react";
import {StackNavigator} from "react-navigation";

import WelcomScreen from "./pages/WelcomScreen";
import MainScreen from "./pages/MainScreen";
import FlatlistScreen from "./pages/FlatlistScreen";
import QRScannerScreen from "./pages/QRScannerScreen";
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

const TransitionConfiguration = () => ({
    screenInterpolator: (sceneProps) => {
        const {scene} = sceneProps;
        const {route} = scene;
        const params = route.params || {};
        const transition = params.transition || 'forHorizontal';
        return CardStackStyleInterpolator[transition](sceneProps);
    },
});


export const AppNavigator = StackNavigator(
    {
        Welcome:{
            screen:WelcomScreen,
        },
        Home: {
            screen: MainScreen,
        },
        Notification: {
            screen: FlatlistScreen,
        },
        Scanner:{
            screen:QRScannerScreen
        },


    }, {
        initialRouteName: 'Welcome', // 默认显示界面
        headerMode: 'none',//导航栏的显示模式-隐藏导航栏
        transitionConfig: TransitionConfiguration,
        mode: 'card',//页面切换模式-普通app常用的左右切换
    },
);
