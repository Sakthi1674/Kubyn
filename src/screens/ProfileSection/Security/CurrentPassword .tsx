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

const CurrentPassword = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <BackWard/>
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
          marginTop: 300,
          marginHorizontal: 30,
        }}
        textStyle={{
          textColor: '#FAF8F5',
            fontfamily:"Avenir LT Std",
           fontweight:100,
           letterspacing:2,
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
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 90,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 19,
    color: '#000',
    letterSpacing:2,
    fontFamily:'Kollektif',
  },
  form: {
    marginTop: 80,
  },
  label: {
    fontSize: 12,
    color: '#223F61',
    marginBottom: 10,
    left:17,
    fontFamily:"Avenir LT Std",
    letterSpacing:1,
  },
  inputWrapper: {
    backgroundColor: '#EDF1F7',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width:'90%',
    left:15,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  iconRight: {
    marginLeft: 10,
  },
  forgotText: {
    alignSelf: 'flex-end',
    marginBottom: 18,
    fontSize: 12,
    color: '#223F61',
    right:22,
    fontFamily:"Avenir LT Std",
    letterSpacing:1,
  },
  
});