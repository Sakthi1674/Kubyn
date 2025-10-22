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

const AccountDeleteVerification = () => {
  const [selectedReason, setSelectedReason] = useState('');
  const [otherReason, setOtherReason] = useState('');
  const [showOtherInput, setShowOtherInput] = useState(false);

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
    <SafeAreaView style={styles.safeArea}>
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
            <TouchableOpacity onPress={() => console.log('Back pressed')}>
              <BackWard width={20} height={20} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Delete Account</Text>
          </View>

          {/* Info Text */}
          <Text style={styles.confirmationText}>
            We've sent a confirmation email to [user@email.com].{'\n'}
            Your account will be deleted shortly.
          </Text>

          {/* Question */}
          <Text style={styles.questionText}>
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
                  selectedReason === reason && styles.checkboxChecked,
                ]}
              >
                {selectedReason === reason && (
                  <Text style={styles.tick}>✓</Text>
                )}
              </View>
              <Text style={styles.checkboxLabel}>{reason}</Text>
            </TouchableOpacity>
          ))}

          {/* Other Reason Input */}
          {showOtherInput && (
            <TextInput
              style={styles.textInput}
              placeholder="Type here..."
              placeholderTextColor="#888"
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
                backgroundColor: '#223F61',
                marginHorizontal: 30,
              }}
              textStyle={{
                textColor: '#FAF8F5',
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
    backgroundColor: '#fff',
  },
  keyboardAvoiding: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 5,
    marginLeft: 10,
    fontFamily: 'Kollektif',
  },
  confirmationText: {
    fontSize: 12,
    marginBottom: 40,
    letterSpacing: 1.5,
    fontFamily: 'Avenir LT Std',
  },
  questionText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2e446c',
    marginBottom: 15,
    fontFamily: 'Avenir LT Std',
    letterSpacing: 1,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    letterSpacing: 2,
    fontFamily: 'Avenir LT Std',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#2e446c',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  checkboxChecked: {
    backgroundColor: '#2e446c',
  },
  tick: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Avenir LT Std',
    fontWeight: '400',
  },
  textInput: {
    height: 100,
    borderRadius: 8,
    backgroundColor: '#f0f2f5',
    padding: 12,
    textAlignVertical: 'top',
    color: '#000',
    marginBottom: 20,
  },
  buttonWrapper: {
   width: '90%',
    position: 'absolute',
    top: 800,
    
  },
});