import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export default function HelpCentreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D2040',
  },
});
