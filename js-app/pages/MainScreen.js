/**
 * Created by YJH on 2018/7/3.
 */
import React, {Component} from "react";
import {
    View,
    Image,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    WebView,

} from "react-native";

import {Drawer, Container} from "native-base";
import TitleBar from "../components/TitleBar";
import Toast, {DURATION} from 'react-native-easy-toast';
import DrawerScreen from './DrawerScreen';
import {images} from "../resource/images";
import {colors} from '../resource/colors';
import ScannerView from '../components/ScannerView';

export default class MainScreen extends Component {
    constructor(props) {
        super(props);
    }

    //titlebar 右侧按钮
    _onRightIconPress() {
        // this.refs.toast.show('hello world!', DURATION.LENGTH_SHORT);
        this.props.navigation.navigate('Notification')//navigateTo,params,action

    }

    //titlebar 左侧按钮
    _onLeftIconPress() {
        this._drawer._root.open();
    }

    //扫码
    _scanner(){
        // this.refs.toast.show('hello world!', DURATION.LENGTH_SHORT);
        this.props.navigation.navigate("Scanner")
    }

    render() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                content={<DrawerScreen/>}
            >
                <Container>
                    <TitleBar
                        onRightIconPress={() => this._onRightIconPress()}
                        onLeftIconPress={() => this._onLeftIconPress()}
                        title='摩拜单车'
                        leftIcon={images.ic_title_bar_menu}
                        rightIcon={images.ic_title_bar_notification}
                        statusBar={{backgroundColor: colors.yellow_FFD900}}
                    />
                    <WebView
                        source={require('../lib/amap.html')}
                        startInLoadingState={true}
                    />

                    <ScannerView
                        style={styles.imgBtn}
                        onPress={()=>this._scanner()}
                    />
                    <Toast ref="toast"/>
                </Container>

            </Drawer>

        );
    }
}

const styles = StyleSheet.create({
    container: {flex: 1, alignItems: 'center'},
    imgBtn: {flex: 1, position: 'absolute', bottom: 50, alignSelf: 'center'},
});
