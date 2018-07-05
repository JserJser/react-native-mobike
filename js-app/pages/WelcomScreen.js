/**
 * Created by YJH on 2018/7/4.
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    StatusBar
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import {colors} from '../resource/colors';
import {images} from '../resource/images';
import {NavigationActions} from 'react-navigation';

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'Home'}),
    ],
});
export default class WelcomScreen extends Component {

    componentDidMount() {
        SplashScreen.hide();
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
        this.intervarTime = setInterval(() => {
            this.intervarTime && clearInterval(this.intervarTime);
            // this.props.navigation.navigate('Home');
            this.props.navigation.dispatch(resetAction);
        }, 1000);
    }


    render() {
        return (
            <View style={styles.container}>

                <Image source={images.ic_wel_mobike_marker} style={styles.imgTop}/>
                <Image source={images.ic_wel_mobike} style={styles.imgBelow}/>
            </View>
        )
    }
}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: colors.transparent,
        },
        imgTop: {width: 80, height: 80, marginTop: 100, justifyContent: 'center', alignSelf: 'center'},
        imgBelow: {width: 160, height: 30, justifyContent: 'center', alignSelf: 'center'},
    }
);