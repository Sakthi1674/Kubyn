import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import OpenEye from '../../../assets/icons/OpenEye';
import BackWard from '../../../assets/icons/BackWard';
import colors from '../../../theme/color';

const PolicyButton = ({
  title,
  theme,
}: {
  title: string;
  theme: any;
}) => (
  <TouchableOpacity
    style={[styles.policyButton, { backgroundColor: theme.buttondark }]}
    activeOpacity={0.7}>
    <Text style={[styles.policyText, { color: theme.text }]}>{title}</Text>
    <OpenEye width={10} height={16} stroke={theme.text} />
  </TouchableOpacity>
);

const LegalPolicies = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? colors.dark : colors.light;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <BackWard width={10} height={16} stroke={theme.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.text }]}>Legal & Policies</Text>
      </View>

      {/* Buttons */}
      <View style={styles.content}>
        <PolicyButton title="Terms & Conditions" theme={theme} />
        <PolicyButton title="Privacy Policy" theme={theme} />
        <PolicyButton title="Data Sharing Policy" theme={theme} />
      </View>
    </SafeAreaView>
  );
};

export default LegalPolicies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(30),
    paddingTop: verticalScale(60),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  headerTitle: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    letterSpacing: scale(4),
    marginLeft: scale(30),
    fontFamily: 'Avenir LT Std 95 Black',
  },
content: {
  marginTop: verticalScale(30),
  gap: scale(15),
  // ✅ Shadow for iOS
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 4,
  // ✅ Elevation for Android
  elevation: 5,
},

  policyButton: {
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(15),
    paddingHorizontal: scale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  policyText: {
    fontSize: moderateScale(12),
    fontWeight: '400',
    fontFamily: 'Avenir LT Std 55 Roman',
  },
});
