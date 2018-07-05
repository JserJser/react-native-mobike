/**
 * Created by YJH on 2018/7/3.
 */

import React, {Component} from "react";
import {StackNavigator} from "react-navigation";

import WelcomScreen from "./pages/WelcomScreen";
import MainScreen from "./pages/MainScreen";
import NotifyScreen from "./pages/NotifyScreen";
export const AppNavigator = StackNavigator(
    {
        Welcome:{
            screen:WelcomScreen,
        },
        Home: {
            screen: MainScreen,
        },
        Notification: {
            screen: NotifyScreen,
        },

    }, {
        initialRouteName: 'Welcome', // 默认显示界面
        headerMode: 'none',//导航栏的显示模式-隐藏导航栏
        mode:'card',//页面切换模式-普通app常用的左右切换
    },
);
