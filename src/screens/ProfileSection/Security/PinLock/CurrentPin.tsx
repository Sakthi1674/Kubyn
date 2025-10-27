import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import BackWard from '../../../../assets/icons/BackWard';
import ButtonComp from '../../../../components/common/ButtonComp';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
type RootStackParamList = {
  ForgetPin: undefined;
}
const CurrentPin = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity  onPress={() => navigation.navigate('SecurityScreen')}>
          <BackWard width={20} height={20} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Pin Lock</Text>
      </View>

      {/* Subtext */}
      <Text style={styles.subText}>Enter Your Current pin</Text>

      {/* PIN Placeholder */}
      <View style={styles.pinContainer}>
        {[0, 1, 2, 3].map((_, index) => (
          <View key={index} style={styles.pinDot} />
        ))}
      </View>

      <Text style={styles.changeText}>Change Your Pin</Text>

      {/* Forgot PIN */}
      <TouchableOpacity onPress={() => navigation.navigate('ForgetPin')}>
        <Text style={styles.forgotText}>Forgot Pin ?</Text>
      </TouchableOpacity>

      {/* Next Button */}
      <View style={styles.buttonWrapper}>
        <ButtonComp
          title="Next"
          onPress={() => navigation.navigate('SetPin')}
          style={{
            backgroundColor: '#223F61',
            marginHorizontal: scale(30),
          }}
          textStyle={{
            color: '#FAF8F5', // fixed from textColor
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CurrentPin;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: scale(30),
    marginTop: verticalScale(70),
  },
  headerText: {
    fontSize: moderateScale(20),
    fontWeight: 700,
    color: '#000',
    letterSpacing: scale(3),
    marginLeft: scale(30),
    fontFamily: 'Kollektif',
  },
  subText: {
    fontSize: moderateScale(10),
    color: '#121212',
    marginTop: verticalScale(40),
    fontFamily: 'Avenir LT Std',
    fontWeight:400,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: verticalScale(25),
    marginTop:verticalScale(100),
  },
  pinDot: {
    width: scale(30),
    height: verticalScale(1),
    backgroundColor: '#121212',
    marginHorizontal: scale(10),
    borderRadius: moderateScale(2),
  },
  changeText: {
    fontSize: moderateScale(10),
    color: '#121212',
    marginBottom: verticalScale(20),
    fontFamily: 'Avenir LT Std',
    fontWeight:700,
    // marginTop:200,
  },
  forgotText: {
    color: '#223F61',
    fontSize: moderateScale(10),
    fontFamily: 'Avenir LT Std',
    marginTop: verticalScale(240),
    fontWeight:400,
  },
  buttonWrapper: {
    width: '90%',
    position: 'absolute',
    bottom: verticalScale(40),
  },
  nextButton: {
    backgroundColor: '#223F61',
    borderRadius: moderateScale(8),
  },
});

