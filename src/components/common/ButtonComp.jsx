import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonComp = ({ 
  title, 
  onPress, 
  color = '#007BFF',        // default background color
  textColor = '#FBFDFF',    // default text color
  style, 
  textStyle 
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, { color: textColor }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 290,
    height: 54,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Avenir LT Std 65 Medium',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: 0,
  },
});

export default ButtonComp;