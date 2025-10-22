import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import ButtonComp from '../../../components/common/ButtonComp';
import BackWard from '../../../assets/icons/BackWard';
import TickMark from '../../../assets/icons/TickMark';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const LinkedScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <BackWard width={15} height={15} />
        <Text style={styles.headerTitle}>Linked Email & Mobile Number</Text>
      </View>

      {/* Email Input + Next */}
      <View style={styles.inputSection}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#AAB3BD"
            style={styles.input}
          />
          <TickMark width={20} height={20} />
        </View>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Mobile Input + Next */}
      <View style={styles.inputSection}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Mobile No"
            placeholderTextColor="#AAB3BD"
            keyboardType="phone-pad"
            style={styles.input}
          />
          <TouchableOpacity>
            <TickMark width={20} height={20} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Confirm Button */}
      <ButtonComp
        title="Confirm"
        onPress={() => navigation.navigate('LinkedOtpScreen')} 
        style={{
          backgroundColor: '#223F61',
          marginTop: 320,
          marginHorizontal: 30,
        }}
        textStyle={{
          color: '#FAF8F5',
          fontFamily: "Avenir LT Std",
          fontWeight: '200',
          letterSpacing: 2,
        }}
      />
    </SafeAreaView>
  );
};

export default LinkedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 90,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 2,
    left: 25,
    fontFamily: "Kollektif",
  },
  inputSection: {
    marginBottom: 30,
    marginLeft: 50,
    marginTop: 30,
  },
  inputWrapper: {
    backgroundColor: '#E8EDF3',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 60,
    width: 320,
    right: 20,
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  nextButton: {
    backgroundColor: '#223F61',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: 100,
    position: 'relative',
    left: '60%',
    top: 5,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
    fontFamily: "Avenir LT Std",
    letterSpacing: 2,
  },
});
