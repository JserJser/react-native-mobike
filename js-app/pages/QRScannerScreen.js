/**
 * Created by marno on 2017/4/13
 * Function:
 * Desc:
 */
import React, {Component} from "react";
import {Text, View, StyleSheet} from "react-native";

import {images} from "../resource/images";
import {colors} from "../resource/colors";

//import {TitleBar, QRScannerView, ImgButton} from "../components/";
import ImgButton from '../components/ImgButton';
import TitleBar from '../components/TitleBar';
import QRScannerView from '../components/QRScannerView';

export default class QRScannerScreen extends Component {
    constructor(props) {
        super(props);
    }

    _toGetHelp(){
        this.props.navigation.goBack();
    }


    render() {
        return (
            <QRScannerView
                bottomMenuStyle={{height: 120, backgroundColor: '#000000', opacity: 1}}
                isShowScanBar={true}
                scanBarImage={images.ic_scan_bar}
                cornerColor={colors.yellow_FFD900}
                cornerOffsetSize={0}
                borderWidth={0}
                hintText={'请对准车牌上的二维码'}
                hintTextStyle={{color: colors.yellow_FFD900, fontSize: 16, fontWeight: 'bold'}}
                hintTextPosition={110}
                maskColor={colors.black_0000004D}
                onScanResultReceived={this.barcodeReceived.bind(this)}
                bottomMenuHeight={120}

                renderTopBarView={() => {
                    return (
                        <TitleBar
                            title='扫码'
                            leftIcon={images.ic_title_cancel}
                            rightIcon={images.ic_title_help}
                            onLeftIconPress={() => this.props.navigation.goBack()}
                            onRightIconPress={this._toGetHelp.bind(this)}
                        />
                    )
                }}

                renderBottomMenuView={() => this._renderMenu()}
            />
        )
    }

    _renderMenu() {
        return (
            <View style={styles.view_menu_container}>
                <View style={styles.view_menu_item_container}>
                    <ImgButton
                        style={styles.image_bottom_menu}
                        source={images.ic_scan_bluetooh}
                    />
                    <Text
                        style={styles.text_menu_title}
                    >手动输入车牌号</Text>
                </View>

                <View style={styles.view_menu_item_container}>
                    <ImgButton
                        style={styles.image_bottom_menu}
                        source={images.ic_scan_bar_light}
                    />
                    <Text
                        style={styles.text_menu_title}
                    >手电筒</Text>
                </View>
            </View>
        )
    }

    barcodeReceived(e) {

        console.log(e);

        // if (this.state.parsingResult ) return;
        //
        // this.setState({
        //     parsingResult: e.data,
        // });

    }
}

const styles = StyleSheet.create({
    image_bottom_menu:{
        height:50,
        width:50,
        marginBottom:10,
    },
    view_menu_container:{
        flexDirection:'row',
        justifyContent:'space-around',
        paddingTop:16
    },
    text_menu_title:{
        color:'white',
        fontSize:14
    },
    view_menu_item_container:{
        justifyContent:'center',
        alignItems:'center',
    }
});