import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import BackWard from '../../assets/icons/BackWard';



const Progress = () => {
    const navigation = useNavigation<NavigationProp<any>>();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('SecurityScreen')}>
                        <BackWard width={15} height={18} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Notification</Text>
                </View>

                {/* Current Device */}
                <View style={styles.sessionBox}>
                    <View >
                        <Text style={styles.deviceName}>Savings & Progress</Text>
                    </View>
                    <Text style={styles.location}>“You saved ₹2,000 this week — amazing progress toward your goal!”</Text>
                    <View style={styles.timecontainer}>
                     <Text style={styles.time}>3.00 PM</Text>
                    <Text style={styles.date}>11/09/2025</Text>
                </View>


                </View>
               


            </ScrollView>
        </SafeAreaView>
    );
};
export default Progress;

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

        fontFamily: 'Open Sans',
        fontWeight: 600,
        fontSize: moderateScale(16),
        left: scale(20),


    },
    sessionBox: {
        backgroundColor: 'rgba(227, 233, 241, 1)',
        height: verticalScale(154),
        borderRadius: moderateScale(10),
        width: scale(325),

        marginTop: verticalScale(40),

    },

    deviceName: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        marginBottom: verticalScale(6),
        fontFamily: 'Open Sans',
        letterSpacing: scale(2),
        left: scale(15),
        marginTop: verticalScale(19),

    },
    location: {
        fontSize: moderateScale(10),
        color: '#121212',
        left: scale(15),

        marginBottom: verticalScale(14),
        fontFamily: 'Open Sans',

        fontWeight: 400,
        letterSpacing: scale(2),
        marginTop: verticalScale(19),

    },
    time: {
        fontSize: moderateScale(8),
        color: '#121212',
        letterSpacing: scale(2),
        fontWeight: 700,
        fontFamily: 'Avenir LT Std',
        left:scale(10),
         marginRight: scale(20),
    },
     date: {
        fontSize: moderateScale(8),
        color: '#121212',
        letterSpacing: scale(2),
        fontWeight: 700,
        fontFamily: 'Avenir LT Std',
    },
  
    thisDevice: {
        fontSize: moderateScale(10),
        color: '#223F61',
        fontWeight: '400',
        fontFamily: 'Avenir LT Std',
    },
    timecontainer:{
        marginTop:verticalScale(30),
         flexDirection: 'row',
         justifyContent:'flex-end',
         paddingHorizontal: verticalScale(18),
    }
});
