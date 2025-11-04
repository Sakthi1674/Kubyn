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

import BackWard from '../../../assets/icons/BackWard';
import EyeIcon from '../../../assets/icons/EyeIcon';
import ButtonComp from '../../../components/common/ButtonComp';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import colors from '../../../theme/color';

const CurrentPassword: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const scheme = useColorScheme();
  const theme = colors[scheme === "dark" ? "dark" : "light"];

  // Input states
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Focus states
  const [CurrentPasswordField, SetCurrentPasswordField] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Error states
  const [errors, setErrors] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  // Validation function
  const validate = () => {
    let valid = true;
    let tempErrors = { current: '', new: '', confirm: '' };

    if (!currentPassword) {
      tempErrors.current = 'Current password required';
      valid = false;
    }
    if (!newPassword) {
      tempErrors.new = 'New password required';
      valid = false;
    }
    if (!confirmPassword) {
      tempErrors.confirm = 'Confirm password required';
      valid = false;
    }
    if (newPassword && confirmPassword && newPassword !== confirmPassword) {
      tempErrors.confirm = 'Passwords do not match';
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  // Submit handler
  const handleSubmit = () => {
    if (validate()) {
      console.log('Submit pressed');
      // Perform password change logic here
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('SecurityScreen')}>
          <BackWard stroke={theme.Button} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: theme.text }]}>Change Password</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        {/* Current Password */}
        <Text style={[styles.label, { color: theme.text }]}>Current Password</Text>
        <View
          style={[
            styles.inputWrapper,
            {
              backgroundColor: theme.option,
              borderColor:
                CurrentPasswordField === "currentPassword"
                  ? theme.Button
                  : "transparent",
              borderWidth: 1.5,
            },
          ]}
        >
          <TextInput
            placeholder="Current Password"
            style={[styles.input, { color: theme.text }]}
            placeholderTextColor={theme.Button + "35"}
            secureTextEntry
            onFocus={() => SetCurrentPasswordField("currentPassword")}
            onBlur={() => SetCurrentPasswordField("")}
            value={currentPassword}
            onChangeText={setCurrentPassword}
          />
        </View>
        {/* Error message */}
        {errors.current ? (
          <Text style={[styles.errorText, { right: 0, alignSelf: 'flex-end' }]}>
            {errors.current}
          </Text>
        ) : null}

        <TouchableOpacity>
          <Text style={[styles.forgotText, { color: theme.text }]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        {/* New Password */}
        <View
          style={[
            styles.inputWrapper,
            {
              backgroundColor: theme.option,
              borderColor:
                focusedField === "password"
                  ? theme.Button
                  : "transparent",
              borderWidth: 1.5,
            },
          ]}
        >
          <TextInput
            placeholder="Password"
            style={[styles.input, { color: theme.text }]}
            placeholderTextColor={theme.Button + "35"}
            secureTextEntry
            onFocus={() => setFocusedField("password")}
            onBlur={() => setFocusedField(null)}
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <TouchableOpacity style={styles.iconRight}>
            <EyeIcon stroke={theme.icon} opacity={0.35} />
          </TouchableOpacity>
        </View>
        {/* Error message */}
        {errors.new ? (
          <Text style={[styles.errorText, { right: 0, alignSelf: 'flex-end' }]}>
            {errors.new}
          </Text>
        ) : null}

        {/* Confirm Password */}
        <View
          style={[
            styles.inputWrapper,
            {
              backgroundColor: theme.option,
              borderColor:
                focusedField === "confirmPassword"
                  ? theme.Button
                  : "transparent",
              borderWidth: 1.5,
            },
          ]}
        >
          <TextInput
            placeholder="Confirm Password"
            style={[styles.input, { color: theme.text }]}
            placeholderTextColor={theme.Button + "35"}
            secureTextEntry
            onFocus={() => setFocusedField("confirmPassword")}
            onBlur={() => setFocusedField(null)}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity style={styles.iconRight}>
            <EyeIcon stroke={theme.icon} opacity={0.35} />
          </TouchableOpacity>
        </View>
        {/* Error message */}
        {errors.confirm ? (
          <Text style={[styles.errorText, { right: 0, alignSelf: 'flex-end' }]}>
            {errors.confirm}
          </Text>
        ) : null}

        {/* Button to trigger validation */}
        <ButtonComp
          title="Confirm Password"
          onPress={handleSubmit}
          style={{
            backgroundColor: theme.Button,
            marginTop: verticalScale(240),
            marginHorizontal: scale(15),
          }}
          textStyle={{
            color: theme.bttext,
            fontFamily: 'Avenir LT Std',
            letterSpacing: scale(2),
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CurrentPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(30),
    paddingTop: verticalScale(60),
  },
  errorText: {
    color: 'red',
    fontSize: moderateScale(12),
    // position: 'absolute',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    marginLeft: scale(19),
    letterSpacing: scale(3),
    fontFamily: 'Kollektif-Bold',
  },
  form: {
    marginTop: verticalScale(40),
  },
  label: {
    fontSize: moderateScale(12),
    marginBottom: verticalScale(10),
    fontFamily: 'Avenir LT Std 55 Roman',
    letterSpacing: scale(1),
  },
  inputWrapper: {
    borderRadius: moderateScale(10),
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(8),
    marginBottom: verticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',

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
    fontFamily: 'Avenir LT Std 55 Roman',
    letterSpacing: scale(1),
  },
});
