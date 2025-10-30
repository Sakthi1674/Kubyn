import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import BackWard from '../../../../assets/icons/BackWard';
import ButtonComp from '../../../../components/common/ButtonComp';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import colors from '../../../../theme/color';

const SetPin = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? colors.dark : colors.light;
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackWard width={20} height={20} stroke={theme.icon} />
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: theme.text }]}>Pin Lock</Text>
      </View>

      {/* Subtext */}
      <Text style={[styles.subText, { color: theme.textSecondary }]}>Set Pin</Text>

      {/* PIN Placeholder */}
      <View style={styles.pinContainer}>
        {[0, 1, 2, 3].map((_, index) => (
          <View key={index} style={[styles.pinDot, { backgroundColor: theme.text }]} />
        ))}
      </View>

      {/* Next Button */}
      <View style={styles.buttonWrapper}>
        <ButtonComp
          title="Next"
          onPress={() => navigation.navigate("ResetPin")}
          style={{
            backgroundColor: theme.Button,
            marginHorizontal: scale(30),
          }}
          textStyle={{
            color: theme.bttext,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SetPin;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: scale(30),
    marginTop: verticalScale(70),
  },
  headerText: {
    fontSize: moderateScale(20),
    fontWeight: 700,
    color: '#000',
    letterSpacing: scale(3),
    marginLeft: scale(30),
    fontFamily: 'Kollektif',
  },
  subText: {
    fontSize: moderateScale(10),
    color: '#121212',
    marginTop: verticalScale(40),
    fontFamily: 'Avenir LT Std',
    fontWeight:400,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: verticalScale(25),
    marginTop:verticalScale(100),
  },
  pinDot: {
    width: scale(30),
    height: verticalScale(1),
    backgroundColor: '#121212',
    marginHorizontal: scale(10),
    borderRadius: moderateScale(2),
  },
  changeText: {
    fontSize: moderateScale(10),
    color: '#121212',
    marginBottom: verticalScale(20),
    fontFamily: 'Avenir LT Std',
    fontWeight:700,
    // marginTop:200,
  },
  forgotText: {
    color: '#223F61',
    fontSize: moderateScale(10),
    fontFamily: 'Avenir LT Std',
    marginTop: verticalScale(240),
    fontWeight:400,
  },
  buttonWrapper: {
    width: '90%',
    position: 'absolute',
    bottom: verticalScale(40),
  },
  nextButton: {
    backgroundColor: '#223F61',
    borderRadius: moderateScale(8),
  },
});

