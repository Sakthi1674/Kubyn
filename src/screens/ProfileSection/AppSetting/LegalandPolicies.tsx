import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import OpenEye from '../../../assets/icons/OpenEye';
import BackWard from '../../../assets/icons/BackWard';


const PolicyButton = ({ title }: { title: string }) => (
  <TouchableOpacity style={styles.policyButton} activeOpacity={0.7}>
    <Text style={styles.policyText}>{title}</Text>
    <OpenEye/>
  </TouchableOpacity>
);

const LegalPolicies = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" /> */}

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
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
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 90,
   
   
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 3,
    color: '#000',
    marginLeft: 10,
   left:20,
   fontFamily:'Avenir LT Std',
    
  },
  content: {
    marginTop: 30,
    gap: 15,
    height:90,
  },
  policyButton: {
    backgroundColor: '#EAF0F8',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  policyText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#111',
  },
});