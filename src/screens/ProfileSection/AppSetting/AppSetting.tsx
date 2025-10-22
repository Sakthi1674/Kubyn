import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
} from 'react-native';

import BackWard from '../../../assets/icons/BackWard';
import ArrowDown from '../../../assets/icons/ArrowDown';
import Toggle from '../../../assets/icons/Toggle';

export default function AppSettingsScreen() {
    const [selectedMethod, setSelectedMethod] = useState('light'); // "light" or "dark"

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <BackWard width={20} height={20} />
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
                <Text style={styles.sectionTitle}>Language Preferences</Text>
                <TouchableOpacity style={styles.languageButton}>
                    <Text style={styles.languageText}>English</Text>
                    <ArrowDown width={14} height={14} />
                </TouchableOpacity>
            </View>

            {/* App Information */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>App Information</Text>
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
        paddingHorizontal: 24,
        paddingTop: Platform.OS === 'ios' ? 60 : 40,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 75,
        marginTop: 45,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: '700',
        marginLeft: 10,
        color: '#121212',
        letterSpacing: 4,
        fontFamily: 'Avenir LT Std',
    },
    section: {
        marginBottom: 38,
    },
    sectionTitle: {
        fontSize: 15,
        fontWeight: '800',
        color: '#223F61',
        marginBottom: 18,
        fontFamily: 'Avenir LT Std',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        fontSize: 15,
        color: '#0D2040',
        marginBottom: 14,
        fontFamily: 'Avenir LT Std',
        fontWeight: 400,
    },
    label1: {
        fontSize: 15,
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
        marginBottom: 10,
    },
    languageButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F0F4FA',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 14,
        width: 120,
        //  opacity:0.4,
    },
    languageText: {
        fontSize: 15,
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
        width: 18,
        height: 18,
        borderWidth: 2,
        borderColor: '#223F61',
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallCircle: {
        width: 9,
        height: 9,
        backgroundColor: '#223F61',
        borderRadius: 4.5,
    },
});