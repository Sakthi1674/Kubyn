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

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const LinkedScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <BackWard width={15} height={15}onPress={() => navigation.navigate('SecurityScreen')} />
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
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('LinkedOtpScreen')} >
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
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('LinkedOtpScreen')}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Confirm Button */}
   <ButtonComp
      title="Confirm"
        onPress={() => console.log('Submit pressed')}
        style={{
          backgroundColor: '#223F61',
          marginTop: verticalScale(270),
          marginHorizontal: scale(30),

         
        }}
        textStyle={{
            
          Color: '#FAF8F5',
           fontfamily:"Avenir LT Std",
           fontweight:200,
           letterspacing:scale(2),
        }}/>
    </SafeAreaView>
  );
};

export default LinkedScreen;

;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(30),
    marginTop:verticalScale(60),
    
  },
  headerTitle: {
    fontSize: moderateScale(18),
    fontWeight: '700',
    letterSpacing:scale(2),
    left:scale(20),
    fontFamily:"Kollektif"
  },
  inputSection: {
    // marginBottom: verticalScale(30),
    marginLeft:scale(30),
    marginTop:verticalScale(30),
  },
  inputWrapper: {
    backgroundColor: '#E8EDF3',
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(15),
    height: verticalScale(45),
    width:scale(280),
    right:scale(20),
    // left:15,
    // marginBottom: 10,
    justifyContent: 'space-between',
   
  },
  input: {
    flex: 1,
    fontSize: moderateScale(14),
    color: '#000',
  },
  nextButton: {
    backgroundColor: '#223F61',
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    width:scale(90),
    position:'relative',
    left:'60%',
    top:verticalScale(5),
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: moderateScale(14),
    fontFamily:"Avenir LT Std",
    letterSpacing:scale(2),
  },

});
