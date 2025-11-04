import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import ButtonComp from '../../../components/common/ButtonComp';
import BackWard from '../../../assets/icons/BackWard';
import TickMark from '../../../assets/icons/TickMark';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import colors from '../../../theme/color'; // ✅ import theme

const LinkedScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const scheme = useColorScheme();
  const theme = colors[scheme === 'dark' ? 'dark' : 'light'];

  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isMobileFocused, setIsMobileFocused] = useState(false);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('SecurityScreen')}>
          <BackWard stroke={theme.text} width={10} height={16} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.text }]}>
          Linked Email & Mobile Number
        </Text>
      </View>

      {/* Email Input + Next */}
      <View style={styles.inputSection}>
        <View
          style={[
            styles.inputWrapper,
            {
              backgroundColor: theme.option,
              borderColor: isEmailFocused ? theme.Button : "transparent",
              borderWidth: 1.5,
            },
          ]}
        >
          <TextInput
            placeholder="Email"
            placeholderTextColor={theme.Button + 35 }
            style={[styles.input, { color: theme.text }]}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
          />
          <TickMark width={20} height={20} color={isEmailFocused ? theme.Button : theme.icon} />
        </View>
        <TouchableOpacity
          style={[styles.nextButton, { backgroundColor: theme.Button }]}
          onPress={() => navigation.navigate('LinkedOtpScreen')}
        >
          <Text style={[styles.nextButtonText, { color: theme.bttext }]}>
            Next
          </Text>
        </TouchableOpacity>
      </View>

      {/* Mobile Input + Next */}
      <View style={styles.inputSection}>
        <View
          style={[
            styles.inputWrapper,
            {
              backgroundColor: theme.option,
              borderColor: isMobileFocused ? theme.Button : "transparent", // 👈 border color on focus
              borderWidth: 1.5,
            },
          ]}
        >
          <TextInput
            placeholder="Mobile No"
            placeholderTextColor={theme.Button + 35}
            keyboardType="phone-pad"
            style={[styles.input, { color: theme.text }]}
            onFocus={() => setIsMobileFocused(true)}
            onBlur={() => setIsMobileFocused(false)}
          />
          <TouchableOpacity>
            <TickMark
              width={20}
              height={20}
              color={isMobileFocused ? theme.Button : theme.icon}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.nextButton, { backgroundColor: theme.Button }]}
          onPress={() => navigation.navigate('LinkedOtpScreen')}
        >
          <Text style={[styles.nextButtonText, { color: theme.bttext }]}>
            Next
          </Text>
        </TouchableOpacity>
      </View>

      {/* Confirm Button */}
      <ButtonComp
        title="Confirm"
        onPress={() => console.log('Submit pressed')}
        style={{
          backgroundColor: theme.Button,
          marginTop: verticalScale(255),
          marginHorizontal: scale(15),
        }}
        textStyle={{
          color: theme.bttext,
          fontFamily: 'Avenir LT Std',
          letterSpacing: scale(2),
        }}
      />
    </SafeAreaView>
  );
};

export default LinkedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(30),
    paddingTop: verticalScale(60),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(30),
  },
  headerTitle: {
    fontSize: moderateScale(18),
    fontWeight: '700',
    letterSpacing: scale(1.5),
    left: scale(10),
    fontFamily: 'Kollektif',
  },
  inputSection: {

    marginTop: verticalScale(30),
  },
  inputWrapper: {
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(15),
    height: verticalScale(45),
    width: scale(290),
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    fontSize: moderateScale(14),
  },
  nextButton: {
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    width: scale(90),
    position: 'relative',
    left: '60%',
    top: verticalScale(5),
  },
  nextButtonText: {
    fontWeight: '600',
    fontSize: moderateScale(14),
    fontFamily: 'Avenir LT Std',
    letterSpacing: scale(2),
  },
});
