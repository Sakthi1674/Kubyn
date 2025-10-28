import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const Toggle = () => {
  const [isOn, setIsOn] = useState(true);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.toggleContainer, isOn ? styles.toggleOn : styles.toggleOff]}
        onPress={() => setIsOn(!isOn)}
        activeOpacity={0.8}
      >
        <View style={[styles.circle, isOn && styles.circleOn]} />
      </TouchableOpacity>
    </View>
  );
};

export default Toggle;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: verticalScale(10),
  },
  toggleContainer: {
    width: scale(35),
    height: verticalScale(15),
    borderRadius: moderateScale(20),
    padding: scale(4),
    justifyContent: 'center',
    
  },
  toggleOff: {
    backgroundColor: '#ccc',
    alignItems: 'flex-start',
  },
  toggleOn: {
    backgroundColor: '#183153',
    alignItems: 'flex-end',
  },
  circle: {
    width: scale(10),
    height: scale(10),
    borderRadius: moderateScale(12),
    backgroundColor: '#fff',
  },
  circleOn: {
    backgroundColor: '#fff',
  },

});
