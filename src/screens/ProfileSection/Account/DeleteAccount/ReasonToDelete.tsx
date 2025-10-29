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
              <BackWard width={20} height={20} color={theme.text} />
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
          <Text style={[styles.questionText, { color: theme.text }]}>
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
          <View style={styles.buttonWrapper}>
            <ButtonComp
              title="Submit"
              onPress={() => console.log('Submit pressed')}
              style={{
                backgroundColor: theme.Button,
                marginHorizontal: scale(30),
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
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(60),
    paddingBottom: verticalScale(40),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(40),
  },
  headerText: {
    fontSize: moderateScale(25),
    fontWeight: 'bold',
    letterSpacing: scale(5),
    marginLeft: scale(10),
    fontFamily: 'Kollektif',
  },
  confirmationText: {
    fontSize: moderateScale(10),
    marginBottom: verticalScale(20),
    letterSpacing: scale(1),
    fontFamily: 'Avenir LT Std',
    fontWeight: '400',
  },
  questionText: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    marginBottom: verticalScale(15),
    fontFamily: 'Avenir LT Std',
    letterSpacing: scale(1),
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
    fontSize: moderateScale(14),
    fontFamily: 'Avenir LT Std',
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
  buttonWrapper: {
    width: '90%',
    position: 'absolute',
    top: verticalScale(590),
  },
});
