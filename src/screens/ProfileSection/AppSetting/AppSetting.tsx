import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BackWard from '../../../assets/icons/BackWard';
import ArrowDown from '../../../assets/icons/ArrowDown';
import Toggle from '../../../components/Toggle';

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';


export default function AppSettingsScreen() {
      const navigation = useNavigation<NativeStackNavigationProp<any>>();
    
    const [selectedMethod, setSelectedMethod] = useState('light'); // "light" or "dark"

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <BackWard width={20} height={20} onPress={()=>navigation.navigate('ProfileScreen')}/>
                <Text style={styles.headerTitle}>App Setting</Text>
            </View>

            {/* Notifications */}
            <View style={styles.section}>
                <View style={styles.row}>
                    <Text style={styles.sectionTitle}>Notifications</Text>
                    <Toggle />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Sound</Text>
                    <Toggle />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Vibration</Text>
                    <Toggle />
                </View>
            </View>

            {/* Theme & Display */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Theme & Display</Text>

                {/* Light Mode */}
                <TouchableOpacity
                    style={styles.radioRow}
                    activeOpacity={0.8}
                    onPress={() => setSelectedMethod('light')}>
                    <Text style={styles.label}>Light</Text>

                    <View style={styles.circleWrapper}>
                        <View
                            style={[
                                styles.bigCircle,
                                { opacity: selectedMethod === 'light' ? 1 : 0.3 },
                            ]}>
                            {selectedMethod === 'light' && <View style={styles.smallCircle} />}
                        </View>
                    </View>

                </TouchableOpacity>

                {/* Dark Mode */}
                <TouchableOpacity

                    style={styles.radioRow}
                    activeOpacity={0.8}
                    onPress={() => setSelectedMethod('dark')}>
                    <Text style={styles.label1}>Dark</Text>

                    <View style={styles.circleWrapper}>
                        <View
                            style={[
                                styles.bigCircle,
                                { opacity: selectedMethod === 'dark' ? 1 : 0.3 },
                            ]}>
                            {selectedMethod === 'dark' && <View style={styles.smallCircle} />}
                        </View>
                    </View>

                </TouchableOpacity>
            </View>

            {/* Language Preferences */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle1}>Language Preferences</Text>
                <TouchableOpacity style={styles.languageButton}>
                    <Text style={styles.languageText}>English</Text>
                    <ArrowDown width={14} height={14} />
                </TouchableOpacity>
            </View>

            {/* App Information */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle1}>App Information</Text>
                <TouchableOpacity>
                    <Text style={styles.linkText}>Beta Testing</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBFF',
        paddingHorizontal: scale(24),
        // paddingTop: Platform.OS === 'ios' ? 60 : 40,
        // Top:verticalScale(20),
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: verticalScale(75),
        marginTop: verticalScale(45),
    },
    headerTitle: {
        fontSize: moderateScale(22),
        fontWeight: '700',
        marginLeft: scale(10),
        color: '#121212',
        letterSpacing: scale(4),
        fontFamily: 'Avenir LT Std',
    },
    section: {
        // marginBottom: verticalScale(38),
    },
    sectionTitle: {
        fontSize: moderateScale(15),
        fontWeight: '800',
        color: '#223F61',
        marginBottom: verticalScale(10),
        fontFamily: 'Avenir LT Std',
    },
     sectionTitle1: {
        fontSize: moderateScale(15),
        fontWeight: '800',
        color: '#223F61',
        marginBottom: verticalScale(18),
        fontFamily: 'Avenir LT Std',
        marginTop:verticalScale(19),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: verticalScale(14),
    },
    label: {
        fontSize: moderateScale(15),
        color: '#0D2040',
        marginBottom: verticalScale(14),
        fontFamily: 'Avenir LT Std',
        fontWeight: 400,
    },
    label1: {
        fontSize: moderateScale(15),
        color: '#0D2040',
    },
    radioRow: {
        // flexDirection: 'row',
        // alignItems: 'center',
        // marginBottom: 30,
        // left:5,
        flexDirection: 'row',
        justifyContent: 'space-between', // push label and circle apart
        alignItems: 'center',
        marginBottom: verticalScale(10),
    },
    languageButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F0F4FA',
        borderRadius: moderateScale(10),
        paddingVertical: verticalScale(8),
        paddingHorizontal: scale(14),
        width: scale(120),
        //  opacity:0.4,
    },
    languageText: {
        fontSize: moderateScale(15),
        color: '#223F61',
        opacity: 0.4,
    },
    linkText: {
        fontSize: 15,
        color: '#223F61',

    },
    circleWrapper: {
        // marginRight: 20,
        alignItems: 'flex-end',
    },
    bigCircle: {
        width: scale(18),
        height: scale(18),
        borderWidth: scale(2),
        borderColor: '#223F61',
        borderRadius: moderateScale(9),
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallCircle: {
        width: scale(9),
        height: verticalScale(9),
        backgroundColor: '#223F61',
        borderRadius: moderateScale(4.5),
    },
});