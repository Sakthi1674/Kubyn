import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import BackWard from '../../../../assets/icons/BackWard';
import ButtonComp from '../../../../components/common/ButtonComp';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import colors from '../../../../theme/color';

type RootStackParamList = {
  ForgetPin: undefined;
  SetPin: undefined;
  SecurityScreen: undefined;
};

const CurrentPin = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? colors.dark : colors.light;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('SecurityScreen')}>
          <BackWard width={20} height={20} color={theme.text} />
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: theme.text }]}>Pin Lock</Text>
      </View>

      {/* Subtext */}
      <Text style={[styles.subText, { color: theme.textSecondary }]}>
        Enter Your Current Pin
      </Text>

      {/* PIN Placeholder */}
      <View style={styles.pinContainer}>
        {[0, 1, 2, 3].map((_, index) => (
          <View
            key={index}
            style={[styles.pinDot, { backgroundColor: theme.textSecondary }]}
          />
        ))}
      </View>

      <Text style={[styles.changeText, { color: theme.textSecondary }]}>
        Change Your Pin
      </Text>

      {/* Forgot PIN */}
      <TouchableOpacity onPress={() => navigation.navigate('ForgetPin')}>
        <Text style={[styles.forgotText, { color: theme.Button }]}>Forgot Pin ?</Text>
      </TouchableOpacity>

      {/* Next Button */}
      <View style={styles.buttonWrapper}>
        <ButtonComp
          title="Next"
          onPress={() => navigation.navigate('SetPin')}
          style={{
            backgroundColor: theme.Button,
            marginHorizontal: scale(30),
          }}
          textStyle={{
            color: theme.bttext,
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
    fontWeight: '700',
    letterSpacing: scale(3),
    marginLeft: scale(30),
    fontFamily: 'Kollektif',
  },
  subText: {
    fontSize: moderateScale(10),
    marginTop: verticalScale(40),
    fontFamily: 'Avenir LT Std',
    fontWeight: '400',
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(100),
    marginBottom: verticalScale(25),
  },
  pinDot: {
    width: scale(30),
    height: verticalScale(1.5),
    marginHorizontal: scale(10),
    borderRadius: moderateScale(2),
  },
  changeText: {
    fontSize: moderateScale(10),
    fontFamily: 'Avenir LT Std',
    fontWeight: '700',
    marginBottom: verticalScale(20),
  },
  forgotText: {
    fontSize: moderateScale(10),
    fontFamily: 'Avenir LT Std',
    marginTop: verticalScale(240),
    fontWeight: '400',
  },
  buttonWrapper: {
    width: '90%',
    position: 'absolute',
    bottom: verticalScale(40),
  },
});
