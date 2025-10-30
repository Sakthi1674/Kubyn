import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackWard from '../../../assets/icons/BackWard';
import ArrowDown from '../../../assets/icons/ArrowDown';
import Toggle from '../../../components/Toggle';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import colors from '../../../theme/color';

export default function AppSettingsScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const systemScheme = useColorScheme(); // Detect phone theme
  const [selectedMethod, setSelectedMethod] = useState<'light' | 'dark'>(
    systemScheme === 'dark' ? 'dark' : 'light'
  );

  // Optional: Re-sync when system theme changes live
  useEffect(() => {
    if (systemScheme === 'dark') {
      setSelectedMethod('dark');
    } else {
      setSelectedMethod('light');
    }
  }, [systemScheme]);

  const theme = selectedMethod === 'dark' ? colors.dark : colors.light;

  const toggleTheme = (mode: 'light' | 'dark') => {
    setSelectedMethod(mode);
    // optional: persist theme choice globally (e.g. via Context, Redux, or AsyncStorage)
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <BackWard width={20} height={20} stroke={theme.icon} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.text }]}>
          App Setting
        </Text>
      </View>

      {/* Notifications */}
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            Notifications
          </Text>
          <Toggle />
        </View>
        <View style={styles.row}>
          <Text style={[styles.label, { color: theme.text }]}>Sound</Text>
          <Toggle />
        </View>
        <View style={styles.row}>
          <Text style={[styles.label, { color: theme.text }]}>Vibration</Text>
          <Toggle />
        </View>
      </View>

      {/* Theme & Display */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Theme & Display
        </Text>

        {/* Light Mode */}
        <TouchableOpacity
          style={styles.radioRow}
          activeOpacity={0.8}
          onPress={() => toggleTheme('light')}
        >
          <Text style={[styles.label, { color: theme.text }]}>Light</Text>
          <View style={styles.circleWrapper}>
            <View
              style={[
                styles.bigCircle,
                {
                  borderColor: theme.text,
                  opacity: selectedMethod === 'light' ? 1 : 0.3,
                },
              ]}>
              {selectedMethod === 'light' && (
                <View
                  style={[styles.smallCircle, { backgroundColor: theme.Button }]}
                />
              )}
            </View>
          </View>
        </TouchableOpacity>

        {/* Dark Mode */}
        <TouchableOpacity
          style={styles.radioRow}
          activeOpacity={0.8}
          onPress={() => toggleTheme('dark')}
        >
          <Text style={[styles.label, { color: theme.text }]}>Dark</Text>
          <View style={styles.circleWrapper}>
            <View
              style={[
                styles.bigCircle,
                {
                  borderColor: theme.Button,
                  opacity: selectedMethod === 'dark' ? 1 : 0.3,
                },
              ]}>
              {selectedMethod === 'dark' && (
                <View
                  style={[styles.smallCircle, { backgroundColor: theme.Button }]}
                />
              )}
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* Language Preferences */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle1, { color: theme.text }]}>
          Language Preferences
        </Text>
        <TouchableOpacity
          style={[
            styles.languageButton,
            { backgroundColor: theme.buttondark },
          ]}>
          <Text style={[styles.languageText, { color: theme.textSecondary }]}>
            English
          </Text>
          <ArrowDown width={14} height={14} color={theme.icon} />
        </TouchableOpacity>
      </View>

      {/* App Information */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle1, { color: theme.text }]}>
          App Information
        </Text>
        <TouchableOpacity>
          <Text style={[styles.linkText, { color: theme.text }]}>
            Beta Testing
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(24),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(75),
    marginTop: verticalScale(45),
  },
  headerTitle: {
    fontSize: moderateScale(22),
    fontWeight: '700',
    marginLeft: scale(10),
    letterSpacing: scale(4),
    fontFamily: 'Avenir LT Std',
  },
  section: {},
  sectionTitle: {
    fontSize: moderateScale(15),
    fontWeight: '800',
    marginBottom: verticalScale(10),
    fontFamily: 'Avenir LT Std',
  },
  sectionTitle1: {
    fontSize: moderateScale(15),
    fontWeight: '800',
    marginBottom: verticalScale(18),
    fontFamily: 'Avenir LT Std',
    marginTop: verticalScale(19),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(14),
  },
  label: {
    fontSize: moderateScale(15),
    marginBottom: verticalScale(14),
    fontFamily: 'Avenir LT Std',
    fontWeight: '400',
  },
  radioRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(10),
  },
  languageButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(14),
    width: scale(120),
  },
  languageText: {
    fontSize: moderateScale(15),
    opacity: 0.7,
  },
  linkText: {
    fontSize: 15,
  },
  circleWrapper: {
    alignItems: 'flex-end',
  },
  bigCircle: {
    width: scale(18),
    height: scale(18),
    borderWidth: scale(2),
    borderRadius: moderateScale(9),
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallCircle: {
    width: scale(9),
    height: verticalScale(9),
    borderRadius: moderateScale(4.5),
  },
});
