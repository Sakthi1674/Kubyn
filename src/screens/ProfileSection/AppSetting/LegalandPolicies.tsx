import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import OpenEye from '../../../assets/icons/OpenEye';
import BackWard from '../../../assets/icons/BackWard';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';




const PolicyButton = ({ title }: { title: string }) => (
  <TouchableOpacity style={styles.policyButton} activeOpacity={0.7}>
    <Text style={styles.policyText}>{title}</Text>
    <OpenEye/>
  </TouchableOpacity>
);

const LegalPolicies = () => {
          const navigation = useNavigation<NativeStackNavigationProp<any>>();
  
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" /> */}

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.navigate('ProfileScreen')}>
     <BackWard/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Legal & Policies</Text>
      </View>

      {/* Buttons */}
      <View style={styles.content}>
        <PolicyButton title="Terms & Conditions" />
    
        <PolicyButton title="Privacy Policy" />
     
        <PolicyButton title="Data Sharing Policy" />
      
      </View>
    </SafeAreaView>
  );
};

export default LegalPolicies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: scale(20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(50),
   
   
  },
  headerTitle: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    letterSpacing: scale(4),
    color: '#000',
    marginLeft: scale(10),
   left:scale(20),
   fontFamily:'Avenir LT Std',
    
  },
  content: {
    marginTop: verticalScale(30),
    gap: scale(15),
    height:verticalScale(50),
  },
  policyButton: {
    backgroundColor: 'rgba(227, 233, 241, 1)',
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(15),
    paddingHorizontal: scale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  //  opacity:0.9
  },
  policyText: {
    fontSize: moderateScale(12),
    fontWeight: '400',
    color: '#111',
    fontFamily:'#223F6140'
  },
});