/**
 * flatlist StyleSheet统一管理
 * Created by YJH on 2018/7/6.
 */
import {StyleSheet} from 'react-native';
import {colors} from '../resource/colors';
export const styles = StyleSheet.create({
    container: {flex: 1,},
    text: {
        marginHorizontal: 20,
        padding: 20,
        fontSize: 20,
        fontWeight: '400',
        color: colors.bg},
    line: {
        height: 1,
        backgroundColor: colors.transparent
    }
});