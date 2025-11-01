import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import BackWard from '../../../assets/icons/BackWard';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import colors from '../../../theme/color';

const LoginActivity = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? colors.dark : colors.light;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <BackWard width={10} height={16} color={theme.text} />
      </TouchableOpacity>
          <Text style={[styles.title, { color: theme.text }]}>Login Activity</Text>
        </View>

       
        <View style={[styles.sessionBox, { backgroundColor: theme.buttondark }]}>
          <View style={styles.rowBetween}>
            <Text style={[styles.deviceName, { color: theme.text }]}>
              Samsung (Android)
            </Text>
            <Text style={[styles.thisDevice, { color: theme.Button }]}>
              This Device
            </Text>
          </View>
          <Text style={[styles.location, { color: theme.textSecondary }]}>
            Coimbatore, Tamil Nadu
          </Text>
          <Text style={[styles.time, { color: theme.textSecondary }]}>
            2 Hours ago
          </Text>
        </View>

        {/* Other Sessions */}
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Other Sessions</Text>

        <View style={[styles.sessionBox, { backgroundColor: theme.buttondark }]}>
          <Text style={[styles.deviceName, { color: theme.text }]}>iPhone 15</Text>
          <Text style={[styles.location, { color: theme.textSecondary }]}>
            Coimbatore, Tamil Nadu
          </Text>
          <Text style={[styles.time, { color: theme.textSecondary }]}>10 Days ago</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(30),
    paddingTop: verticalScale(60),
  },
  content: {
    padding: scale(0),
  },
  header: {
    flexDirection: 'row',
    
  },
    backButton: {
    position: "absolute",
    top: verticalScale(5),
  },
  title: {
    fontFamily: 'Kollektif-Bold',
    fontWeight: '700',
    letterSpacing: scale(2),
    fontSize: moderateScale(20),
    left:scale(30)
  },
  sectionTitle: {
    fontSize: moderateScale(14),
    fontWeight: '700',
    marginBottom: verticalScale(12),
    fontFamily: 'Avenir LT Std 85 Heavy',
    letterSpacing: scale(2),
  },
  sessionBox: {
    padding: scale(16),
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(26),
    marginTop: verticalScale(20),
  },
  deviceName: {
    fontSize: moderateScale(10),
    fontWeight: '700',
    marginBottom: verticalScale(6),
    fontFamily: 'Avenir LT Std 85 Heavy',
    letterSpacing: scale(1),
  },
  location: {
    fontSize: moderateScale(10),
    fontStyle: 'italic',
    marginBottom: verticalScale(4),
    fontFamily: 'Avenir LT Std 65 Medium',
    letterSpacing: scale(1),
  },
  time: {
    fontSize: moderateScale(10),
    letterSpacing: scale(1),
    fontWeight: '600',
    fontFamily: 'Avenir LT Std 65 Medium',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  thisDevice: {
    fontSize: moderateScale(10),
    fontWeight: '600',
    fontFamily: 'Avenir LT Std 55 Roman',
  },
});

export default LoginActivity;
