import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BackWard from '../../../assets/icons/BackWard';


const MySubscriptions = () => {
  const [selectedMethod, setSelectedMethod] = useState('free'); // "free", "basic", etc.

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBack}>
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
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 55,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e3354',
    marginLeft: 30,
    letterSpacing:3,
    fontFamily:'Kollektif',
    // marginBottom:40,
  },
  iconBack: {
    padding: 5,
    top:4,
  },
   card1: {
    backgroundColor: '#e9eef6',
    borderRadius: 15,
    height: 110,
    marginBottom: 30,
    padding: 15,
    justifyContent: 'center',
    marginTop:60,
  },
  card: {
    backgroundColor: '#e9eef6',
    borderRadius: 15,
    height: 150,
    marginBottom: 30,
    padding: 15,
    justifyContent: 'center',
    marginTop:10,
  },
  badge1: {
    position: 'absolute',
    bottom: 97,
    right: 15,
    backgroundColor: '#1e3354',
    borderRadius: 8,
    paddingHorizontal: 23,
    paddingVertical: 6,
    fontFamily:"Avenir LT Std",
  },
  badge: {
    position: 'absolute',
    bottom: 135,
    right: 15,
    backgroundColor: '#1e3354',
    borderRadius: 8,
    paddingHorizontal: 23,
    paddingVertical: 6,
      fontFamily:"Avenir LT Std",
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
  },
  circleWrapper: {
    position: 'absolute',
    top: 15,
    left: 15,
  },
  bigCircle: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: '#223F61',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 26,
  },
  smallCircle: {
    width: 9,
    height: 9,
    backgroundColor: '#223F61',
    borderRadius: 4.5,
  },
});