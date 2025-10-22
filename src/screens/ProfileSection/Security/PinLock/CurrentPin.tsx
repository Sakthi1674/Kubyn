import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import BackWard from '../../../../assets/icons/BackWard';
import ButtonComp from '../../../../components/common/ButtonComp';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const CurrentPin = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackWard width={20} height={20} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Pin Lock</Text>
      </View>

      {/* Subtext */}
      <Text style={styles.subText}>Enter Your Current pin</Text>

      {/* PIN Placeholder */}
      <View style={styles.pinContainer}>
        {[0, 1, 2, 3].map((_, index) => (
          <View key={index} style={styles.pinDot} />
        ))}
      </View>

      <Text style={styles.changeText}>Change Your Pin</Text>

      {/* Forgot PIN */}
      <TouchableOpacity onPress={() => navigation.navigate('ForgetPin')}>
        <Text style={styles.forgotText}>Forgot Pin ?</Text>
      </TouchableOpacity>

      {/* Next Button */}
      <View style={styles.buttonWrapper}>
        <ButtonComp
          title="Next"
          onPress={() => navigation.navigate('')}
          style={{
            backgroundColor: '#223F61',
            marginHorizontal: 30,
          }}
          textStyle={{
            color: '#FAF8F5', // fixed from textColor
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
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginTop: 70,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 2,
    marginLeft: 30,
    fontFamily: 'Kollektif',
  },
  subText: {
    fontSize: 14,
    color: '#121212',
    marginTop: 40,
    fontFamily: 'Avenir LT Std',
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 25,
    marginTop: 180,
  },
  pinDot: {
    width: 30,
    height: 2,
    backgroundColor: '#121212',
    marginHorizontal: 10,
    borderRadius: 2,
  },
  changeText: {
    fontSize: 14,
    color: '#121212',
    marginBottom: 20,
    fontFamily: 'Avenir LT Std',
  },
  forgotText: {
    color: '#223F61',
    fontSize: 12,
    fontFamily: 'Avenir LT Std',
    marginTop: 320,
  },
  buttonWrapper: {
    width: '90%',
    position: 'absolute',
    bottom: 40,
  },
  nextButton: {
    backgroundColor: '#223F61',
    borderRadius: 8,
  },
});
