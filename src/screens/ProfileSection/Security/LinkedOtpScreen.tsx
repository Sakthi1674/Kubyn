import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import ButtonComp from '../../../components/common/ButtonComp';
import BackWard from '../../../assets/icons/BackWard';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import colors from '../../../theme/color';


const LinkedOtpScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? colors.dark : colors.light;

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.background }]}
    >
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('LinkedScreen')}>
          <BackWard width={10} height={16} stroke={theme.icon} />
        </TouchableOpacity>
      </View>

      {/* Card Section */}
      <View
        style={[
          styles.cardContainer,
          { backgroundColor: theme.buttondark },
        ]}
      >
        <Text style={[styles.title, { color: theme.Button }]}>Confirmation</Text>
        <Text style={[styles.subText, { color: theme.textSecondary }]}>
          Please Enter the verification Code sent to {'\n'}+91***0156
        </Text>

        {/* OTP Boxes */}
        <View style={styles.otpContainer}>
          {[0, 1, 2, 3].map((_, index) => (
            <View
              key={index}
              style={[
                styles.otpBox,
                { borderColor: theme.bttext, backgroundColor: theme.bttext },
              ]}
            >
              <Text style={[styles.otpText, { color: theme.text }]}>0</Text>
            </View>
          ))}
        </View>

        {/* Verify Button */}
        <View>
          <ButtonComp
            title="Verify"
            onPress={() => {}}
            style={{
              backgroundColor: theme.Button,
              width: 210,
            }}
            textStyle={{
              color: theme.bttext,
              fontFamily: 'Avenir LT Std',
            }}
          />
        </View>
      </View>

      {/* Update Button */}
      <View style={styles.updateWrapper}>
        <ButtonComp
          title="Update"
          onPress={() => {}}
          style={{
            backgroundColor: theme.Button,
            marginHorizontal: scale(30),
            opacity: 0.35,
          }}
          textStyle={{
            color: theme.bttext,
            fontWeight: '600',
            fontFamily: 'Avenir LT Std',
            letterSpacing: scale(2),
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
    alignItems: 'center',
    marginTop: verticalScale(60),
    paddingHorizontal: scale(30),
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContainer: {
    width: '100%',
    borderRadius: moderateScale(22),
    paddingVertical: verticalScale(10),
    alignItems: 'center',
    marginTop: verticalScale(100),
  },
  title: {
    fontSize: moderateScale(14),
    fontWeight:700,
    fontFamily: 'Avenir LT Std 95 Black',
    marginBottom: verticalScale(10),
  },
  subText: {
    fontSize: moderateScale(10),
    textAlign: 'center',
    marginBottom: verticalScale(25),
    fontFamily: 'Avenir LT Std 55 Roman',
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
    borderRadius: moderateScale(8),
    marginHorizontal: scale(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: scale(1),
  },
  otpText: {
    fontSize: moderateScale(24),
    fontWeight: '600',
    opacity: scale(0.35),
    fontFamily: 'Avenir LT Std 65 Medium',
  },
  updateWrapper: {
    position: 'absolute',
    bottom: verticalScale(65),
    width: '90%',
    alignItems: 'center',
  },
});
