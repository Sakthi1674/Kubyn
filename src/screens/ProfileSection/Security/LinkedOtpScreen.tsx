import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import BackWard from '../../../assets/icons/BackWard';
import EyeIcon from '../../../assets/icons/EyeIcon';
import ButtonComp from '../../../components/common/ButtonComp';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import colors from '../../../theme/color'; // ✅ contains { light: {...}, dark: {...} }

const CurrentPassword: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const scheme = useColorScheme();
  const theme = colors[scheme === 'dark' ? 'dark' : 'light']; // ✅ select proper theme

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('SecurityScreen')}>
          <BackWard stroke={theme.text} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: theme.text }]}>
          Change Password
        </Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        {/* Current Password */}
        <Text style={[styles.label, { color: theme.text }]}>
          Current Password
        </Text>
        <View
          style={[styles.inputWrapper, { backgroundColor: theme.buttondark }]}
        >
          <TextInput
            placeholder="Current Password"
            style={[styles.input, { color: theme.text }]}
            placeholderTextColor={theme.text}
            secureTextEntry
          />
        </View>

        <TouchableOpacity>
          <Text style={[styles.forgotText, { color: theme.text }]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        {/* New Password */}
        <View
          style={[styles.inputWrapper, { backgroundColor: theme.buttondark }]}
        >
          <TextInput
            placeholder="Password"
            style={[styles.input, { color: theme.text }]}
            placeholderTextColor={theme.text}
            secureTextEntry
          />
          <TouchableOpacity style={styles.iconRight}>
            <EyeIcon stroke={theme.icon} opacity={0.35} />
          </TouchableOpacity>
        </View>

        {/* Confirm Password */}
        <View
          style={[styles.inputWrapper, { backgroundColor: theme.buttondark }]}
        >
          <TextInput
            placeholder="Confirm Password"
            style={[styles.input, { color: theme.text }]}
            placeholderTextColor={theme.text}
            secureTextEntry
          />
          <TouchableOpacity style={styles.iconRight}>
            <EyeIcon stroke={theme.icon} opacity={0.35} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Confirm Button */}
      <ButtonComp
        title="Confirm Password"
        onPress={() => console.log('Submit pressed')}
        style={{
          backgroundColor: theme.Button,
          marginTop: verticalScale(270),
          marginHorizontal: scale(30),
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

export default CurrentPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(50),
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    marginLeft: scale(19),
    letterSpacing: scale(3),
    fontFamily: 'Kollektif',
  },
  form: {
    marginTop: verticalScale(40),
  },
  label: {
    fontSize: moderateScale(12),
    marginBottom: verticalScale(10),
    left: scale(17),
    fontFamily: 'Avenir LT Std',
    letterSpacing: scale(1),
  },
  inputWrapper: {
    borderRadius: moderateScale(10),
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(8),
    marginBottom: verticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    left: scale(15),
  },
  input: {
    flex: 1,
    fontSize: moderateScale(14),
  },
  iconRight: {
    marginLeft: scale(10),
  },
  forgotText: {
    alignSelf: 'flex-end',
    marginBottom: verticalScale(18),
    fontSize: moderateScale(10),
    right: scale(22),
    fontFamily: 'Avenir LT Std',
    letterSpacing: scale(1),
  },
});
