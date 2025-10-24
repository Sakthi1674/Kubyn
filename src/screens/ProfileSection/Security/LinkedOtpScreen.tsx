import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import ButtonComp from '../../../components/common/ButtonComp';
import BackWard from '../../../assets/icons/BackWard';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


const LinkedOtpScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<any>>();
  
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('LinkedScreen')}  >
          <BackWard width={20} height={20} />
        </TouchableOpacity>
      </View>

      {/* Card Section */}
      <View style={styles.cardContainer}>
        <Text style={styles.title}>Confirmation</Text>
        <Text style={styles.subText}>
          Please Enter the verification Code sent to {'\n'}+91*****0156
        </Text>

        {/* OTP Boxes */}
        <View style={styles.otpContainer}>
          {[0, 1, 2, 3].map((_, index) => (
            <View key={index} style={styles.otpBox}>
              <Text style={styles.otpText}>0</Text>
            </View>
          ))}
        </View>
            
        {/* Verify Button */}
<View>
        <ButtonComp
       
                title="Verify"
                // onPress={goToHome}
                onPress={() => {''}}
                 style={{
                       backgroundColor: "#223F61" ,   
                      //  marginHorizontal: 30,
                      width:210,

                      
                 }}
                  textStyle={{
                    color:  "#E3E9F1",
                    fontFamily:"Avenir LT Std",
                }}
            />
            </View>
    
                </View>
     
      <View style={styles.updateWrapper}>
       <ButtonComp
       
                title="Update"
                // onPress={goToHome}
                onPress={() => {''}}
                 style={{
                       backgroundColor: "#223F61",     
                       marginHorizontal: scale(30),
                        opacity:0.35,
                 }}
                  textStyle={{
                    color: "#FBFDFF",
                     fontWeight: '600',
                  fontFamily:"Avenir LT Std",
                  letterSpacing:scale(2),
                }}
            />
      </View>
    </SafeAreaView>
  );
};

export default LinkedOtpScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(60),
    marginLeft: scale(50),
  },
  cardContainer: {
    width: '85%',
    backgroundColor: '#E3E9F1',
    borderRadius: moderateScale(22),
    paddingVertical: verticalScale(10),
    alignItems: 'center',
    marginTop: verticalScale(100),
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Avenir LT Std',
    marginBottom: verticalScale(10),
  
  },
  subText: {
    fontSize: moderateScale(12),
    color: '#2e446c',
    textAlign: 'center',
    marginBottom: verticalScale(25),
    fontFamily: 'Avenir LT Std',
    lineHeight: verticalScale(18),
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: verticalScale(30),
  },
  otpBox: {
    width: scale(50),
    height: verticalScale(50),
    backgroundColor: '#fff',
    borderRadius: moderateScale(8),
    marginHorizontal: scale(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: scale(1),
    borderColor: '#E0E6ED',
  },
  otpText: {
    fontSize: moderateScale(24),
    fontWeight: '600',
    color: '#223F61',
    opacity:scale(0.35),
  },
  updateWrapper: {
    position: 'absolute',
    bottom: verticalScale(40),
    width: '90%',
    alignItems: 'center',
  },

 
});;