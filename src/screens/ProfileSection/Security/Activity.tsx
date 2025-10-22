import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import BackWard from '../../../assets/icons/BackWard';

const LoginActivity = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <BackWard width={18} height={20} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Login Activity</Text>
                </View>

                {/* Current Device */}
                <View style={styles.sessionBox}>
                    <View style={styles.rowBetween}>
                        <Text style={styles.deviceName}>Samsung (Android)</Text>
                        <Text style={styles.thisDevice}>This Device</Text>
                    </View>
                    <Text style={styles.location}>Coimbatore, Tamil nadu</Text>
                    <Text style={styles.time}>2 Hours ago</Text>
                </View>

                {/* Other Sessions */}
                <Text style={styles.sectionTitle}>Other Sessions</Text>

                <View style={styles.sessionBox1}>
                    <Text style={styles.deviceName}>iPhone 15</Text>
                    <Text style={styles.location}>Coimbatore, Tamil nadu</Text>
                    <Text style={styles.time}>10 Days ago</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 60,
    },
    title: {
        fontFamily: 'Kollektif',
        fontWeight: 700,
        letterSpacing: 2.5,
        fontSize: 24,
        left: 20,


    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginTop: 30,
        marginBottom: 12,
        fontFamily: 'Avenir LT Std',
        letterSpacing: 2,
    },
    sessionBox: {
        backgroundColor: '#e5eaf3',
        padding: 16,
        borderRadius: 10,
        marginBottom: 26,
        marginTop: 50,
    },
    sessionBox1: {
        backgroundColor: '#e5eaf3',
        padding: 16,
        borderRadius: 10,
        // marginBottom: 26,
        marginTop: 20,
    },
    deviceName: {
        fontSize: 15,
        fontWeight: '700',
        marginBottom: 6,
        fontFamily: 'Avenir LT Std',
        letterSpacing: 2,

    },
    location: {
        fontSize: 13,
        color: '#121212',
        fontStyle: 'italic',
        marginBottom: 4,
        fontFamily: 'Avenir LT Std',
        fontWeight: 400,
        letterSpacing: 2,
    },
    time: {
        fontSize: 13,
        color: '#121212',
        letterSpacing: 2,
        fontWeight: 600,
        fontFamily: 'Avenir LT Std',
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    thisDevice: {
        fontSize: 13,
        color: '#223F61',
        fontWeight: '400',
    },
});

export default LoginActivity;