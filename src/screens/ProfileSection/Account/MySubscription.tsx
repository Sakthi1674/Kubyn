import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BackWard from '../../../assets/icons/BackWard';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import { useNavigation, NavigationProp } from '@react-navigation/native';


const MySubscriptions = () => {
  const [selectedMethod, setSelectedMethod] = useState('free');
    const navigation = useNavigation<NavigationProp<any>>();


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBack}  onPress={() => navigation.navigate('AccountScreen')}>
          <BackWard width={15} height={15} />
        </TouchableOpacity>
        <Text style={styles.title}>My Subscriptions</Text>
      </View>

      {/* Card 1 - Free */}
      <TouchableOpacity
        style={styles.card1}
        onPress={() => setSelectedMethod('free')}
        activeOpacity={0.8}
      >
        <View style={styles.circleWrapper}>
          <View
            style={[
              styles.bigCircle,
              { opacity: selectedMethod === 'free' ? 1 : 0.2 },
            ]}
          >
            <View style={styles.smallCircle} />
          </View>
        </View>
        <View style={styles.badge1}>
          <Text style={styles.badgeText}>Free</Text>
        </View>
      </TouchableOpacity>

      {/* Card 2 - Basic (Paid) */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => setSelectedMethod('basic')}
        activeOpacity={0.8}
      >
        <View style={styles.circleWrapper}>
          <View
            style={[
              styles.bigCircle,
              { opacity: selectedMethod === 'basic' ? 1 : 0.2 },
            ]}
          >
            <View style={styles.smallCircle} />
          </View>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Paid</Text>
        </View>
      </TouchableOpacity>

      {/* Card 3 - Standard (Paid) */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => setSelectedMethod('standard')}
        activeOpacity={0.8}
      >
        <View style={styles.circleWrapper}>
          <View
            style={[
              styles.bigCircle,
              { opacity: selectedMethod === 'standard' ? 1 : 0.2 },
            ]}
          >
            <View style={styles.smallCircle} />
          </View>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Paid</Text>
        </View>
      </TouchableOpacity>

      {/* Card 4 - Premium (Paid) */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => setSelectedMethod('premium')}
        activeOpacity={0.8}
      >
        <View style={styles.circleWrapper}>
          <View
            style={[
              styles.bigCircle,
              { opacity: selectedMethod === 'premium' ? 1 : 0.2 },
            ]}
          >
            <View style={styles.smallCircle} />
          </View>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Paid</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MySubscriptions;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: verticalScale(50),
    paddingHorizontal: scale(20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: verticalScale(50),
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: '#1e3354',
    marginLeft: scale(30),
    letterSpacing: scale(2),
    fontFamily: 'Kollektif',
  },
  iconBack: {
    padding: scale(5),
    top: scale(4),
  },
  card1: {
    backgroundColor: '#e9eef6',
    borderRadius: moderateScale(15),
    height: verticalScale(90),
    marginBottom: verticalScale(10),
    padding: scale(15),
    justifyContent: 'center',
    marginTop: verticalScale(40),
  },
  card: {
    backgroundColor: '#e9eef6',
    borderRadius: moderateScale(15),
    height: verticalScale(120),
    marginBottom: verticalScale(10),
    padding: scale(15),
    justifyContent: 'center',
    marginTop: verticalScale(10),
  },
  badge1: {
    position: 'absolute',
    bottom: verticalScale(77),
    right: scale(15),
    backgroundColor: '#1e3354',
    borderRadius: moderateScale(8),
    paddingHorizontal: scale(23),
    paddingVertical: verticalScale(6),
  },
  badge: {
    position: 'absolute',
    bottom: verticalScale(105),
    right: scale(15),
    backgroundColor: '#1e3354',
    borderRadius: moderateScale(8),
    paddingHorizontal: scale(23),
    paddingVertical: verticalScale(6),
  },
  badgeText: {
    color: '#fff',
    fontSize: moderateScale(12),
  },
  circleWrapper: {
    position: 'absolute',
    top: verticalScale(15),
    left: scale(15),
  },
  bigCircle: {
    width: scale(18),
    height: scale(18),
    borderWidth: scale(2),
    borderColor: '#223F61',
    borderRadius: scale(9),
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallCircle: {
    width: scale(9),
    height: scale(9),
    backgroundColor: '#223F61',
    borderRadius: scale(5),
  },
});