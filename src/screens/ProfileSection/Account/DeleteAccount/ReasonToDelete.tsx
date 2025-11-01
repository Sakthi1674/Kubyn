import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
} from 'react-native';
import BackWard from '../../../../assets/icons/BackWard';
import ButtonComp from '../../../../components/common/ButtonComp';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { useColorScheme } from 'react-native';
import colors from '../../../../theme/color';

const AccountDeleteVerification = () => {
  const [selectedReason, setSelectedReason] = useState('');
  const [otherReason, setOtherReason] = useState('');
  const [showOtherInput, setShowOtherInput] = useState(false);
  const navigation = useNavigation<NavigationProp<any>>();
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme ?? 'light']; // ✅ auto picks theme

  const reasons = [
    "I'm not using the app",
    'I found a better alternative',
    'The app contains too many ads',
    "The app didn't have the features I needed",
    "I'm not satisfied with the quality of content",
    'The app was difficult to navigate',
    'Other',
  ];

  const handleReasonSelect = (reason: string) => {
    if (selectedReason === reason) {
      setSelectedReason('');
      setShowOtherInput(false);
    } else {
      setSelectedReason(reason);
      setShowOtherInput(reason === 'Other');
    }
  };

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.background }]}
    >
      <KeyboardAvoidingView
        style={styles.keyboardAvoiding}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('DeleteAccount')}>
              <BackWard width={10} height={16} color={theme.text} />
            </TouchableOpacity>
            <Text style={[styles.headerText, { color: theme.text }]}>
              Delete Account
            </Text>
          </View>

          {/* Info Text */}
          <Text style={[styles.confirmationText, { color: theme.textSecondary }]}>
            We've sent a confirmation email to [user@email.com].{'\n'}
            Your account will be deleted shortly.
          </Text>

          {/* Question */}
          <Text style={[styles.questionText, { color: theme.Button }]}>
            Why did you decide to leave {'\n'}this app?
          </Text>

          {/* Reason List */}
          {reasons.map((reason, index) => (
            <TouchableOpacity
              key={index}
              style={styles.checkboxContainer}
              onPress={() => handleReasonSelect(reason)}
            >
              <View
                style={[
                  styles.checkbox,
                  { borderColor: theme.Button },
                  selectedReason === reason && {
                    backgroundColor: theme.Button,
                  },
                ]}
              >
                {selectedReason === reason && (
                  <Text style={[styles.tick, { color: theme.bttext }]}>✓</Text>
                )}
              </View>
              <Text style={[styles.checkboxLabel, { color: theme.text }]}>
                {reason}
              </Text>
            </TouchableOpacity>
          ))}

          {/* Other Reason Input */}
          {showOtherInput && (
            <TextInput
              style={[
                styles.textInput,
                {
                  backgroundColor: theme.buttondark,
                  color: theme.text,
                },
              ]}
              placeholder="Type here..."
              placeholderTextColor={theme.textSecondary}
              value={otherReason}
              onChangeText={setOtherReason}
              multiline
            />
          )}

          {/* Submit Button */}
          <View style={styles.ButtonWrapper}>
            <ButtonComp
              title="Submit"
              onPress={() => console.log('Submit pressed')}
              style={{
                backgroundColor: theme.Button,
              }}
              textStyle={{
                color: theme.bttext,
              }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AccountDeleteVerification;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  keyboardAvoiding: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: scale(30),
    paddingTop: verticalScale(60),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(40),
  },
  headerText: {
    fontSize: moderateScale(20),
    fontWeight: 700,
    letterSpacing: scale(5),
    marginLeft: scale(30),
    fontFamily: 'Kollektif-Bold',
  },
  confirmationText: {
    fontSize: moderateScale(10),
    marginBottom: verticalScale(20),
    letterSpacing: scale(1),
    fontFamily: 'Avenir LT Std 55 Roman',
    fontWeight: '400',
  },
  questionText: {
    fontSize: moderateScale(16),
    fontWeight: '700',
    marginBottom: verticalScale(15),
    fontFamily: 'Avenir LT Std 85 Heavy',
    letterSpacing: scale(3),
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(15),
  },
  checkbox: {
    width: scale(18),
    height: verticalScale(18),
    borderWidth: scale(1),
    marginRight: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(3),
  },
  tick: {
    fontSize: moderateScale(12),
    fontWeight: 'bold',
  },
  checkboxLabel: {
    fontSize: moderateScale(12),
    fontFamily: 'Avenir LT Std 55 Roman',
    fontWeight: '400',
    letterSpacing: scale(1),
  },
  textInput: {
    height: verticalScale(100),
    borderRadius: moderateScale(8),
    padding: scale(12),
    textAlignVertical: 'top',
    marginBottom: verticalScale(20),
  },
  ButtonWrapper: {
    position: 'absolute',
    bottom: verticalScale(55), 
    left: 0,
    right: 0,
    alignItems: 'center', 
    justifyContent: 'center',
    zIndex: 10,
  },
});
