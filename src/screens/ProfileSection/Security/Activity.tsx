import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import BackWard from '../../../assets/icons/BackWard';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { useNavigation, NavigationProp } from '@react-navigation/native';



const LoginActivity = () => {
      const navigation = useNavigation<NavigationProp<any>>();
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.header}>
                    <TouchableOpacity  onPress={() => navigation.navigate('SecurityScreen')}>
                        <BackWard width={15} height={18} />
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
        padding: scale(20),
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: verticalScale(50),
    },
    title: {
        
        fontFamily: 'Kollektif',
        fontWeight: 700,
        letterSpacing: scale(2),
        fontSize: moderateScale(20),
        left: scale(20),


    },
    sectionTitle: {
        fontSize: moderateScale(18),
        fontWeight: '700',
        // marginTop: verticalScale(20),
        marginBottom: verticalScale(12),
        fontFamily: 'Avenir LT Std',
        letterSpacing: scale(2),
    },
    sessionBox: {
        backgroundColor: '#e5eaf3',
        padding: scale(16),
        borderRadius: moderateScale(10),
        marginBottom: verticalScale(26),
        marginTop: verticalScale(30),
    },
    sessionBox1: {
        backgroundColor: '#e5eaf3',
        padding: scale(16),
        borderRadius: moderateScale(10),
        // marginBottom: 26,
        // marginTop: verticalScale(20),
    },
    deviceName: {
        fontSize: moderateScale(10),
        fontWeight: '700',
        marginBottom: verticalScale(6),
        fontFamily: 'Avenir LT Std',
        letterSpacing: scale(2),

    },
    location: {
        fontSize: moderateScale(10),
        color: '#121212',
        fontStyle: 'italic',
        marginBottom: verticalScale(4),
        fontFamily: 'Avenir LT Std',
        fontWeight: 400,
        letterSpacing: scale(2),
    },
    time: {
        fontSize: moderateScale(10),
        color: '#121212',
        letterSpacing: scale(2),
        fontWeight: 600,
        fontFamily: 'Avenir LT Std',
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    thisDevice: {
        fontSize: moderateScale(10),
        color: '#223F61',
        fontWeight: '400',
        fontFamily:'Avenir LT Std',
    },
});

export default LoginActivity;