import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import BackWard from '../../../assets/icons/BackWard';
import EyeIcon from '../../../assets/icons/EyeIcon';
import ButtonComp from '../../../components/common/ButtonComp';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { useNavigation, NavigationProp } from '@react-navigation/native';


const CurrentPassword = () => {
      const navigation = useNavigation<NavigationProp<any>>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('SecurityScreen')}>
          <BackWard />
        </TouchableOpacity>
        <Text style={styles.title}>Change Password</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        {/* Current Password */}
        <Text style={styles.label}>Current Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Current Password"
            style={styles.input}
            placeholderTextColor="#AAB2BD"
            secureTextEntry
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* New Password */}
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Password"
            style={styles.input}
            placeholderTextColor="#AAB2BD"
            secureTextEntry
          />
          <TouchableOpacity style={styles.iconRight}>
            {/* Eye Off Icon */}
           <EyeIcon
              
              opacity={0.35}
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password */}
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Confirm Password"
            style={styles.input}
            placeholderTextColor="#AAB2BD"
            secureTextEntry
          />
          <TouchableOpacity style={styles.iconRight}>
            {/* Eye Off Icon */}
          <EyeIcon
             
              opacity={0.35}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Confirm Button */}
    <ButtonComp
        title="Confirm Password"
        onPress={() => console.log('Submit pressed')}
        style={{
          backgroundColor: '#223F61',
          marginTop: verticalScale(270),
          marginHorizontal: scale(30),
        }}
        textStyle={{
          textColor: '#FAF8F5',
            fontfamily:"Avenir LT Std",
           fontweight:100,
           letterspacing:scale(2),
        }}
      />
    </SafeAreaView>
  );
};

export default CurrentPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: '#000',
    letterSpacing:scale(3),
    fontFamily:'Kollektif',
  },
  form: {
    marginTop: verticalScale(40),
  },
  label: {
    fontSize: moderateScale(12),
    color: '#223F61',
    marginBottom: verticalScale(10),
    left:scale(17),
    fontFamily:"Avenir LT Std",
    letterSpacing:scale(1),
  },
  inputWrapper: {
    backgroundColor: '#E3E9F1CC',
    borderRadius: moderateScale(10),
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(8),
    marginBottom: verticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    width:'90%',
    left:scale(15),
  },
  input: {
    flex: 1,
    fontSize: moderateScale(14),
    color: '#000',
  },
  iconRight: {
    marginLeft: scale(10),
  },
  forgotText: {
    alignSelf: 'flex-end',
    marginBottom: verticalScale(18),
    fontSize: moderateScale(10),
    color: '#223F61',
    right:scale(22),
    fontFamily:"Avenir LT Std",
    letterSpacing:scale(1),
  },
  
});