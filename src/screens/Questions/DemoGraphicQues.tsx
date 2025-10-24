import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import BackWard from "../../assets/icons/BackWard";
import UpWard from '../../assets/icons/Upward';
import DownWard from '../../assets/icons/DownWard';

type RootStackParamList = {
  NumOtp: undefined;
};

export default function DemoGraphicQues() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [motivation, setMotivation] = useState('');
  const [weekly, setWeekly] = useState('');
  const [gender, setGender] = useState('');
  const [sliderValue, setSliderValue] = useState(1);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = () => {
    Alert.alert(
      'Form Submitted',
      `Name: ${name}\nMotivation: ${motivation}\nWeekly: ${weekly}\nGender: ${gender}\nValue: ${sliderValue}`
    );
  };

  const renderHeader = (title: string) => (
    <>
      <Text style={styles.subtitle}>First things, first</Text>
      <Text style={styles.title}>{title}</Text>
    </>
  );

  // Determine if the Next/Submit button should be disabled
  const isNextDisabled = () => {
    switch (step) {
      case 1:
        return !name.trim();
      case 2:
        return !motivation.trim();
      case 3:
        return !weekly.trim();
      case 4:
        return !gender;
      default:
        return false;
    }
  };
//changes were made
  // Render input for steps 1-3 or gender/slider for others
  const renderInputOrSelection = () => {
    switch (step) {
      case 1:
        return (
          <TextInput
            style={styles.input}
            placeholder="You Can also Type...."
            value={name}
            onChangeText={setName}
            returnKeyType="done"
          />
        );
      case 2:
        return (
          <TextInput
            style={styles.input}
            placeholder="You Can also Type...."
            value={motivation}
            onChangeText={setMotivation}
            returnKeyType="done"
          />
        );
      case 3:
        return (
          <TextInput
            style={styles.input}
            placeholder="You Can also Type...."
            value={weekly}
            onChangeText={setWeekly}
            keyboardType="numeric"
            returnKeyType="done"
          />
        );
      case 4:
        return (
          <View style={styles.genderContainer}>
            {['Male', 'Female', 'Other'].map((item) => {
              const value = item.toLowerCase();
              const selected = gender === value;
              return (
                <TouchableOpacity
                  key={value}
                  style={[styles.genderOption, selected && styles.genderSelected]}
                  onPress={() => setGender(value)}
                >
                  <Text
                    style={[styles.genderText, selected && styles.genderTextSelected]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      case 5:
        return (
          <>
            <Text style={styles.sliderValueText}>{sliderValue.toFixed(0)}</Text>
            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={5}
              step={1}
              value={sliderValue}
              onValueChange={setSliderValue}
              minimumTrackTintColor="#1fb28a"
              maximumTrackTintColor="#d3d3d3"
              thumbTintColor="#1fb28a"
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      {/* Back navigation icon on top left */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <BackWard width={10} height={16} color="#223F61" />
      </TouchableOpacity>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {renderHeader(
          step === 1
            ? "What's your name?"
            : step === 2
            ? 'What motivates you?'
            : step === 3
            ? 'How much do you spend weekly?'
            : step === 4
            ? 'Select your gender'
            : 'Choose a value'
        )}

        {/* Only render gender container or slider here for steps 4 and 5 */}
        {(step === 4 || step === 5) && renderInputOrSelection()}
      </ScrollView>

      {/* Fixed input above buttons for steps 1 to 3 */}
      {(step === 1 || step === 2 || step === 3) && (
        <View style={styles.bottomInputContainer}>{renderInputOrSelection()}</View>
      )}

      {/* Fixed button container at bottom right */}
      <View style={styles.fixedButtonsContainer}>
        {step > 1 && (
          <TouchableOpacity style={styles.secondaryButton} onPress={handleBack}>
            <UpWard width={20} height={20} color="#fff" />
          </TouchableOpacity>
        )}

        {step < 5 ? (
          <TouchableOpacity
            style={[styles.button, isNextDisabled() && styles.disabledButton]}
            onPress={handleNext}
            disabled={isNextDisabled()}
          >
            <DownWard width={20} height={20} color="#fff" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            {/* Removed button text */}
            <DownWard width={20} height={20} color="#fff" />
          </TouchableOpacity>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  backButton: {
    position: 'absolute',
    left: scale(20),
    top: verticalScale(40),
    padding: scale(5),
    zIndex: 10,
  },
  scrollContainer: {
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(120),
    paddingBottom: verticalScale(100), // leave space at bottom for input/buttons
  },
  title: {
    fontSize: moderateScale(22),
    fontWeight: '700',
    color: '#000',
    marginBottom: verticalScale(20),
  },
  subtitle: {
    fontSize: moderateScale(12),
    color: '#888',
    marginBottom: verticalScale(8),
  },
  
  bottomInputContainer: {
    position: 'absolute',
    bottom: 0,
    left: scale(20),
    right: scale(20),
    backgroundColor: '#fff',
    paddingVertical: verticalScale(10),
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  fixedButtonsContainer: {
    position: 'absolute',
    bottom: verticalScale(90),
    right: scale(25),
    flexDirection: 'column',
    gap: scale(10),
  },

  input: {
    height: verticalScale(45),
    backgroundColor:"#E3E9F1",
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: scale(8),
    paddingHorizontal: scale(12),
    marginBottom: 0,
  },
  button: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(30), // perfect circle
    backgroundColor: '#223F61',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  disabledButton: {
    backgroundColor: '#223F61',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
  secondaryButton: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(30), // perfect circle
    backgroundColor: '#223F61',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  secondaryButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: moderateScale(16),
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(20),
    flexWrap: 'wrap',
  },
  genderOption: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: scale(8),
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
    alignItems: 'center',
    marginBottom: verticalScale(10),
  },
  genderSelected: {
    backgroundColor: '#1fb28a',
    borderColor: '#1fb28a',
  },
  genderText: {
    fontSize: moderateScale(16),
    color: '#000',
  },
  genderTextSelected: {
    color: '#fff',
    fontWeight: '600',
  },
  slider: {
    width: '100%',
    height: verticalScale(40),
    marginBottom: verticalScale(20),
  },
  sliderValueText: {
    fontSize: moderateScale(18),
    textAlign: 'center',
    color: '#1fb28a',
    marginBottom: verticalScale(10),
  },
});
